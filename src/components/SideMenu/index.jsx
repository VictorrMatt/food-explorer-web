import { Container } from "./styles";

import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/auth";

export function SideMenu({ menuIsOpen }) {
  const { user, signOut } = useAuth();
  return (
    <Container style={{ display: menuIsOpen ? "block" : "none" }}>
      <nav>
        <Input placeholder="Busque por pratos ou ingredientes" />
        <ul>
          {user.role === "admin" && <li>Novo prato</li>}
          <li onClick={signOut}>Sair</li>
        </ul>
      </nav>
    </Container>
  );
}
