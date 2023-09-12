import { IMAGE_BASE_URL, TRENDING_URL, options } from "@/utils/services";
import styles from "./hero.module.css";
import { FaImdb } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import Image from "/public/background.png";
import Navbar from "../navbar/Navbar";
import { ACCESS_TOKEN, shortenText } from "@/utils/constants";

const getHeroMovie = async () => {
  const passing = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization: `Bearer ${ACCESS_TOKEN && ACCESS_TOKEN}`
      Authorization: `Bearer ${
        ACCESS_TOKEN ??
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA3Nzc1MWRmYmQxYmFjZDcwMDAzZmYyNzUxODg2YyIsInN1YiI6IjYzZGQzYjExY2U1ZDgyMDA4NDhjNzc5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5Z2ljr4fG3Nmoc1R2U0MgiEvz-E49MPNsmwbHZIv8A"
      }`,
    },
    next: {
      revalidate: 0,
      cache: "no-store",
    },
  };
  const randomMovie = Math.floor(Math.random() * 10) + 1;
  console.log(randomMovie);
  const response = await fetch(TRENDING_URL, passing);
  const data = await response.json();
  const results = data.results;
  return results[randomMovie];
};

const Hero = async () => {
  const heroData = await getHeroMovie();

  const { hero__container, hero__section } = styles;
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
            <h1>{heroData?.original_title}</h1>
            <div className="rating"></div>
            <p>{shortenText(heroData?.overview, 300)}</p>
            <button>Watch Trailer</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
