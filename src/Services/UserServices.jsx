import axios from "./Customize-Axios";

const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

const portCreateUser = (name, job) => {
  return axios.post("/api/user", { name, job });
};

export { fetchAllUser, portCreateUser };
