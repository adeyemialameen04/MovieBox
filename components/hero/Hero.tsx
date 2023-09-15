import { IMAGE_BASE_URL, UPCOMING_URL, getHeroTrailer } from "@/utils/services";
import styles from "./hero.module.css";
import { FaImdb } from "react-icons/fa";
// import { GiTomato } from "react-icons/gi";
import Navbar from "../navbar/Navbar";
import { shortenText } from "@/utils/constants";
import Link from "next/link";
import { MovieCard } from "@/utils/interfaces";
import { FaRegCirclePlay, FaBook } from "react-icons/fa6";
import Image from "next/image";
import ImdbImg from "/public/imdb.png";

const getHeroMovie = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMBD_ACCESS_TOKEN_AUTH}`,
    },
    next: {
      revalidate: 0,
      cache: "no-store",
    },
  };
  const randomMovie = Math.floor(Math.random() * 15) + 1;
  try {
    const response = await fetch(UPCOMING_URL, options);
    const data = await response.json();
    const results = data.results;
    return results[randomMovie];
  } catch (error) {
    console.log(error);
  }
};

const Hero = async () => {
  const { hero__container, hero__section, rating } = styles;
  const heroData: MovieCard = await getHeroMovie();
  const heroTrailer = await getHeroTrailer(heroData.id);

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
            <div className={rating}>
              <div>
                <Image
                  src={ImdbImg}
                  alt="Imdb Logo"
                  height={24}
                  width={54}
                  loading="lazy"
                />
                <span>{heroData.vote_average}</span>
              </div>
            </div>
            <p>{shortenText(heroData?.overview, 230)}</p>
            <div>
              <a
                href={`https://www.youtube.com/watch?v=${heroTrailer.key}`}
                target="_blank"
              >
                <FaRegCirclePlay /> Watch Trailer
              </a>
              <Link href={`/movies/${heroData.id}`}>
                <FaBook /> View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
