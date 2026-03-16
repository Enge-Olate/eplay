import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
import { useGetPromoQuery, useGetSoonQuery } from "../../services/api";
export interface GalleryItem {
  type: "image" | "video";
  url: string;
}

export default function Home() {
  const { data: gamesPromo, isLoading:isLoadingPromo} = useGetPromoQuery();
  const { data: gamesSoon, isLoading:isLoadingSoon} = useGetSoonQuery();

  return (
    <>
      <Banner />
      <ProductsList
        id="promocoes"
        games={gamesPromo}
        title="Promoções"
        background="gray"
        isLoading={isLoadingPromo}
      />
      <ProductsList
        id="em-breve"
        games={gamesSoon}
        title="Em breve"
        background="black"
        isLoading={isLoadingSoon}
      />
      <Footer />
    </>
  );
}
