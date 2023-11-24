import { Container } from "./styles";
import image from "../../assets/dishes/Mask group-1.png";

import { useAuth } from "../../hooks/auth";

export function Dish({ ...props }) {
  const { user } = useAuth();

  return (
    <Container {...props}>
      <input type="button" />
      <img src={image} />
      <div>
        <h2>Salada Ravanello</h2>
        {user.role === "admin" && <span>&nbsp;&#8618;</span>}
      </div>
      <p>R$ 49,97</p>
    </Container>
  );
}
