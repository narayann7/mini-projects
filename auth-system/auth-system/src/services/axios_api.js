import axios from "axios";
import { serverBaseUrl } from "../utility/constants";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: serverBaseUrl,
});



export default api;