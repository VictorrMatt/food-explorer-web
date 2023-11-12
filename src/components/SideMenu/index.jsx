import { Container } from "./styles";

import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export function SideMenu({ menuIsOpen }) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  return (
    <Container style={{ display: menuIsOpen ? "block" : "none" }}>
      <nav>
        <Input placeholder="Busque por pratos ou ingredientes" />
        <ul>
          {user.role === "admin" && (
            <li
              tabindex="0"
              onClick={() => {
                console.log("dafs");
              }}
            >
              Novo prato
            </li>
          )}
          <li tabindex="0" onClick={signOut}>
            Sair
          </li>
        </ul>
      </nav>
    </Container>
  );
}
