import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { EllipsisIcon } from "../../icon";
import formatTimeAgo from "../../utils/time-ago";
import useDropdown from "../../hooks/use-dropdown";
import useAuth from "../../hooks/use-auth";

function PostHeader({ post, deletePost }) {
  const { authUser } = useAuth();
  const { dropdownRef, isOpen, setIsOpen } = useDropdown();

  return (
    <div className="flex justify-between gap-4 items-center">
      <Link to={`/profile/${post.user.id}`}>
        <Avatar src={post.user.profileImage} />
      </Link>
      <div className="flex flex-col flex-1">
        <Link
          className="font-semibold hover:underline self-start text-sm"
          to={`/profile/${post.user.id}`}
        >
          {post.user.firstName + " " + post.user.lastName}
        </Link>
        <small className="text-gray-500 text-xs">
          {formatTimeAgo(post.createdAt)}
        </small>
      </div>
      {post.userId === authUser.id && (
        <div ref={dropdownRef} className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer h-8 w-8 bg-gray-100 hover:bg-gray-200 rounded-full flex justify-center items-center"
          >
            <EllipsisIcon className="fill-gray-500" />
          </div>
          {isOpen && (
            <ul className="bg-white absolute right-0 translate-y-1 border rounded-lg p-2 shadow w-36">
              <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
                Edit
              </li>
              <li
                onClick={() => deletePost(post.id)}
                className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer"
              >
                Delete
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default PostHeader;
