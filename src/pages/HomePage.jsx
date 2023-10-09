import { useState, useEffect } from "react";
import CreatePostButton from "../features/post/CreatePostButton";
import PostList from "../features/post/PostList";
import axios from "../config/axios";
import { toast } from "react-toastify";
function HomePage() {
  const [allPost, setAllPost] = useState([]);

  const createPost = async (data) => {
    try {
      const res = await axios.post("/post", data);
      const newPost = res.data.post;
      setAllPost([newPost, ...allPost]);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`/post/${postId}`);
      setAllPost(allPost.filter((el) => el.id !== postId));
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    axios
      .get("/post/friend")
      .then((res) => setAllPost(res.data.posts))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
      <CreatePostButton createPost={createPost} />
      <PostList allPost={allPost} deletePost={deletePost} />
    </div>
  );
}

export default HomePage;
