import axios from "axios";

const instance = axios.create({
  baseURL: "https://encouraging-erin-neckerchief.cyclic.app/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});



export default instance;
