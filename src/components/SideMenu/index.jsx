import { Container } from "./styles";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import addKeyPressListener from "../../utils/addKeyPressListener";

export function SideMenu({ sideState, setSideState }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Função para manipular o clique do item da lista
  const handleItemClick = (action) => {
    if (action === "signOut") {
      signOut();
    } else if (action === "newDish") {
      console.log("Criar novo prato");
    }
  };

  addKeyPressListener(setSideState);

  return (
    <Container style={{ display: sideState ? "block" : "none" }}>
      <nav>
        <Input placeholder="Busque por pratos ou ingredientes" />
        <ul>
          {user.role === "admin" && (
            <li tabIndex="0" onClick={() => handleItemClick("newDish")}>
              Novo prato
            </li>
          )}
          <li tabIndex="0" onClick={() => handleItemClick("signOut")}>
            Sair
          </li>
        </ul>
      </nav>
    </Container>
  );
}
