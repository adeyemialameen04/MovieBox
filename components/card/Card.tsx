import Image from "next/image";
import styles from "./card.module.css";
import Test from "/public/testimage.jpg";
import { FaImdb } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
const Card = () => {
  const { poster__container, rating, card, icon, genres } = styles;
  return (
    <article className={card}>
      <div className={poster__container}>
        <Image fill alt="" src={Test} />
      </div>
      <small>USA, 2016 - CURRENT</small>
      <h2>Stranger Things</h2>
      <div className={rating}>
        <span>
          <FaImdb className={icon} />
          86 / 100
        </span>
        <span>
          <GiTomato className={icon} />
          97%
        </span>
      </div>
      <div className={genres}>
        <small>Action, Adventure, Horror</small>
      </div>
    </article>
  );
};

export default Card;
