import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 0.75rem 2rem;
  gap: 0.5rem;
  border: none;
  border-radius: 0.31rem;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-family: Poppins;
  font-size: 0.87rem;
  font-weight: 500;
  line-height: 1.5rem;
`;
