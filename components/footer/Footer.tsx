import styles from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  const { footer__container, socials, terms, copyright, footer } = styles;
  const year = new Date().getFullYear();

  return (
    <footer className={footer}>
      <div className={`container ${footer__container}`}>
        <div className={socials}>
          <FaFacebookSquare />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillYoutube />
        </div>
        <div className={terms}>
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <div className={copyright}>
          &copy;{""}
          {year}
          {""} {""} {""}
          MovieBox by Al-ameen Adeyemi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
