import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../Hero";
import Footer from "../../Footer";
import { Container } from "../../../globalStyle";
import Section from "../../Section";
import Gallery from "../../Gallery";
import type { Game } from "../home";
export function ProductGame() {
  const { id } = useParams();
  const [game, setGame] = useState<Game>();
  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res));
  }, [id]);
  console.log("tamanho da descrição: "+game?.description.length);
  if (!game) {
    return (
      <>
        <Container>
          <h3>Carregando...</h3>
        </Container>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Hero game={game}/>
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma: </b>
          {game.details.system}
          <br/>
          <b>Desenvolvedor: </b>
          {game.details.developer}
          <br/>
          <b>Idioma: </b>
          {game.details.languages.join(', ')}
          <br/>
          <b>Editora: </b>
          {game.details.publisher}
        </p>
      </Section>
      <Gallery items={game.media.gallery} name={game.name} defaultCover={game.media.cover} />
      <Footer />
    </>
  );
}
