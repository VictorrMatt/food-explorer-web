import { Container } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Home() {
  const { signOut, user } = useAuth();

  const [sideState, setSideState] = useState(false);

  return (
    <Container>
      <Header sideState={sideState} setSideState={setSideState} />
      <SideMenu sideState={sideState} setSideState={setSideState} />
    </Container>
  );
}
