import Image from "next/image";
import styles from "./navbar.module.css";
import Logo from "/public/Logo.png";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "./Search";

const Navbar = () => {
  const {
    logo__container,
    logo,
    input__container,
    nav__container,
    right,
    input,
    left,
    nav,
    left__sign__in,
    search__icon,
  } = styles;
  return (
    <nav className={nav}>
      <div className={`container ${nav__container}`}>
        <div className={left}>
          <div className={logo__container}>
            <div className={logo}>
              <Image alt="" fill src={Logo} />
            </div>
            <span>MovieBox</span>
          </div>
          <div className={left__sign__in}>Sign in</div>
        </div>
        <Search
          input__container={input__container}
          search__icon={search__icon}
          input={input}
        />
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
