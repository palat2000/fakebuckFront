import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { toast } from "react-toastify";

function FriendAction({ setStatusWithAuthUser }) {
  const { profileId } = useParams();
  const handleClickUnfriend = async () => {
    try {
      await axios.delete(`/friend/${profileId}/unfriend`);
      setStatusWithAuthUser("UNKNOWN");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return <ActionButton onClick={handleClickUnfriend}>Unfriend</ActionButton>;
}

export default FriendAction;
