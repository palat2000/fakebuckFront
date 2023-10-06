import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import { toast } from "react-toastify";
import axios from "../../config/axios";

function RequesterAction({ setStatusWithAuthUser }) {
  const { profileId } = useParams();
  const handleClickCancel = async () => {
    try {
      await axios.delete(`/friend/${profileId}/cancel`);
      setStatusWithAuthUser("UNKNOWN");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <ActionButton onClick={handleClickCancel}>Cancel request</ActionButton>
  );
}

export default RequesterAction;
