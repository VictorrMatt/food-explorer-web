import { Container } from "./styles";

export function MainContent({ ...props }) {
  return <Container {...props}>{...props.children}</Container>;
}
