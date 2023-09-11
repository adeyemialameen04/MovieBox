import { ACCESS_TOKEN } from "../constants";

const TMDB_API_BASE_URL = "https://api.themoviedb.org/3"

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN ?? "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA3Nzc1MWRmYmQxYmFjZDcwMDAzZmYyNzUxODg2YyIsInN1YiI6IjYzZGQzYjExY2U1ZDgyMDA4NDhjNzc5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5Z2ljr4fG3Nmoc1R2U0MgiEvz-E49MPNsmwbHZIv8A"}`
    }
};

export const TRENDING_URL = `${TMDB_API_BASE_URL}/trending/all/day?language=en-US`
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"