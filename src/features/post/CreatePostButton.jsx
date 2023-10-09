import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";
import useAuth from "../../hooks/use-auth";
import { useState } from "react";
import PostForm from "./PostForm";

function Button({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-200 flex-1 rounded-full text-gray-500 px-3 py-1.5 cursor-pointer hover:bg-gray-300 hover:text-gray-600 flex items-center"
    >
      {children}
    </div>
  );
}

function CreatePostButton({ createPost }) {
  const [isOpen, setIsOpen] = useState(false);
  const { authUser } = useAuth();

  return (
    <div className="bg-white border rounded-lg px-4 py-3 shadow flex gap-2">
      <Link to={`/profile/${authUser.id}`}>
        <Avatar src={authUser.profileImage} />
      </Link>
      <Button onClick={() => setIsOpen(true)}>
        What&apos;s on your mind, {authUser.firstName}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create post"
        minWidth="500px"
      >
        <PostForm onSuccess={() => setIsOpen(false)} onSubmit={createPost} />
      </Modal>
    </div>
  );
}

export default CreatePostButton;
