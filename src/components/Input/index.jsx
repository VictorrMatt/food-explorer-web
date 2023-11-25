import { Container, InputLabel, InputText } from "./styles";

export function Input({ ...props }) {
  return (
    <Container>
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <InputText type="text" {...props} />
    </Container>
  );
}
