import { toast } from "react-toastify";
import useAuth from "../../hooks/use-auth";
import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from "../../icon";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useState } from "react";

function PostFooter({ post }) {
  const [likes, setLikes] = useState(post.likes);
  // const [thisPost, setThisPost] = useState(post);
  const { authUser } = useAuth();
  const { id } = post;
  const isLike = likes.find((el) => el.userId === authUser.id);

  const handleClickLike = async () => {
    try {
      await axios.post(`/post/${id}/like`);
      if (isLike) {
        return setLikes(likes.filter((el) => el.userId !== authUser.id));
      }
      setLikes([...likes, { userId: authUser.id }]);
      // setThisPost(data.post);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <div className="flex justify-between pb-2">
        {likes.length > 0 && (
          <div className="flex gap-1 items-center">
            <div className="bg-blue-500 rounded-full flex justify-center items-center h-5 w-5">
              <ThumbsUpIcon />
            </div>
            <span className="text-sm text-gray-500">{likes.length}</span>
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
