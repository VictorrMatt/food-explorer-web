import { Container, FooterContainer, FooterLogoImage, FooterLogoSpan, ContentLicense } from "./styles";

import polygon from "../../assets/icons/Polygon_1.svg";

export function Footer({...props}) {
  return (
    <Container {...props}>
      <FooterContainer>
        <FooterLogoImage src={polygon} alt="" />
        <FooterLogoSpan>food explorer</FooterLogoSpan>
      </FooterContainer>
      <ContentLicense>© 2023 - Todos os direitos reservados.</ContentLicense>
    </Container>
  );
}
