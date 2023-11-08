import { Container } from "./styles";

export function Input({ label, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <input type="text" {...rest}/>
    </Container>
  );
}
