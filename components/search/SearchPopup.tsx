"use client";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./searchPopup.module.css";
import Logo from "/public/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { SearchContext } from "@/context/SearchContext";
import { IMAGE_BASE_URL, SEARCH_URL, options } from "@/utils/services";
import { MovieCard, MoviesList } from "@/utils/interfaces";
import Loader from "../loader/Loader";
import Link from "next/link";

const SearchPopup = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSearch, handleToggleSearch } = useContext(SearchContext);
  const [dataResults, setDataResults] = useState<MovieCard[] | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    popup__container,
    top,
    input__container,
    popup,
    popup__overlay,
    logo__container,
    close,
    results,
    img__container,
    cont,
  } = styles;

  const searchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(SEARCH_URL(searchQuery), options);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: MoviesList = await response.json();
      const results = data.results;
      setDataResults(results);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const formatToYear = (dateText: string) => {
    const date = new Date(dateText);
    const year = date.getFullYear();
    return year;
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      searchMovies();
    }
  }, [searchQuery]);

  return (
    <section className={`${popup__overlay} ${isSearch ? popup : ""}`}>
      <div className={cont}>
        {isSearch && (
          <div className={`container ${popup__container}`}>
            <div className={top}>
              <div className={logo__container}>
                <Image alt="" src={Logo} height={50} width={50} />
                <p>MovieBox</p>
              </div>
              <button onClick={handleToggleSearch} className={close}>
                <FaTimes />
              </button>
            </div>
            <div className={input__container}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
              />
            </div>
            <div className={results}>
              {error ? (
                <p>Error fetching data</p>
              ) : loading ? (
                <Loader />
              ) : !dataResults || dataResults.length === 0 ? (
                <p>No results found</p>
              ) : (
                <ul>
                  {dataResults.map((movie: MovieCard) => (
                    <Link href={`/movies/${movie.id}`} key={movie.id}>
                      <div className={img__container}>
                        <Image
                          alt={movie.title}
                          src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
                          fill
                        />
                      </div>
                      <div>
                        <p>{movie.title}</p>
                        <small>{formatToYear(movie.release_date)}</small>
                      </div>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPopup;