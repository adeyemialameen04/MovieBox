import MovieDetail from "./MovieDetail";
import Sidebar from "./Sidebar";
import styles from "./page.module.css";

const MovieDetailsPage = () => {
  const { main } = styles;
  return (
    <main className={main}>
      <Sidebar />
      <MovieDetail />
    </main>
  );
};

export default MovieDetailsPage;
