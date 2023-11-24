import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1.3rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
      font-size: 1.12rem;
      font-weight: 500;
      line-height: 140%; /* 25.2px */
    }

    span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 1rem;
    }
  }

  > div:last-of-type {
    display: flex;
    width: 100%; /* Definindo a largura total */
    overflow-x: auto; /* Adicionando a capacidade de rolagem horizontal */
    gap: 1rem;
    /*     padding: 0.5rem;
 */ /* padding-bottom: 1rem; */ /* Adicionando um espaço na parte inferior para acomodar a barra de rolagem */
    white-space: nowrap; /* Impedindo que os itens quebrem para a próxima linha */
    /*     background-color: ${({ theme }) => theme.COLORS.DARK_300};
 */
    border-radius: 0.5rem;

    /* WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
      width: 12px; /* Largura da barra de rolagem */
      height: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.CAKE_200};
      border-radius: 10px;
    }

    /* Firefox */
    & {
      scrollbar-width: thin; /* Largura da barra de rolagem */
      scrollbar-color: ${({ theme }) => theme.COLORS.CAKE_200} transparent; /* Cor do thumb e do track */
    }
  }
`;
