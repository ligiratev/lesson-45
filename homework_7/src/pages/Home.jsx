import React, { useEffect, useState } from "react";
import { getPosts, addPost } from "../services/api";
import Post from "../components/Post";
import Pagination from "../components/Pagination";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const POSTS_PER_PAGE = 5;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const skip = (currentPage - 1) * POSTS_PER_PAGE;
      const data = await getPosts(POSTS_PER_PAGE, skip);
      setPosts(data);
      setTotalPages(Math.ceil(150 / POSTS_PER_PAGE)); // Всего 150 постов в dummyjson
    } catch (error) {
      toast.error("Ошибка загрузки постов!");
    }
  };

  const onSubmit = async (data) => {
    try {
      const newPost = await addPost({ title: data.title, body: data.body, userId: 1 });
      setPosts((prev) => [newPost, ...prev]);
      toast.success("Пост добавлен!");
      reset();
    } catch (error) {
      toast.error("Ошибка при добавлении поста!");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1>Новости</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="post-form">
        <input {...register("title", { required: true })} placeholder="Заголовок" />
        <textarea {...register("body", { required: true })} placeholder="Текст поста" />
        <button type="submit">Добавить пост</button>
      </form>

      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;