import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
import type { Game } from "../home";
export default function Categories() {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([]);
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([]);
  const [gamesSimulacao, setGamessimulacao] = useState<Game[]>([]);
  const [gamesLuta, setGamesLuta] = useState<Game[]>([]);
  const [gamesRpg, setGamesRpg] = useState<Game[]>([]);
  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/eplay/acao")
      .then((res) => res.json())
      .then((res) => setGamesAcao(res));
    fetch("https://api-ebac.vercel.app/api/eplay/esportes")
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res));
    fetch("https://api-ebac.vercel.app/api/eplay/simulacao")
      .then((res) => res.json())
      .then((res) => setGamessimulacao(res));
    fetch("https://api-ebac.vercel.app/api/eplay/luta")
      .then((res) => res.json())
      .then((res) => setGamesLuta(res));
    fetch("https://api-ebac.vercel.app/api/eplay/rpg")
      .then((res) => res.json())
      .then((res) => setGamesRpg(res));
  }, []);
  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesRpg} title="RPG" background="gray" />
      <ProductsList games={gamesSimulacao} title="Simulação" background="black" />
      <ProductsList games={gamesLuta} title="Luta" background="gray" />
      <ProductsList games={gamesEsportes} title="Esportes" background="black" />
      <Footer />
    </>
  );
}
