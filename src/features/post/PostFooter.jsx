import { toast } from "react-toastify";
import useAuth from "../../hooks/use-auth";
import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from "../../icon";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useState } from "react";

function PostFooter({ post }) {
  const { authUser } = useAuth();
  // const { totalLike, likes, id } = post;
  const [thisPost, setThisPost] = useState(post);
  const isLike =
    thisPost.likes.find((el) => el.userId === authUser.id) || false;

  const handleClickLike = async () => {
    try {
      const { data } = await axios.post(`/post/${thisPost.id}/like`);
      setThisPost(data.post);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="flex justify-between pb-2">
        {thisPost.totalLike > 0 && (
          <div className="flex gap-1 items-center">
            <div className="bg-blue-500 rounded-full flex justify-center items-center h-5 w-5">
              <ThumbsUpIcon />
            </div>
            <span className="text-sm text-gray-500">{thisPost.totalLike}</span>
          </div>
        )}
        <span className="text-sm text-gray-500 hover:underline cursor-pointer">
          8 comments
        </span>
      </div>
      <hr />
      <div className="flex gap-1 py-1">
        <ActionButton onClick={handleClickLike} active={isLike}>
          <div className="flex justify-center gap-1">
            <ThumbsUpAltIcon
              className={isLike ? "fill-blue-600" : "fill-gray-500"}
            />
            <span>Like</span>
          </div>
        </ActionButton>
        <ActionButton>
          <div className="flex justify-center gap-1 ">
            <MessageIcon className="fill-gray-500" />
            <span>Comments</span>
          </div>
        </ActionButton>
      </div>
    </div>
  );
}

export default PostFooter;
