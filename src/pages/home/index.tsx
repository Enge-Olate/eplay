<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
import { useGetPromoQuery, useGetSoonQuery } from "../../services/api";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
<<<<<<< HEAD
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
<<<<<<< HEAD
import { useGetPromoQuery } from "../../services/api";
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
=======
import { useGetPromoQuery, useGetSoonQuery } from "../../services/api";
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductList";
<<<<<<< HEAD
import { useGetPromoQuery } from "../../services/api";
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
=======
import { useGetPromoQuery, useGetSoonQuery } from "../../services/api";
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
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
<<<<<<< HEAD
=======

>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
=======

>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
export default function Home() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
  const {data: gamesPromo} = useGetPromoQuery();
  const {data: gamesSoon} = useGetSoonQuery();

  return (
    <>
      <Banner/>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <ProductsList games={gamesPromo} title="Promoções" background="gray" />
      <ProductsList games={gamesSoon} title="Em breve" background="black" />
<<<<<<< HEAD
=======
=======
export default function Home() {
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
  const [promocoes, setPromocoes] = useState<Game[]>([]);
  const [embreve, setEmBreve] = useState<Game[]>([]);
  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/eplay/promocoes")
      .then((res) => res.json())
      .then((res) => setPromocoes(res));
<<<<<<< HEAD
=======
  const {data: games} = useGetPromoQuery();
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)

  return (
    <>
      <Banner/>
<<<<<<< HEAD
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={embreve} title="Em breve" background="black" />
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
      <ProductsList games={games} title="Promoções" background="gray" />
      <ProductsList games={games} title="Em breve" background="black" />
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
      <ProductsList id="promocoes" games={gamesPromo} title="Promoções" background="gray" />
      <ProductsList id="em-breve" games={gamesSoon} title="Em breve" background="black" />
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
=======
=======
  const {data: games} = useGetPromoQuery();
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)

  return (
    <>
      <Banner/>
<<<<<<< HEAD
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={embreve} title="Em breve" background="black" />
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
      <ProductsList games={games} title="Promoções" background="gray" />
      <ProductsList games={games} title="Em breve" background="black" />
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
=======
      <ProductsList games={gamesPromo} title="Promoções" background="gray" />
      <ProductsList games={gamesSoon} title="Em breve" background="black" />
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
      <ProductsList id="promocoes" games={gamesPromo} title="Promoções" background="gray" />
      <ProductsList id="em-breve" games={gamesSoon} title="Em breve" background="black" />
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
      <Footer />
    </>
  );
}
