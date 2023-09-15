import { GET_MOVIE_DETAILS, options } from "@/utils/services";
import MovieDetail from "./MovieDetail";
import Sidebar from "./Sidebar";
import styles from "./page.module.css";
import type { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";
import Loading from "@/app/loading";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type MovieDetailsPageProps = {
  params: {
    id: number;
  };
};

// Generate MetaData
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const response = await fetch(GET_MOVIE_DETAILS(Number(id)), options);
  const movie = await response.json();

  return {
    title: `${movie?.title} - MovieBox` || "Default Title",
    openGraph: {
      type: "website",
      title: `${movie?.title} - MovieBox` || "Default Title",
      description: movie.overview,
    },
  };
}

const getMovieDetailsWithMovieId = async (id: number) => {
  const response = await fetch(GET_MOVIE_DETAILS(id), options);
  const data = await response.json();
  return data;
};

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const { main } = styles;
  const movieId = Number(params.id);
  const movie = await getMovieDetailsWithMovieId(movieId);

  try {
    return (
      <main className={main}>
        <Sidebar />
        <Suspense fallback={<Loading />}>
          <MovieDetail movie={movie} />
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return <div>Error fetching movie details.</div>;
  }
};

export default MovieDetailsPage;
