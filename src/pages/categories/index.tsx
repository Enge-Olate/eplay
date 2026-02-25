import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
import { useGetActionGamesQuery, useGetEsportsGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulacaoGamesQuery } from "../../services/api";
export default function Categories() {
  const {data: gamesAction} = useGetActionGamesQuery();
  const {data: gamesSimulation} = useGetSimulacaoGamesQuery();
  const {data: gamesEsports} = useGetEsportsGamesQuery();
  const {data: gamesRpg} = useGetRpgGamesQuery();
  const {data: gamesFight} = useGetFightGamesQuery();
  
  
  return (
    <>
      <ProductsList games={gamesAction} title="Ação" background="black" />
      <ProductsList games={gamesRpg} title="RPG" background="gray" />
      <ProductsList games={gamesSimulation} title="Simulação" background="black" />
      <ProductsList games={gamesFight} title="Luta" background="gray" />
      <ProductsList games={gamesEsports} title="Esportes" background="black" />
      <Footer />
    </>
  );
}
