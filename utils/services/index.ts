const TMDB_API_BASE_URL = "https://api.themoviedb.org/3"

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMBD_ACCESS_TOKEN_AUTH}`
    }
};

export const GET_MOVIE_DETAILS = (id: number) => `https://api.themoviedb.org/3/movie/${id}?language=en-US`
export const SEARCH_URL = (query: string) => `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
// export const SEARCH_URL = (query: string) => `${TMDB_API_BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
export const TRAILER_URL = (id: number) => `${TMDB_API_BASE_URL}/movie/${id}/videos?language=en-US`
export const TOP_RATED_URL = `${TMDB_API_BASE_URL}/movie/top_rated?language=en-US&page=1`
export const UPCOMING_URL = `${TMDB_API_BASE_URL}/movie/upcoming?language=en-US&page=1`
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

export const getHeroTrailer = async (movieId: number) => {
    try {
        const response = await fetch(TRAILER_URL(movieId), options)
        const data = await response.json()
        const videos = data.results
        const trailer = videos && videos.find(({ type, site }: { type: string, site: string }) => type === "Trailer" || "Teaser" && site === "YouTube")
        return trailer
    } catch (error) {
        console.error(error)
    }
}

const getMovieTrailer = async (movieId: number) => {
    try {
        const response = await fetch(TRAILER_URL(movieId), options)
        const data = await response.json()
        const videos = data.results
        const trailer = videos && videos.find(({ type, site }: { type: string, site: string }) => type === "Trailer" || "Teaser" && site === "YouTube")
        return trailer
    } catch (error) {
        console.error(error)
    }
}