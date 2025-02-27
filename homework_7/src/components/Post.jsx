import React from "react";
import { deletePost } from "../services/api";
import { toast } from "react-toastify";

const Post = ({ post, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deletePost(post.id);
      toast.success("Пост удалён!");
      onDelete(post.id);
    } catch (error) {
      toast.error("Ошибка при удалении поста!");
    }
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default Post;