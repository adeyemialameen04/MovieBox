"use client";
import { createContext, useState } from "react";

export const SearchContext = createContext({
  isSearch: false,
  handleToggleSearch: () => {},
});

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [isSearch, setIsSearch] = useState(false);

  const handleToggleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  return (
    <SearchContext.Provider value={{ isSearch, handleToggleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
