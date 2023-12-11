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

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Dish({ ...props }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleEditDish = (event) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai

    navigate("/edit");
  };

  const handleLoveDish = (event) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
  };

  return (
    <Container {...props}>
      {user.role === "admin" ? (
        <DishEditButton type="button" onClick={handleEditDish} />
      ) : (
        <DishLoveButton type="button" onClick={handleLoveDish} />
      )}
      <DishImage src={props.imageurl} />
      <DishTitleHolder>
        <Title>{props.title}</Title>
        <SymbolSpan>&nbsp;&#8618;</SymbolSpan>
      </DishTitleHolder>
      <DishPrice>{props.price}</DishPrice>
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
