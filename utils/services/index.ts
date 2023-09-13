
const TMDB_API_BASE_URL = "https://api.themoviedb.org/3"

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMBD_ACCESS_TOKEN_AUTH ?? "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA3Nzc1MWRmYmQxYmFjZDcwMDAzZmYyNzUxODg2YyIsInN1YiI6IjYzZGQzYjExY2U1ZDgyMDA4NDhjNzc5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5Z2ljr4fG3Nmoc1R2U0MgiEvz-E49MPNsmwbHZIv8A"}`
    }
};

export const TRENDING_URL = `${TMDB_API_BASE_URL}/movie/popular?language=en-US&page=1`
export const GET_MOVIE_DETAILS = (id: number) => `https://api.themoviedb.org/3/movie/${id}?language=en-US`
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

export const SEARCH_URL = (query: string) => `${TMDB_API_BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`