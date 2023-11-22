import { Container } from "./styles";

import polygon from "../../assets/icons/Polygon.svg";

export function Footer() {
  return (
    <Container>
      <img src={polygon} alt="" />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
