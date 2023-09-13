import {
  IMAGE_BASE_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
  getHeroTrailer,
  options,
} from "@/utils/services";
import styles from "./hero.module.css";
import { FaImdb } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import Navbar from "../navbar/Navbar";
import { shortenText } from "@/utils/constants";
import Link from "next/link";
import { MovieCard } from "@/utils/interfaces";

const getHeroMovie = async () => {
  const passing = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${
        process.env.TMBD_ACCESS_TOKEN_AUTH ??
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA3Nzc1MWRmYmQxYmFjZDcwMDAzZmYyNzUxODg2YyIsInN1YiI6IjYzZGQzYjExY2U1ZDgyMDA4NDhjNzc5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5Z2ljr4fG3Nmoc1R2U0MgiEvz-E49MPNsmwbHZIv8A"
      }`,
    },
    next: {
      revalidate: 0,
      cache: "no-store",
    },
  };
  const randomMovie = Math.floor(Math.random() * 15) + 1;
  const response = await fetch(UPCOMING_URL, passing);
  const data = await response.json();
  const results = data.results;
  return results[randomMovie];
};

const Hero = async () => {
  const { hero__container, hero__section } = styles;
  const heroData: MovieCard = await getHeroMovie();
  const heroTrailer = await getHeroTrailer(heroData.id);

  console.log(heroTrailer);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${heroData?.backdrop_path})`,
        }}
        className={hero__section}
      >
        <Navbar />
        <div className="container">
          <div className={`${hero__container}`}>
            <h1>{heroData?.title}</h1>
            <div className="rating"></div>
            <p>{shortenText(heroData?.overview, 300)}</p>
            <div>
              <a
                href={`https://www.youtube.com/watch?v=${heroTrailer.key}`}
                target="_blank"
              >
                Watch Trailer
              </a>
              <Link href={`/movies/${heroData.id}`}>View Details</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
