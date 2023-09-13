import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import MovieLists from "@/components/movieLists/MovieLists";
import SearchPopup from "@/components/search/SearchPopup";

export default async function Home() {
  const { home__main } = styles;
  return (
    <main className={home__main}>
      <Hero />
      <SearchPopup />
      <MovieLists />
    </main>
  );
}
