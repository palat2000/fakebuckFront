import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

function PostItem({ post }) {
  return (
    <div className="bg-white px-4 pt-3 border shadow rounded-lg">
      <PostHeader post={post} />
      <PostContent message={post.message} image={post.image} />
      <PostFooter post={post} />
    </div>
  );
}

export default PostItem;
