import { Container } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";

import { useAuth } from "../../hooks/auth";

export function Home() {
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Header openMenu />
    </Container>
  );
}
