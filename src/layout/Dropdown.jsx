import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icon";
import useAuth from "../hooks/use-auth";
import useDropdown from "../hooks/use-dropdown";

function Dropdown() {
  const { logout, authUser } = useAuth();
  const { dropdownRef, isOpen, setIsOpen } = useDropdown();

  return (
    <div ref={dropdownRef} className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Avatar src={authUser.profileImage} />
      </div>
      {isOpen && (
        <div className="w-64 bg-white absolute right-1 translate-y-1 border rounded-lg shadow-xl p-2">
          <Link onClick={() => setIsOpen(false)} to={`/profile/${authUser.id}`}>
            <div className=" flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
              <Avatar src={authUser.profileImage} className="h-14" />
              <div>
                <div className="font-semibold">
                  {authUser.firstName + " " + authUser.lastName}
                </div>
                <div className="text-sm text-gray-500">See your profile</div>
              </div>
            </div>
          </Link>
          <hr className="m-2 border" />
          <div
            onClick={logout}
            className="flex gap-4 p-2 items=center cursor-pointer hover:bg-gray-100 rounded-xl"
          >
            <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <div className="font-semibold text-sm self-center">Logout</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
