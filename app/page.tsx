import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import MovieLists from "@/components/movieLists/MovieLists";
import Loading from "./loading";

export default async function Home() {
  return (
    <main>
      <Hero />
      <MovieLists />
    </main>
  );
}
