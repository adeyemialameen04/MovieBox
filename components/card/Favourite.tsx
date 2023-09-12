"use client";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FavouriteProps = {
  favouriteBtn: string;
  favouriteIcon: string;
  active: string;
};

const Favourite = ({ favouriteBtn, favouriteIcon, active }: FavouriteProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavouriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);

    toast.success(
      isFavorited ? "Removed from favorites" : "Added to favorites",
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  return (
    <>
      <button
        className={`${favouriteBtn} ${isFavorited ? active : ""}`}
        onClick={handleFavouriteClick}
      >
        <AiOutlineHeart className={`${favouriteIcon} `} />
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default Favourite;
