import { Container } from "./styles";

export function Section({ ...props }, { ...rest }) {
  return (
    <Container {...rest}>
      {props.title && (
        <div>
          <h2>{props.title}</h2>
          <span> &#8628;</span>
        </div>
      )}
      <div>{props.children}</div>
    </Container>
  );
}
