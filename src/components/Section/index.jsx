import { Container } from "./styles";

export function Section({ ...props }, { ...rest }) {
  return (
    <Container {...rest}>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </Container>
  );
}
