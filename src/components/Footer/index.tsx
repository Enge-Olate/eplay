import { HashLink } from "react-router-hash-link";
import { Container } from "../../globalStyle";
import type { FooterLink } from "../../types";
import { actualYear } from "../../utils";
import { FooterStyle, DivSection, StackDivs } from "./style";
export default function Footer() {
  const categorias: FooterLink[] = [
    { label: "RPG", path: "/#rpg" },
    { label: "Ação", path: "/#acao" },
    { label: "Luta", path: "/#luta" },
    { label: "Esportes", path: "/#esportes" },
    { label: "Simulação", path: "/#simulacao" },
  ];
  const quickAccess = {
    news: { label: "Promoções", path: "#promocoes" },
    sales: { label: "Em breve", path: "#em-breve" },
  } satisfies Record<string, FooterLink>;
  return (
    <FooterStyle>
      <Container>
        <StackDivs>
          <DivSection variant="large">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
            <h4>Categorias</h4>
            <ul>
              {categorias.map((categoria) => (
                <li key={categoria.path}>
                  <HashLink smooth to={`/categories/${categoria.path}`}>
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
                  <HashLink to={`/${access.path}`}>{access.label}</HashLink>
                </li>
              ))}
            </ul>
          </DivSection>
<<<<<<< HEAD
=======
          <h4>Categorias</h4>
          <ul>
            <li><a href="#RPF">RPG</a></li>
            <li><a href="#Ação">Ação</a></li>
            <li><a href="#Aventura">Aventura</a></li>
            <li><a href="#Esportes">Esportes</a></li>
            <li><a href="#Simulação">Simulação</a></li>
            <li><a href="#Estratégia">Estratégia</a></li>
            <li><a href="#FPS">FPS</a></li>
          </ul>
        </DivSection>
        <DivSection variant="small">
          <h4>Acesso rápido</h4>
          <ul>
            <li><a href="#Novidades">Novidades</a></li>
            <li><a href="#Promoções">Promoções</a></li>
            <li><a href="#Em breve">Em breve</a></li>
            
          </ul>
        </DivSection>
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
        </StackDivs>
        <p>
          {actualYear.getFullYear()} - © E-PLAY Todos os direitos reservados
        </p>
      </Container>
    </FooterStyle>
  );
}
