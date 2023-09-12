import { sidebar } from "@/utils/data";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Logo from "/public/Logo.png";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Sidebar = () => {
  const { aside, links, logo__container, titleText, icon } = styles;
  return (
    <aside className={`${aside} ${poppins.className}`}>
      <div className={logo__container}>
        <Image src={Logo} alt="" />
        <p className={titleText}>MovieBox</p>
      </div>
      <div className={links}>
        {sidebar.map((sidebar, index) => {
          const { icon: IconComponent, title, link } = sidebar;
          return (
            <Link href={link} key={index}>
              <IconComponent className={icon} />
              <span className={titleText}>{title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
