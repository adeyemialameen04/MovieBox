import Image from "next/image";
import styles from "./movieDetail.module.css";
import { MovieDetail } from "@/utils/interfaces";
import { formatDate, formatToUtcDate } from "@/utils/constants";
import { FaWandMagic, FaFilm } from "react-icons/fa6";
import { IMAGE_BASE_URL, TRAILER_URL, options } from "@/utils/services";
import ReactPlayer from "react-player/youtube";

type MovieDetailProps = {
  movie: MovieDetail;
};

const MovieDetail = async ({ movie }: MovieDetailProps) => {
  const {
    main__details,
    main__container,
    img__container,
    overview,
    grid,
    left,
    right,
    info,
    genres,
    bullet,
    minor__info,
    best,
  } = styles;

  console.log(movie);

  return (
    <section className={main__details}>
      <div className={`${main__container}`}>
        <div className={img__container}>
          <Image fill alt="" src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} />
        </div>
        <div className={grid}>
          <div className={left}>
            <div className={info}>
              <div>
                <p data-testid="movie-title">
                  <span className={bullet}></span>
                  {movie.title}
                </p>
                <p data-testid="movie-release-date">
                  <span className={bullet}></span>
                  {formatToUtcDate(movie.release_date)}
                </p>
                <p data-testid="movie-runtime">
                  <span className={bullet}></span>
                  {movie.runtime}
                </p>
              </div>
              <div className={genres}>
                {movie.genres.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}
              </div>
            </div>
            <div className={overview} data-testid="movie-overview">
              {movie.overview}
            </div>
            <div className={minor__info}>
              <p>
                Tagline: <span>{movie.tagline}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {movie.status === "Released" ? "Released" : "Not Released"}
                </span>
              </p>
            </div>
          </div>
          <div className={right}>
            <button>
              <FaWandMagic />
              See Showtimes
            </button>
            <button>
              <FaFilm />
              More Watch Options
            </button>
            <div className={best}>
              <div></div>
              <div></div>
              <div></div>
              <p>Best Movies in September</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
