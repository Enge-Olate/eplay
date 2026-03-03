import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
import { useGetPromoQuery, useGetSoonQuery } from "../../services/api";

export default function Home() {
  const {data: gamesPromo} = useGetPromoQuery();
  const {data: gamesSoon} = useGetSoonQuery();

  return (
    <>
      <Banner/>
      <ProductsList id="promocoes" games={gamesPromo} title="Promoções" background="gray" />
      <ProductsList id="em-breve" games={gamesSoon} title="Em breve" background="black" />
      <Footer />
    </>
  );
}
