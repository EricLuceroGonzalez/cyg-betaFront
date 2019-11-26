import axios from "axios";

const api = axios.create({
  // baseURL: "https://cyg-beta.herokuapp.com/api"
  baseURL: "http://localhost:8000/api"
});

// export const getAllComments = () => api.get("/comments");
// export const postComment = content => api.post("/aComment", content);
export const postMail = cont => api.post("/newMail", cont);

const apis = {
  postMail
};

export default apis;
