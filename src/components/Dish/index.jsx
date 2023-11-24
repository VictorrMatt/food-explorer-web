import { Container } from "./styles";
import image from "../../assets/dishes/Mask group-1.png";

import { useAuth } from "../../hooks/auth";

export function Dish({ ...props }) {
  const { user } = useAuth();

  const handleEdit = (event) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
    console.log("EDIT");
  };

  return (
    <Container {...props}>
      {user.role === "admin" && <input type="button" onClick={handleEdit} />}
      <img src={image} />
      <div>
        <h2>Salada Ravanello</h2>
        <span>&nbsp;&#8618;</span>
      </div>
      <p>R$ 49,97</p>
    </Container>
  );
}
