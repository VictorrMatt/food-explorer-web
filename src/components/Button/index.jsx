import { Container } from "./styles";

export function Button({ ...props }) {
  return <Container>{props.title}</Container>;
}
