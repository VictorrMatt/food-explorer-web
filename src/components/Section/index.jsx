import { Container } from "./styles";

export function Section({ ...props }) {
  return (
    <Container>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </Container>
  );
}
