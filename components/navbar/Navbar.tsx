import Image from "next/image";
import styles from "./navbar.module.css";
import Logo from "/public/Logo.png";
import { LiaBarsSolid } from "react-icons/lia";

const Navbar = () => {
  const {
    logo__container,
    logo,
    input__container,
    nav__container,
    right,
    input,
    nav,
  } = styles;

  return (
    <nav className={nav}>
      <div className={`container ${nav__container}`}>
        <div className={logo__container}>
          <div className={logo}>
            <Image alt="" fill src={Logo} />
          </div>
          <span>MovieBox</span>
        </div>
        <div className={input__container}>
          <input
            type="search"
            placeholder="What do you want to watch?"
            className={input}
          />
        </div>
        <div className={right}>
          <p>Sign in</p>
          <button>
            <LiaBarsSolid />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
