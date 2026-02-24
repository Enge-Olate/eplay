import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { Container } from "../../globalStyle";
import Section from "../../components/Section";
import Gallery from "../../components/Gallery";
import { useGetGameIdQuery } from "../../services/api";
export function ProductGame() {
  const { id } = useParams();
  const {data: game} = useGetGameIdQuery(id!);
  
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
