import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
import { useGetPromoQuery } from "../../services/api";
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
  const {data: games} = useGetPromoQuery();

  return (
    <>
      <Banner/>
      <ProductsList games={games} title="Promoções" background="gray" />
      <ProductsList games={games} title="Em breve" background="black" />
      <Footer />
    </>
  );
}
