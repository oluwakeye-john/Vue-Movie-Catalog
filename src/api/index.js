import axios from "axios";
import { API_KEY, BASE_URL } from "./config";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getPopularRequest = (page) => {
  return api.get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
};

export const getMovieDetailRequest = (id) => {
  return api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
};

export const searchRequest = (val) => {
  return api.get(
    `/search/movie?api_key=${API_KEY}&query=${val}&language=en-US`
  );
};
