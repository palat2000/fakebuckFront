import { useState, useEffect } from "react";
import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import useAuth from "../hooks/use-auth";

function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState("");
  const [profileFriend, setProfileFriend] = useState([]);
  const [loading, setLoading] = useState(false);
  const { profileId } = useParams();
  const { authUser } = useAuth();
  const isAuthUser = +profileId === authUser.id;

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/user/" + profileId);
        setProfileUser(data.user);
        setStatusWithAuthUser(data.status);
        setProfileFriend(data.friends);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [profileId]);
  if (!profileUser) {
    return (
      <h1 className="text-center p-8 text-3xl font-bold">
        404 User not found !
      </h1>
    );
  }
  return (
    <div className="shadow pb-4 bg-gradient-to-b from-gray-300 to-white">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProfileCover
            coverImage={
              isAuthUser ? authUser.coverImage : profileUser?.coverImage
            }
          />
          <ProfileInfo
            profileUser={isAuthUser ? authUser : profileUser}
            statusWithAuthUser={statusWithAuthUser}
            setStatusWithAuthUser={setStatusWithAuthUser}
            profileFriend={profileFriend}
          />
        </>
      )}
    </div>
  );
}

export default ProfilePage;
