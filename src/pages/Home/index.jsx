import { Container, Banner, Gradient } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

import background from "../../assets/images/detail.png";

export function Home() {
  const { user } = useAuth();

  const [sideState, setSideState] = useState("false");

  useEffect(() => {
    console.log("HOMER");
  }, []);
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
    </Container>
  );
}
