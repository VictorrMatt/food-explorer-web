import {
  Container,
  Hamburger as Hamburger,
  Polygon,
  Receipt,
  Close,
} from "./styles";
import { useAuth } from "../../hooks/auth";

import addKeyPressListener from "../../utils/addKeyPressListener";

export function Header({ sideState, setSideState }) {
  const { user } = useAuth();

  addKeyPressListener(setSideState);

  return (
    <Container>
      {sideState ? (
        <nav>
          <Close
            id="close"
            tabIndex="0"
            onClick={() => {
              setSideState(false);
            }}
          />
          <h2>Menu</h2>
        </nav>
      ) : (
        <>
          <Hamburger
            id="hamburger"
            tabIndex="0"
            onClick={() => setSideState(true)}
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
