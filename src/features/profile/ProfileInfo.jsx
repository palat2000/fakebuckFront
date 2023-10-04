import Avatar from "../../components/Avatar";
import AuthUserAction from "./AuthUserAction";
import FriendAction from "./FriendAction";
import ReceiverAction from "./ReceiverAction";
import RequesterAction from "./RequesterAction";
import UnknownAction from "./UnknownAction";

function ProfileInfo({ profileUser }) {
  return (
    <div className="max-w-6xl mx-auto flex gap-4 px-4 items-end">
      <div className="-mt-8">
        <Avatar
          src={profileUser.profileImage}
          className="h-40 outline outline-[3.5px] outline-white"
        />
      </div>
      <div className=" mb-2 flex-1">
        <h2 className="text-2xl font-bold">
          {profileUser.firstName} {profileUser.lastName}
        </h2>
        <span className="block text-gray-500 font-semibold mb-2">
          6 Friends
        </span>
        <div className="flex -space-x-3">
          <Avatar className="h-8" />
          <Avatar className="h-8" />
          <Avatar className="h-8" />
        </div>
      </div>
      <div>
        <ReceiverAction />
        {/* <RequesterAction /> */}
        {/* <FriendAction /> */}
        {/* <UnknownAction /> */}
        {/* <AuthUserAction /> */}
      </div>
    </div>
  );
}

export default ProfileInfo;
