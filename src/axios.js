import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://movie-booking-api.vercel.app/",
  withCredentials: true,
});
