import Image from "next/image";
import styles from "./movieDetail.module.css";
import { CastCard, MovieDetail } from "@/utils/interfaces";
import { formatToUtcDate } from "@/utils/constants";
import { FaWandMagic, FaFilm } from "react-icons/fa6";
import {
  CAST_URL,
  IMAGE_BASE_URL,
  TRAILER_URL,
  options,
} from "@/utils/services";
import { RiPlayCircleLine } from "react-icons/ri";

type MovieDetailProps = {
  movie: MovieDetail;
};

const getCastsData = async (id: number) => {
  try {
    const response = await fetch(CAST_URL(id), options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const MovieDetail = async ({ movie }: MovieDetailProps) => {
  const castsInfo = await getCastsData(movie.id);
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
    casts,
    watch__trailer,
    watch__icon,
  } = styles;

  function findDirector() {
    const director = castsInfo.crew.filter(
      (crewMember: CastCard) => crewMember.department === "Directing"
    );
    if (director) {
      return director;
    } else {
      return "Director not found"; // You can handle this case accordingly
    }
  }
  function findWriters() {
    const director = castsInfo.crew.filter(
      (crewMember: CastCard) => crewMember.department === "Writing"
    );
    if (director) {
      return director;
    } else {
      return "Director not found"; // You can handle this case accordingly
    }
  }

  return (
    <section className={main__details}>
      <div className={`${main__container}`}>
        <div
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
          }}
          className={img__container}
        >
          <div className={watch__trailer}>
            <RiPlayCircleLine className={watch__icon} />
            Watch Trailer
          </div>
          {/* <Image fill alt="" src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} /> */}
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
            <div className={casts}>
              <p>
                Stars:{" "}
                <span>
                  {castsInfo &&
                    castsInfo.cast
                      .slice(0, 3)
                      .map((star: CastCard) => star.name)
                      .join(", ")}
                </span>
              </p>
              <p>
                Director(s):{" "}
                {findDirector().map((director: any, index: number) => (
                  <span key={index}>{director.name}, </span>
                ))}
              </p>
              <p>
                Writer(s):{" "}
                {findWriters().map((writer: any, index: number) => (
                  <span key={index}>{writer.name}, </span>
                ))}
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
