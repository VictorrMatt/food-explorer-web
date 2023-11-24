import { Container, Banner, Gradient, Content } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";
import { Footer } from "../../components/Footer";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

import background from "../../assets/images/detail.png";

export function Home() {
  const { user } = useAuth();

  const [sideState, setSideState] = useState("false");

  return (
    <Container>
      <Header sidestate={sideState} setsidestate={setSideState} />
      <SideMenu sidestate={sideState} setsidestate={setSideState} />

      <Banner>
        <Gradient />

        <img src={background} alt="Imagem de ingredientes" />

        <div className="banner">
          <div className="title">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
      </Banner>
      <Content>
        <Section title="Refeições">
          <Dish tabIndex="0" onClick={() => console.log("item clicado")} />
          <Dish tabIndex="0" />
          <Dish tabIndex="0" />
        </Section>

        <Section title="Pratos principais">
          <Dish tabIndex="0" />
          <Dish tabIndex="0" />
          <Dish tabIndex="0" />
        </Section>

        <Section title="Bebidas">
          <Dish tabIndex="0" />
          <Dish tabIndex="0" />
          <Dish tabIndex="0" />
        </Section>

        <Footer />
      </Content>
    </Container>
  );
}
