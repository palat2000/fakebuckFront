import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { EllipsisIcon } from "../../icon";
import formatTimeAgo from "../../utils/time-ago";

function PostHeader({ post }) {
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
      <div className="relative">
        <div className="cursor-pointer h-8 w-8 bg-gray-100 hover:bg-gray-200 rounded-full flex justify-center items-center">
          <EllipsisIcon className="fill-gray-500" />
        </div>
        <ul className="bg-white absolute right-0 translate-y-1 border rounded-lg p-2 shadow w-36 hidden">
          <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
            Edit
          </li>
          <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostHeader;
