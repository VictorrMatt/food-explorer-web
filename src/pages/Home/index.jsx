import { Container } from "./styles";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function Home() {
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <h1>
        {user && user.name}
        <span>{user && user.role}</span>
      </h1>
      <a onClick={handleSignOut}>Sair</a>
    </Container>
  );
}
