import {
  Container,
  DishEditButton,
  DishImage,
  DishTitleHolder,
  Title,
  SymbolSpan,
  DishPrice,
} from "./styles";
import image from "../../assets/dishes/Mask group-1.png";

import { useAuth } from "../../hooks/auth";

export function Dish({ ...props }) {
  const { user } = useAuth();

  const handleEdit = (event) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
    console.log(event.target);
  };

  return (
    <Container {...props}>
      {user.role === "admin" && (
        <DishEditButton type="button" onClick={handleEdit} />
      )}
      <DishImage src={image} />
      <DishTitleHolder>
        <Title>Salada Ravanello</Title>
        <SymbolSpan>&nbsp;&#8618;</SymbolSpan>
      </DishTitleHolder>
      <DishPrice>R$ 49,97</DishPrice>
    </Container>
  );
}
