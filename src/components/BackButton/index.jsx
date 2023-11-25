import { Container, CaretLeft, GoBackSpan } from "./styles";

export function BackButton({ ...props }) {
  return (
    <Container {...props}>
      <CaretLeft />
      <GoBackSpan>Voltar</GoBackSpan>
    </Container>
  );
}
