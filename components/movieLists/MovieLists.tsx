import styles from "./movieLists.module.css";
import { TOP_RATED_URL } from "@/utils/services";
import { options } from "@/utils/services";
import { MoviesList, MovieCard } from "@/utils/interfaces";
import Card from "../card/Card";

const getTrending = async () => {
  const response = await fetch(TOP_RATED_URL, options);
  const data: MoviesList = await response.json();
  const results = data.results;
  return results;
};

const MovieLists = async () => {
  const trendingMovies = await getTrending();
  const { movieList__container, featured__section } = styles;
  return (
    <section className={featured__section}>
      <div className="container">
        <h2>Featured Movies</h2>
      </div>
      <div className={`container ${movieList__container}`}>
        {trendingMovies &&
          trendingMovies
            .slice(0, 10)
            .map((movie: MovieCard) => <Card key={movie.id} card={movie} />)}
      </div>
    </section>
  );
};

export default MovieLists;
