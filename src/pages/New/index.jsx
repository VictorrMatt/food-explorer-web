import { Container } from "./styles";

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

      <BackButton tabIndex="0" onClick={() => handleBack()} />
    </Container>
  );
}
