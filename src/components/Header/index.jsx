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
    <Container>
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

          <div className="logo">
            <nav>
              <Polygon />
              <h2>Food Explorer</h2>
              {user.role === "admin" && <span>admin</span>}
            </nav>
          </div>

          {user.role === "customer" && <Receipt />}
        </>
      )}
    </Container>
  );
}
