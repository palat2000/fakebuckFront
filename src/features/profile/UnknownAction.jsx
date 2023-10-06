import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import { toast } from "react-toastify";
import axios from "../../config/axios";

function UnknownAction({ setStatusWithAuthUser }) {
  const { profileId } = useParams();

  const handleClickAddFriend = async () => {
    try {
      await axios.post(`/friend/${profileId}`);
      setStatusWithAuthUser("REQUESTER");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return <ActionButton onClick={handleClickAddFriend}>Add friend</ActionButton>;
}

export default UnknownAction;
