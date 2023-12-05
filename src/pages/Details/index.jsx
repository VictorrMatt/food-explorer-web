import { Container } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";

import { BackButton } from "../../components/BackButton";
import { MainContent } from "../../components/MainContent";
import { Button } from "../../components/Button";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import massa from "../../assets/dishes/Mask group-1.png";

export function Details() {
  const [sideState, setSideState] = useState("false");

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.stopPropagation();
    navigate(-1);
  };

  return (
    <Container>
      <Header sidestate={sideState} setsidestate={setSideState} />
      <SideMenu sidestate={sideState} setsidestate={setSideState} />
      <MainContent>
        <BackButton model="app_2" tabIndex="0" onClick={handleBack} />
        <img src={massa} alt="" />
        <Button type="button" value="Editar prato" />
      </MainContent>
    </Container>
  );
}
