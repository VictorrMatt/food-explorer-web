import { Container } from "./styles";
import { Content } from "../../pages/Home/styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { BackButton } from "../../components/BackButton";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import addKeyPressListener from "../../utils/addKeyPressListener";

export function New() {
  const [sidestate, setsidestate] = useState("false");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  addKeyPressListener(setsidestate);

  return (
    <Container>
      <Header sidestate={sidestate} setsidestate={setsidestate} />
      <SideMenu sidestate={sidestate} setsidestate={setsidestate} />

      <Content>
        <BackButton tabindex="0" onClick={() => handleBack()} />
      </Content>
    </Container>
  );
}
