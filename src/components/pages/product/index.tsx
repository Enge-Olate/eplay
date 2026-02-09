import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../Hero";
import Footer from "../../Footer";
import { Container } from "../../../globalStyle";

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
  // if (!game) {
  //   return (
  //     <>
  //       <Container>
  //         <h3>Carregando...</h3>
  //       </Container>
  //       <Footer />
  //     </>
  //   );
  // }
  return (
    <>
      <Hero />
      <h1>ola</h1>
      <Footer />
    </>
  );
}
