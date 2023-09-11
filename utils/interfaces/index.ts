export interface MovieCard {
    backdrop_path: string
    poster_path: string
    original_title: string
    original_name: string
    id: number
    release_date: string
}

export interface MoviesList {
    results: MovieCard[]
}