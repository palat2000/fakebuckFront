import { useRef, useState } from "react";
import FormButton from "./FormButton";

function PictureForm({ title, children }) {
  const [file, setFile] = useState(null);
  const inputEl = useRef(null);
  return (
    <div>
      <input
        ref={inputEl}
        type="file"
        className="hidden"
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex items-center justify-between min-w-[600px]">
        <h5 className="text-xl font-semibold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton>Save</FormButton>
              <FormButton
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = "";
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton onClick={() => inputEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      <div className="flex justify-center">
        {children(file ? URL.createObjectURL(file) : undefined, () =>
          inputEl.current.click()
        )}
      </div>
    </div>
  );
}

export default PictureForm;
