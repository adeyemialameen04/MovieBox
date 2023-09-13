"use client";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import { AiOutlineSearch } from "react-icons/ai";

type SearchProps = {
  input__container: string;
  input: string;
  search__icon: string;
};

const Search = ({ input__container, input, search__icon }: SearchProps) => {
  const { handleToggleSearch } = useContext(SearchContext);

  return (
    <div onClick={handleToggleSearch} className={input__container}>
      <input
        type="search"
        placeholder="What do you want to watch?"
        className={input}
      />
      <>
        <AiOutlineSearch className={search__icon} />
      </>
    </div>
  );
};

export default Search;
