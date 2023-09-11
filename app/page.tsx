import styles from "./page.module.css";
import Card from "@/components/card/Card";
import { GameCard, GamesList } from "@/utils/interfaces";
import { TRENDING_URL, options } from "@/utils/services";

const getTrending = async () => {
  const response = await fetch(TRENDING_URL, options);
  const data: GamesList = await response.json();
  const results = data.results;
  console.log(results);
  return results;
};

export default async function Home() {
  const trendingMovies = await getTrending();

  return (
    <main>
      {trendingMovies &&
        trendingMovies
          .slice(0, 10)
          .map((movie: GameCard) => <Card key={movie.id} card={movie} />)}
    </main>
  );
}
