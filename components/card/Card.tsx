import Image from "next/image";
import styles from "./card.module.css";
import Test from "/public/testimage.jpg";
import { FaImdb } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import { GameCard } from "@/utils/interfaces";
import { IMAGE_BASE_URL } from "@/utils/services";
import { formatDate } from "@/utils/constants";

type GameCardProps = {
  card: GameCard;
};

const Card = ({ card }: GameCardProps) => {
  const { poster__container, rating, cardItem, icon, genres } = styles;

  return (
    <article data-testid="movie-card" className={cardItem}>
      <div className={poster__container}>
        <Image
          data-testid="movie-poster"
          fill
          alt=""
          src={`${IMAGE_BASE_URL}/${card.poster_path}`}
        />
      </div>
      <h2 data-testid="movie-title">
        {card.original_title ?? card.original_name}
      </h2>
      <small data-testid="movie-release-date">
        {formatDate(card.release_date)}
      </small>
    </article>
  );
};

export default Card;
