import { Container, CaretLeft } from "./styles";

export function BackButton({ ...props }) {
  return (
    <Container {...props}>
      <CaretLeft />
      <span>Voltar</span>
    </Container>
  );
}
