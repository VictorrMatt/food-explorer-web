import {
  Container,
  BannerContainer,
  BannerGradient,
  BannerImage,
  ContentHolder,
  TextContainer,
  Title,
  Description,
  HomeContent,
} from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";
import { Footer } from "../../components/Footer";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

import background from "../../assets/images/detail.png";

import randomPlate from "../../assets/dishes/Mask group-10.png";

export function Home() {
  const { user } = useAuth();

  const [sideState, setSideState] = useState("false");

  return (
    <Container>
      <Header sidestate={sideState} setsidestate={setSideState} />
      <SideMenu sidestate={sideState} setsidestate={setSideState} />

      <BannerContainer>
        <BannerGradient />
        <BannerImage src={background} alt="Imagem de ingredientes" />

        <ContentHolder>
          <TextContainer>
            <Title>Sabores inigualáveis</Title>
            <Description>
              Sinta o cuidado do preparo com ingredientes selecionados
            </Description>
          </TextContainer>
        </ContentHolder>
      </BannerContainer>

      <HomeContent>
        <Section title="Refeições">
          <Dish
            tabIndex="0"
            imageUrl={randomPlate}
            title="Prato Massa"
            price="R$99.99"
            onClick={() => console.log("item clicado")}
          />
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
      </HomeContent>
    </Container>
  );
}
