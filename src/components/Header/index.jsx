import { Container, Hamburguer, Polygon, Receipt, Close } from "./styles";

import { useAuth } from "../../hooks/auth";

export function Header({ openMenu = false }) {
  const { user } = useAuth();

  return (
    <Container>
      {openMenu ? (
        <aside>
          <Close />
          <h2>Menu</h2>
        </aside>
      ) : (
        <>
          <Hamburguer onClick={console.log("c")} />

          <div>
            <Polygon />
            <h2>Food Explorer</h2>
            {user.role === "admin" && <span>admin</span>}
          </div>

          {user.role === "customer" && <Receipt />}
        </>
      )}
    </Container>
  );
}
