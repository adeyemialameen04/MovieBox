import Image from "next/image";
import styles from "./card.module.css";
import { MovieCard } from "@/utils/interfaces";
import { IMAGE_BASE_URL } from "@/utils/services";
import { formatDate } from "@/utils/constants";
import Link from "next/link";
import Favourite from "./Favourite";

type GameCardProps = {
  card: MovieCard;
};

const Card = ({ card }: GameCardProps) => {
  const { poster__container, cardItem, favouriteBtn, favouriteIcon, active } =
    styles;

  return (
    <article data-testid="movie-card" className={cardItem}>
      <div className={poster__container}>
        <Image
          data-testid="movie-poster"
          fill
          alt=""
          src={`${IMAGE_BASE_URL}/${card.poster_path}`}
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Favourite
        active={active}
        favouriteBtn={favouriteBtn}
        favouriteIcon={favouriteIcon}
      />
      <h3 data-testid="movie-title">{card.title ?? card.name}</h3>
      <small data-testid="movie-release-date">
        {formatDate(card.release_date)}
      </small>
      <Link href={`/movies/${card.id}`}>Continue</Link>
    </article>
  );
};

export default Card;
