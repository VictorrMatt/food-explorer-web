import { Container } from "./styles";
import image from "../../assets/dishes/Mask group-1.png";

export function Dish({ ...props }) {
  return (
    <Container>
      <img src={image} />
      <h2>Salada Ravanello</h2>
      <p>R$ 49,97</p>
    </Container>
  );
}
