import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://movie-booking-2yi20i7kn-maxxxara.vercel.app/",
  withCredentials: true,
});
