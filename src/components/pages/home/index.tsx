import { useEffect, useState } from "react";
import Banner from "../../Banner";
import Footer from "../../Footer";
import ProductsList from "../../ProductList";
export interface GalleryItem {
  type: "image" | "video";
  url: string;
}
export type Game = {
  id: number;
  name: string;
  description: string;
  release_date?: string;
  prices: {
    discount: number;
    old: number;
    current: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: GalleryItem[];
  };
};
export default function Home() {
  const [promocoes, setPromocoes] = useState<Game[]>([]);
  const [embreve, setEmBreve] = useState<Game[]>([]);
  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/eplay/promocoes")
      .then((res) => res.json())
      .then((res) => setPromocoes(res));

    fetch("https://api-ebac.vercel.app/api/eplay/em-breve")
      .then((res) => res.json())
      .then((res) => setEmBreve(res));
  }, []);
  return (
    <>
      <Banner/>
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={embreve} title="Em breve" background="black" />
      <Footer />
    </>
  );
}
