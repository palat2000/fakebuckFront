import { ImageIcon } from "../../icon";
import useAuth from "../../hooks/use-auth";
import { useRef, useState } from "react";
import axios from "../../config/axios";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

function SelectImageButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer gap-2"
    >
      <div className="bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center">
        <ImageIcon />
      </div>
      <span>Add photo</span>
    </div>
  );
}

function CreateButton({ children }) {
  return (
    <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg w-full">
      {children}
    </button>
  );
}
function PostForm({ onSuccess }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);
  const { authUser } = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      if (message) {
        formData.append("message", message);
      }
      setLoading(true);
      await axios.post("/post", formData);
      onSuccess();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
        <textarea
          className="block w-full outline-none resize-none"
          rows="5"
          placeholder={`What's on your mind, ${authUser.firstName}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {file ? (
          <div
            className="cursor-pointer"
            onClick={() => fileEl.current.click()}
          >
            <img
              className="max-h-[475px]"
              src={URL.createObjectURL(file)}
              alt="post"
            />
          </div>
        ) : (
          <SelectImageButton onClick={() => fileEl.current.click()} />
        )}
        <input
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
          ref={fileEl}
          type="file"
          className="hidden"
        />
        <CreateButton>Post</CreateButton>
      </form>
    </>
  );
}

export default PostForm;
