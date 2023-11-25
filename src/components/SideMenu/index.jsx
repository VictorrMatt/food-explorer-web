import { Container, SideMenuNav, SideMenuItem } from "./styles";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import addKeyPressListener from "../../utils/addKeyPressListener";

export function SideMenu({ sidestate, setsidestate }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const pathname = window.location.pathname;
  const disableCreateDish = pathname === "/new";

  const handleNewDish = () => {
    if (pathname === "/new") {
      return;
    }

    navigate("/new");
  };

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  addKeyPressListener(setsidestate);

  return (
    <Container sidestate={sidestate}>
      <SideMenuNav>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          onChange={(event) => console.log(event.target.value)}
        />
        <ul>
          {user.role === "admin" && (
            <SideMenuItem
              tabIndex="0"
              disabled={disableCreateDish}
              onClick={() => handleNewDish()}
            >
              Novo prato
            </SideMenuItem>
          )}
          <SideMenuItem tabIndex="0" onClick={() => handleSignOut()}>
            Sair
          </SideMenuItem>
        </ul>
      </SideMenuNav>
    </Container>
  );
}
