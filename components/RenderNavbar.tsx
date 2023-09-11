"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
// import { useRouter } from "next/navigation";

const RenderNavbar = () => {
  const pathname = usePathname();
  //   const isHomePage = router.pathname === "/";

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return <>{pathname !== "/" && <Navbar />}</>;
};

export default RenderNavbar;
