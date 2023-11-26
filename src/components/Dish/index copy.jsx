import {
  Container,
  DishEditButton,
  DishLoveButton,
  DishImage,
  DishTitleHolder,
  Title,
  SymbolSpan,
  DishPrice,
  Amount,
  MinusIcon,
  QuantitySpan,
  PlusIcon,
  DishButton,
} from "./styles";
import image from "../../assets/dishes/Mask group-1.png";

import { useAuth } from "../../hooks/auth";

export function Dish({ ...props }) {
  const { user } = useAuth();

  const handleEditDish = (event) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
    console.log(event.target);
  };

  const handleLoveDish = (event) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
    console.log("AMANDO");
  };

  return (
    <Container {...props}>
      {user.role === "admin" ? (
        <DishEditButton type="button" onClick={handleEditDish} />
      ) : (
        <DishLoveButton type="button" onClick={handleLoveDish} />
      )}
      <DishImage src={image} />
      <DishTitleHolder>
        <Title>Salada Ravanello</Title>
        <SymbolSpan>&nbsp;&#8618;</SymbolSpan>
      </DishTitleHolder>
      <DishPrice>R$ 49,97</DishPrice>
      {user.role === "customer" && (
        <>
          <Amount>
            <MinusIcon />
            <QuantitySpan>01</QuantitySpan>
            <PlusIcon />
          </Amount>
          <DishButton type="button">Incluir</DishButton>
        </>
      )}
    </Container>
  );
}
