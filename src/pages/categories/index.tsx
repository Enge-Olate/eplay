<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
      <ProductsList games={gamesAction} title="Ação" background="black" />
      <ProductsList games={gamesRpg} title="RPG" background="gray" />
      <ProductsList games={gamesSimulation} title="Simulação" background="black" />
      <ProductsList games={gamesFight} title="Luta" background="gray" />
      <ProductsList games={gamesEsports} title="Esportes" background="black" />
=======
import { useEffect, useState } from "react";
=======
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
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
<<<<<<< HEAD
      <ProductsList games={gamesAction} title="Ação" background="black" />
      <ProductsList games={gamesRpg} title="RPG" background="gray" />
<<<<<<< HEAD
      <ProductsList games={gamesSimulacao} title="Simulação" background="black" />
      <ProductsList games={gamesLuta} title="Luta" background="gray" />
      <ProductsList games={gamesEsportes} title="Esportes" background="black" />
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
      <ProductsList games={gamesSimulation} title="Simulação" background="black" />
      <ProductsList games={gamesFight} title="Luta" background="gray" />
      <ProductsList games={gamesEsports} title="Esportes" background="black" />
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
=======
=======
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
      <ProductsList id="acao" games={gamesAction} title="Ação" background="black" />
      <ProductsList id="rpg" games={gamesRpg} title="RPG" background="gray" />
      <ProductsList id="simulacao" games={gamesSimulation} title="Simulação" background="black" />
      <ProductsList id="luta" games={gamesFight} title="Luta" background="gray" />
      <ProductsList id="esportes" games={gamesEsports} title="Esportes" background="black" />
<<<<<<< HEAD
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
=======
import { useEffect, useState } from "react";
=======
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
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
<<<<<<< HEAD
      <ProductsList games={gamesSimulacao} title="Simulação" background="black" />
      <ProductsList games={gamesLuta} title="Luta" background="gray" />
      <ProductsList games={gamesEsportes} title="Esportes" background="black" />
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
      <ProductsList games={gamesSimulation} title="Simulação" background="black" />
      <ProductsList games={gamesFight} title="Luta" background="gray" />
      <ProductsList games={gamesEsports} title="Esportes" background="black" />
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
=======
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
      <Footer />
    </>
  );
}
