import { Container } from "./styles";

export function Input({ ...props }) {
  return (
    <Container>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </Container>
  );
}
