import Image from "next/image";
import styles from "./movieDetail.module.css";
import Test from "/public/Rectangle 29.png";
import { MovieDetail } from "@/utils/interfaces";
import { formatToUtcDate } from "@/utils/constants";
import { IMAGE_BASE_URL } from "@/utils/services";

type MovieDetailProps = {
  movie: MovieDetail;
};

const MovieDetail = ({ movie }: MovieDetailProps) => {
  const {
    main__details,
    main__container,
    img__container,
    minor__info,
    rating,
    genres,
    info,
    overview,
  } = styles;

  return (
    <section className={main__details}>
      <div className={`${main__container}`}>
        <div className={img__container}>
          <Image fill alt="" src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} />
        </div>
        <div className={info}>
          <div>
            <div className={minor__info}>
              <p data-testid="movie-title">
                {movie.title} <span></span>
              </p>
              <p data-testid="movie-release-date">
                {formatToUtcDate(movie.release_date)} <span></span>
              </p>
              <p data-testid=" movie-runtime">
                {movie.runtime}m <span></span>
              </p>
            </div>
            <div className={genres}>
              {movie.genres.map((genre) => (
                <span>{genre.name}</span>
              ))}
            </div>
          </div>
        </div>
        <div data-testid="movie-overview" className={overview}>
          {movie.overview}
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
