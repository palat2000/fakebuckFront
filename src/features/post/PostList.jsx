import PostItem from "./PostItem";

function PostList({ allPost, deletePost }) {
  return (
    <div className="flex flex-col gap-4">
      {allPost.map((el) => (
        <PostItem key={el.id} post={el} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default PostList;
