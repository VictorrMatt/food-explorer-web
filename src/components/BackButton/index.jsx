import { Container, CaretLeft, GoBackSpan } from "./styles";

export function BackButton({ ...props }) {
  return (
    <Container {...props}>
      <CaretLeft {...props} tabIndex="-1" />
      <GoBackSpan {...props} tabIndex="-1">
        Voltar
      </GoBackSpan>
    </Container>
  );
}
