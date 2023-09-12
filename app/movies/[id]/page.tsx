import { GET_MOVIE_DETAILS, options } from "@/utils/services";
import MovieDetail from "./MovieDetail";
import Sidebar from "./Sidebar";
import styles from "./page.module.css";

type MovieDetailsPageProps = {
  params: {
    id: number;
  };
};

const getMovieDetailsWithMovieId = async (id: number) => {
  const response = await fetch(GET_MOVIE_DETAILS(id), options);
  const data = await response.json();
  console.log(data);
  return data;
};

const getMovieDetailsWithImdbId = async (id: string) => {};

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const { main } = styles;
  const movie = await getMovieDetailsWithMovieId(params.id);

  return (
    <main className={main}>
      <Sidebar />
      <MovieDetail movie={movie} />
    </main>
  );
};

export default MovieDetailsPage;
