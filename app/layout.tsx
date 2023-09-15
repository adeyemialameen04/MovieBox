import { SearchContextProvider } from "@/context/SearchContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieBox",
  description:
    "MovieBox is a movie discovery app created by Al-ameen Adeyemi with Nextjs Typescript and Tmdb api it has a top rated functionality and a seamlessly good search functionality that improves user experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SearchContextProvider>
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </SearchContextProvider>
    </html>
  );
}
