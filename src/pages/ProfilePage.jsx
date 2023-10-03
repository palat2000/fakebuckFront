import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";

function ProfilePage() {
  return (
    <div className="shadow pb-4 bg-gradient-to-b from-gray-300 to-white">
      <ProfileCover />
      <ProfileInfo />
    </div>
  );
}

export default ProfilePage;
