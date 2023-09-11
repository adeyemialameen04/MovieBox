import Image from "next/image";
import styles from "./movieDetail.module.css";
import Test from "/public/Rectangle 29.png";

const MovieDetail = () => {
  const {
    main__details,
    main__container,
    img__container,
    minor__info,
    rating,
    genres,
    info,
    overview,
  } = styles;

  return (
    <section className={main__details}>
      <div className={`${main__container}`}>
        <div className={img__container}>
          <Image fill alt="" src={Test} />
        </div>
        <div className={info}>
          <div>
            <div className={minor__info}>
              <p>Top Gun: Maverick</p>
              <p>2023</p>
              <p>PG-13</p>
              <p>2h 10m</p>
            </div>
            <div className={genres}>
              <span>Action</span>
              <span>Drama</span>
            </div>
          </div>
          <div className={rating}></div>
        </div>
        <div className={overview}>
          Finding himself in a new era, and approaching retirement, Indy
          wrestles with fitting into a world that seems to have outgrown him.
          But as the tentacles of an all-too-familiar evil return in the form of
          an old rival, Indy must don his hat and pick up his whip once more to
          make sure an ancient and powerful artifact doesn't fall into the wrong
          hands.
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
