import { Container } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";

import { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { useNavigate } from "react-router-dom";

export function Details() {
  const [sideState, setSideState] = useState("false");

  const navigate = useNavigate();

  return (
    <Container>
      <Header sidestate={sideState} setsidestate={setSideState} />
      <SideMenu sidestate={sideState} setsidestate={setSideState} />
      <BackButton
        tabindex="0"
        onClick={() => {
          navigate(-1);
        }}
      />
      View
    </Container>
  );
}
