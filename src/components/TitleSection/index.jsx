import {
  Container,
  SectionTitleContainer,
  Title,
  SymbolSpan,
  SectionChildren,
} from "./styles";

export function TitleSection({ ...props }, { ...rest }) {
  return (
    <Container {...rest}>
      {props.title && (
        <SectionTitleContainer>
          <Title>{props.title}</Title>
          <SymbolSpan> &#8628;</SymbolSpan>
        </SectionTitleContainer>
      )}
      <SectionChildren>{props.children}</SectionChildren>
    </Container>
  );
}
