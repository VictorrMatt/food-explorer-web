import {
  Container,
  Hamburger as Hamburger,
  Polygon,
  Receipt,
  Close,
} from "./styles";
import { useAuth } from "../../hooks/auth";

import addKeyPressListener from "../../utils/addKeyPressListener";

export function Header({ sidestate, setsidestate }) {
  const { user } = useAuth();

  addKeyPressListener(setsidestate);

  return (
    <Container sidestate={sidestate}>
      {sidestate === "true" ? (
        <nav>
          <Close
            id="close"
            tabIndex="0"
            onClick={() => {
              setsidestate("false");
            }}
          />
          <h2>Menu</h2>
        </nav>
      ) : (
        <>
          <Hamburger
            id="hamburger"
            tabIndex="0"
            onClick={() => setsidestate("true")}
          />

          <nav>
            <Polygon />
            <h2>Food Explorer</h2>
            {user.role === "admin" && <span>admin</span>}
          </nav>

          {user.role === "customer" && <Receipt />}
        </>
      )}
    </Container>
  );
}
