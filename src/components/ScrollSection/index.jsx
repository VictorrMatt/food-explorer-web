import { Container } from "./styles";

export function ScrollSection({ ...props }) {
  return <Container>{...props.children}</Container>;
}
