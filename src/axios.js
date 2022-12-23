import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://movie-booking-fi77tcjlc-maxxxara.vercel.app/",
  withCredentials: true,
});
