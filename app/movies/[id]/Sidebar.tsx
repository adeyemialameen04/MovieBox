import { sidebar } from "@/utils/data";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Logo from "/public/Logo.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Sidebar = () => {
  const { aside, links, logo__container } = styles;
  return (
    <aside className={`${aside} ${poppins.className}`}>
      <div className={logo__container}>
        <Image src={Logo} alt="" height={60} width={60} objectFit="cover" />
        <p>MovieBox</p>
      </div>
      <div className={links}>
        {sidebar.map((sidebar, index) => (
          <article key={index}>
            <Image height={38} width={38} alt="" src={sidebar.img} />
            <span>{sidebar.title}</span>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
