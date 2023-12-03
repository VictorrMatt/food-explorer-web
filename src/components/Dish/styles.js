import styled from "styled-components";

import pencilIcon from "../../assets/icons/Pencil.svg";
import heartIcon from "../../assets/icons/Heart.svg";
import minusIcon from "../../assets/icons/Minus.svg";
import plusIcon from "../../assets/icons/Plus.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 13.12rem;
  height: 18.25rem;
  padding: 1.5rem;
  gap: 0.75rem;
  margin: 0.1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes focus-link {
    0% {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    50% {
      outline: 0px solid ${({ theme }) => theme.COLORS.DARK_400};
    }
    100% {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @keyframes focus-button {
    0% {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    50% {
      outline: 0px solid ${({ theme }) => theme.COLORS.TOMATO_100};
    }
    100% {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const DishEditButton = styled.button`
  /* Estilos para o input */
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;

  /* Adicionando o ícone do lápis como fundo do input */
  background-color: transparent;
  background-image: url(${pencilIcon});
  background-repeat: no-repeat;
  background-size: contain;

/*   filter: opacity(0.1);
 */
  &:hover {
    cursor: pointer;
  }

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const DishLoveButton = styled.button`
  /* Estilos para o input */
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;

  /* Adicionando o ícone do lápis como fundo do input */
  background-color: transparent;
  background-image: url(${heartIcon});
  background-repeat: no-repeat;
  background-size: contain;

  filter: opacity(0.1);

  &:hover {
    cursor: not-allowed;
  }

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const DishImage = styled.img`
  display: flex;
  width: 5.5rem;
  height: 5.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const DishTitleHolder = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;
  font-family: Poppins;
  font-size: 0.87rem;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
`;

export const SymbolSpan = styled.span`
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  font-size: 1rem;
`;

export const DishPrice = styled.p`
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  text-align: center;

  font-size: 1rem;
  font-weight: 400;
  line-height: 100%; /* 16px */
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.87rem;

  filter: opacity(0.1);

  &:hover {
    cursor: not-allowed;
  }
`;

export const MinusIcon = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  background-color: transparent;
  background-image: url(${minusIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;

  &:hover {
    cursor: not-allowed;
  }

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const QuantitySpan = styled.span`
  width: 1.5rem;

  font-family: Roboto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const PlusIcon = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  background-color: transparent;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;

  &:hover {
    cursor: not-allowed;
  }

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const DishButton = styled.button`
  width: 10.12rem;
  height: 2rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.31rem;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;

  font-family: Poppins;
  font-size: 0.87rem;
  font-style: normal;
  font-weight: 500;
  line-height: 171.429%;

  filter: opacity(0.2);

  &:hover {
    cursor: not-allowed;
  }

  &:focus-visible {
    animation-name: focus-button;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;
