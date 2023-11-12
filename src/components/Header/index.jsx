import { Container, Hamburguer, Polygon, Receipt, Close } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Header({ sideState, setSideState }) {
  const { user } = useAuth();

  return (
    <Container>
      {sideState ? (
        <nav>
          <Close tabindex="0" onClick={() => setSideState(false)} />
          <h2>Menu</h2>
        </nav>
      ) : (
        <>
          <Hamburguer tabindex="0" onClick={() => setSideState(true)} />

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
