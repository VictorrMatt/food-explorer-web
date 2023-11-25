import {
  Container,
  PolygonIcon,
  LogoWriting,
  NavClose,
  CloseIcon,
  NavCloseTitle,
  HamburgerIcon,
  LogoHeaderContainer,
  NavPolygon,
  AdminSpan,
  ReceiptIcon,
} from "./styles";
import { useAuth } from "../../hooks/auth";

import addKeyPressListener from "../../utils/addKeyPressListener";

export function Header({ sidestate, setsidestate }) {
  const { user } = useAuth();

  addKeyPressListener(setsidestate);

  return (
    <Container>
      {sidestate === "true" ? (
        <NavClose>
          <CloseIcon
            id="close"
            tabIndex="0"
            onClick={() => {
              setsidestate("false");
            }}
          />
          <NavCloseTitle>Menu</NavCloseTitle>
        </NavClose>
      ) : (
        <>
          <HamburgerIcon
            id="hamburger"
            tabIndex="0"
            onClick={() => setsidestate("true")}
          />

          <LogoHeaderContainer>
            <NavPolygon>
              <PolygonIcon />
              <LogoWriting>Food Explorer</LogoWriting>
              {user.role === "admin" && <AdminSpan>admin</AdminSpan>}
            </NavPolygon>
          </LogoHeaderContainer>

          {user.role === "customer" && <ReceiptIcon />}
        </>
      )}
    </Container>
  );
}
