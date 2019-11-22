import axios from "axios";

const api = axios.create({
  baseURL: "https://cyg-beta.herokuapp.com/api"
  // baseURL: "http://localhost:3001/api"
});

// export const getAllComments = () => api.get("/comments");
// export const postComment = content => api.post("/aComment", content);
export const postForm = cont => api.post("/newFormUser", cont);

const apis = {
//   getAllComments,
//   postComment,
  postForm
};

// baseURL: "http://localhost:3000/api"
export default apis;
