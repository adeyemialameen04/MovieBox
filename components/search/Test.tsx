"use client";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./searchPopup.module.css";
import Logo from "/public/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { SearchContext } from "@/context/SearchContext";
import { IMAGE_BASE_URL, SEARCH_URL, options } from "@/utils/services";
import { MoviesList } from "@/utils/interfaces";
import useSWR from "swr";
import Loader from "../loader/Loader";

const SearchPopup = () => {
  const [searchQuery, setSearchQuery] = useState("spider man");
  const { isSearch } = useContext(SearchContext);
  const {
    popup__container,
    top,
    input__container,
    popup,
    popup__overlay,
    logo__container,
    close,
    results,
  } = styles;

  const formatToYear = (dateText: string) => {
    const date = new Date(dateText);
    const year = date.getFullYear();
    return year;
  };

  const searchMovies = async () => {
    try {
      if (!searchQuery) {
        return [];
      }
      const response = await fetch(SEARCH_URL(searchQuery), options);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: MoviesList = await response.json();
      const results = data.results;
      return results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const searchKey = `/api/search?query=${searchQuery}`;
  const { data, error } = useSWR(searchKey, searchMovies);

  useEffect(() => {
    searchMovies();
  }, [searchQuery]);

  return (
    <section className={`${popup__overlay} ${isSearch ? popup : ""}`}>
      <div>
        {isSearch && (
          <div className={`container ${popup__container}`}>
            <div className={top}>
              <div className={logo__container}>
                <Image alt="" src={Logo} height={50} width={50} />
                <p>MovieBox</p>
              </div>
              <button className={close}>
                <FaTimes />
              </button>
            </div>
            <div className={input__container}>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for movies..."
              />
            </div>
            <div className={results}>
              {error ? (
                <p>Error fetching data</p>
              ) : !data ? (
                <Loader /> // Display a loading indicator while fetching data
              ) : data.length === 0 ? (
                <p>No results found</p>
              ) : (
                <ul>
                  {data.map((movie) => (
                    <li key={movie.id}>
                      <Image
                        alt={movie.title}
                        src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
                        width={50}
                        height={75}
                      />
                      <p>{movie.title}</p>
                      <p>{formatToYear(movie.release_date)}</p>
                    </li>
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
