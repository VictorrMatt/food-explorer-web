import { Container } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

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
      
    </Container>
  );
}
