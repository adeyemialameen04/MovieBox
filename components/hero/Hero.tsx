import { IMAGE_BASE_URL, TRENDING_URL, options } from "@/utils/services";
import styles from "./hero.module.css";
import { FaImdb } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import Image from "/public/background.png";
import Navbar from "../navbar/Navbar";

const getHeroMovie = async () => {
  const response = await fetch(TRENDING_URL, options);
  const data = await response.json();
  const results = data.results;
  return results[13];
};

const Hero = async () => {
  const heroData = await getHeroMovie();

  const { hero__container, hero__section } = styles;
  return (
    <>
      <section
        style={
          {
            // backgroundImage: `url(${IMAGE_BASE_URL}${heroData?.backdrop_path})`,
          }
        }
        className={hero__section}
      >
        <Navbar />
        <div className={`${hero__container}`}>
          <h1>{heroData?.original_title}</h1>
          <div className="rating"></div>
          <p>{heroData?.overview}</p>
          <button>Watch Trailer</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
