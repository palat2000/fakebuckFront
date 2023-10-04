import { useState, useEffect } from "react";
import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import useAuth from "../hooks/use-auth";

function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { profileId } = useParams();
  const { authUser } = useAuth();
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/user/" + profileId);
        setProfileUser(data.user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (authUser.id === +profileId) {
      setProfileUser(authUser);
    } else {
      fetch();
    }
  }, [profileId, authUser]);
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
          <ProfileCover coverImage={profileUser?.coverImage} />
          <ProfileInfo profileUser={profileUser} />
        </>
      )}
    </div>
  );
}

export default ProfilePage;
