import {
  Container,
  DishEditButton,
  DishLoveButton,
  DishImage,
  DishTitleHolder,
  Title,
  SymbolSpan,
  DishPrice,
  DishButton,
} from "./styles";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { QuantityControl } from "../QuantityControl";

export function Dish({ ...props }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleEditDish = (event, id) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
    navigate(`/edit/${id}`);
  };

  const handleLoveDish = (event) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
  };

  return (
    <Container {...props} tabIndex="0" style={{ display: "flex" }}>
      {user.role === "admin" ? (
        <DishEditButton
          type="button"
          onClick={(event) => handleEditDish(event, props.id)}
        />
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
          <QuantityControl out="true" />
          <DishButton type="button">Incluir</DishButton>
        </>
      )}
    </Container>
  );
}
