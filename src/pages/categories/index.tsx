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
      <ProductsList id="acao" games={gamesAction} title="Ação" background="black" />
      <ProductsList id="rpg" games={gamesRpg} title="RPG" background="gray" />
      <ProductsList id="simulacao" games={gamesSimulation} title="Simulação" background="black" />
      <ProductsList id="luta" games={gamesFight} title="Luta" background="gray" />
      <ProductsList id="esportes" games={gamesEsports} title="Esportes" background="black" />
      <Footer />
    </>
  );
}
