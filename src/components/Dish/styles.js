import styled from "styled-components";

import pencil from "../../assets/icons/Pencil.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 13.12rem;
  height: 18.25rem;
  padding: 1.5rem;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  /* Estilizando o input */
  > input[type="button"] {
    /* Estilos para o input */
    position: absolute;
    border: none;
    background-color: transparent;
    width: 1.5rem;
    height: 1.5rem;

    /* Adicionando o ícone do lápis como fundo do input */
    background-image: url(${pencil});
    background-repeat: no-repeat;
    background-size: contain;

    top: 1rem;
    right: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  > img {
    display: flex;
    width: 5.5rem;
    height: 5.5rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  > div {
    display: flex;
    align-items: center;

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      text-align: center;
      font-family: Poppins;
      font-size: 0.87rem;
      font-weight: 500;
      line-height: 1.5rem; /* 171.429% */
    }

    span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    text-align: center;

    font-size: 1rem;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

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
`;
