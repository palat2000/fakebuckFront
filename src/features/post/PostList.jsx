import PostItem from "./PostItem";

function PostList({ allPost }) {
  return (
    <div className="flex flex-col gap-4">
      {allPost.map((el) => (
        <PostItem key={el.id} post={el} />
      ))}
    </div>
  );
}

export default PostList;
