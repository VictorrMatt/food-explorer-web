import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins;
  font-size: 1.12rem;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
`;

export const SymbolSpan = styled.span`
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  font-size: 1rem;
`;

export const SectionChildren = styled.div`
  display: flex;
  width: 100%; /* Definindo a largura total */
  overflow-x: auto; /* Adicionando a capacidade de rolagem horizontal */
  gap: 1rem;
  white-space: nowrap; /* Impedindo que os itens quebrem para a próxima linha */
  border-radius: 0.5rem;
  cursor: grab;
`;
