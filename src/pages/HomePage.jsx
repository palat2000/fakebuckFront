import { useState, useEffect } from "react";
import CreatePostButton from "../features/post/CreatePostButton";
import PostList from "../features/post/PostList";
import axios from "../config/axios";
import { toast } from "react-toastify";
function HomePage() {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    axios
      .get("/post/friend")
      .then((res) => setAllPost(res.data.posts))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
      <CreatePostButton />
      <PostList allPost={allPost} />
    </div>
  );
}

export default HomePage;
