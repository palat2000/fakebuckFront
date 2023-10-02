import { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

function RegisterContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 py-4 px-4 rounded-md font-semibold text-lg text-white"
      >
        Create new account
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Sign up">
        <RegisterForm />
      </Modal>
    </div>
  );
}

export default RegisterContainer;
