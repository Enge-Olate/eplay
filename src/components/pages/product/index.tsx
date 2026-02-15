import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../Hero";
import Footer from "../../Footer";
import { Container } from "../../../globalStyle";
import Section from "../../Section";
import Gallery from "../../Gallery";
import aranha from "../../../assets/banner-homem-aranha.png";
export function ProductGame() {
  const { id } = useParams();
  const [game, setGame] = useState();
  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
        .then((res) => res.json())
        .then((res) => setGame(res))
        .catch((error) => console.log("Erro: ", error));
    }
  }, [id]);
  if (!game && game) {
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
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser. Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Aqui vai outro conteúdo!</b>
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <Gallery defaultCover={aranha} name="zelda"/>
      </Section>
      <Footer />
    </>
  );
}
