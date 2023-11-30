import { Container, InputLabel, InputText } from "./styles";

export function Input({ ...props }) {
  return (
    <Container>
      {props.label && <InputLabel htmlFor={props.id}>{props.label}</InputLabel>}
      <InputText id={props.id} {...props} />
    </Container>
  );
}
