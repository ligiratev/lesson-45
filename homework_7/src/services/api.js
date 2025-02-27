import axios from "axios";

const API_URL = "https://dummyjson.com/posts";

// Получение всех постов
// export const getPosts = async () => {
//   const response = await axios.get(API_URL);
//   return response.data.posts;
// };

// Пагинация
export const getPosts = async (limit = 5, skip = 0) => {
    const response = await axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
    return response.data.posts;
};  

// Добавление нового поста
export const addPost = async (post) => {
  const response = await axios.post(`${API_URL}/add`, post);
  return response.data;
};

// Удаление поста по id
export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};