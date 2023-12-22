import { Container, MinusIcon, QuantitySpan, PlusIcon } from "./styles";

export function QuantityControl({ ...props }) {
  return (
    <Container {...props}>
      <MinusIcon />
      <QuantitySpan>01</QuantitySpan>
      <PlusIcon />
    </Container>
  );
}
