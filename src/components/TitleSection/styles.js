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
