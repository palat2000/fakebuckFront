import { toast } from "react-toastify";
import ActionButton from "./ActionButton";
import axios from "axios";
import { useParams } from "react-router-dom";

function ReceiverAction({ setStatusWithAuthUser }) {
  const { profileId } = useParams();
  const handleClickAccept = async () => {
    try {
      await axios.patch(`/friend/${profileId}`);
      setStatusWithAuthUser("FRIEND");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleClickReject = async () => {
    try {
      await axios.delete(`/friend/${profileId}/reject`);
      setStatusWithAuthUser("UNKNOWN");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="flex gap-2">
      <ActionButton onClick={handleClickAccept}>Accept</ActionButton>
      <ActionButton onClick={handleClickReject}>Reject</ActionButton>
    </div>
  );
}

export default ReceiverAction;
