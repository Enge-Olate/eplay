import Footer from "../../components/Footer";
import Loader from "../../components/Loaders";
import ProductsList from "../../components/ProductList";
import {
  useGetActionGamesQuery,
  useGetEsportsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulacaoGamesQuery,
} from "../../services/api";
export default function Categories() {
  const { data: gamesAction, isLoading: isLoadingAction } =
    useGetActionGamesQuery();
  const { data: gamesSimulation, isLoading: isLoadingSimulation } =
    useGetSimulacaoGamesQuery();
  const { data: gamesEsports, isLoading: isLoadingEsports } =
    useGetEsportsGamesQuery();
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery();
  const { data: gamesFight, isLoading: isLoadingFigth } =
    useGetFightGamesQuery();
    if(isLoadingAction || isLoadingEsports || isLoadingFigth|| isLoadingSimulation|| isLoadingRpg){
      return(
        <Loader/>
      );
    }

  return (
    <>
      <ProductsList
        id="acao"
        games={gamesAction}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList id="rpg" games={gamesRpg} title="RPG" background="gray"isLoading={isLoadingRpg} />
      <ProductsList
        id="simulacao"
        games={gamesSimulation}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="luta"
        games={gamesFight}
        title="Luta"
        background="gray"
        isLoading={isLoadingFigth}
      />
      <ProductsList
        id="esportes"
        games={gamesEsports}
        title="Esportes"
        background="black"
        isLoading={isLoadingEsports}
      />
      <Footer />
    </>
  );
}
