import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Footer";
import { Container } from "../../../globalStyle";

export function Product() {
  const { id } = useParams();
  const [game, setGame] = useState();
  useEffect(() => {
    if(id){
      fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
      .catch((error) => console.log("Erro: ", error));
    }
  }, [id]);
  if (!game) {
    return <h3>Carregando...</h3>;
  }
  return (
    <>
      <Container>
        <p>{game}</p>
      </Container>
      <Footer />
    </>
  );
}
