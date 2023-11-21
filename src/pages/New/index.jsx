import { Container } from "./styles";
import { Content } from "../../pages/Home/styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { BackButton } from "../../components/BackButton";

import { useState } from "react";

export function New() {
  const [sidestate, setsidestate] = useState("false");

  return (
    <Container>
      <Header sidestate={sidestate} setsidestate={setsidestate} />
      <SideMenu sidestate={sidestate} setsidestate={setsidestate} />

      <Content>
        <BackButton tabindex="0" />
      </Content>
    </Container>
  );
}
