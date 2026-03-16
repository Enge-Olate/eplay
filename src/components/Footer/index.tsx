import { HashLink } from "react-router-hash-link";
import { Container } from "../../globalStyle";
import { actualYear, quickAccess } from "../../utils";
import { FooterStyle, DivSection, StackDivs } from "./style";
export default function Footer() {
  const categorias: FooterLink[] = [
    { label: "RPG", path: "/#rpg" },
    { label: "Ação", path: "/#acao" },
    { label: "Luta", path: "/#luta" },
    { label: "Esportes", path: "/#esportes" },
    { label: "Simulação", path: "/#simulacao" },
  ];
  return (
    <FooterStyle>
      <Container>
        <StackDivs>
          <DivSection variant="large">
            <h4>Categorias</h4>
            <ul>
              {categorias.map((categoria) => (
                <li key={categoria.path}>
                  <HashLink
                    title={`Clique aqui para ver jogos de ${categoria.label}`}
                    smooth
                    to={`/categories/${categoria.path}`}
                  >
                    {categoria.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </DivSection>
          <DivSection variant="small">
            <h4>Acesso rápido</h4>
            <ul>
              {Object.values(quickAccess).map((access) => (
                <li key={access.path}>
                  {access.path === "/#promocoes" ? (
                    <HashLink
                      title={`Clique aqui para aproveitar nossas ${access.label}`}
                      to={`/${access.path}`}
                    >
                      {access.label}
                    </HashLink>
                  ) : (
                    <HashLink
                      title={`Clique aqui para ver o que está chegando ${access.label}`}
                      to={`/${access.path}`}
                    >
                      {access.label}
                    </HashLink>
                  )}
                </li>
              ))}
            </ul>
          </DivSection>
        </StackDivs>
        <p>
          {actualYear.getFullYear()} - © E-PLAY Todos os direitos reservados
        </p>
      </Container>
    </FooterStyle>
  );
}
