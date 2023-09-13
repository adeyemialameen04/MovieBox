import styles from "./loader.module.css";

const Loader = () => {
  const { custom__loader } = styles;

  return <div className={custom__loader}></div>;
};

export default Loader;
