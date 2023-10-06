function PostContent({ message, image }) {
  return (
    <div className="py-2 flex flex-col gap-4">
      {message && <span className="text-sm">{message}</span>}
      <div className="-mx-4">{image && <img src={image} alt="" />}</div>
    </div>
  );
}

export default PostContent;
