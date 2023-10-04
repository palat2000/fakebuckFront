import { useState } from "react";
import { PenIcon } from "../../icon";
import ActionButton from "./ActionButton";
import Modal from "../../components/Modal";
import EditProfileForm from "./EditProfileForm";

function AuthUserAction() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ActionButton onClick={() => setIsOpen(true)}>
        <PenIcon />
        <span className="font-semibold">Edit profile</span>
      </ActionButton>
      <Modal
        isOpen={isOpen}
        title="Edit profile"
        onClose={() => setIsOpen(false)}
      >
        <EditProfileForm onSuccess={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}

export default AuthUserAction;
