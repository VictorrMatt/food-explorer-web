import { Container } from "./styles";

import polygon from "../../assets/icons/Polygon_1.svg";

export function Footer() {
  return (
    <Container>
      <div>
        <img src={polygon} alt="" />
        <span>food explorer</span>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
