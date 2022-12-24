import axios from "axios";

axios.defaults.withCredentials = true;
export const makeRequest = axios.create({
  baseURL: "https://booking-api-six.vercel.app/",
  withCredentials: true,
});
