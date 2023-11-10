import { Container, Hamburguer, Polygon, Receipt, Close } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Header({ sideState, setSideState }) {
  const { user } = useAuth();

  return (
    <Container>
      {sideState ? (
        <aside>
          <Close onClick={() => setSideState(false)} />
          <h2>Menu</h2>
        </aside>
      ) : (
        <>
          <Hamburguer onClick={() => setSideState(true)} />

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
