import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.5rem;

  border-radius: 0.31rem;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  font-family: Poppins;
  font-size: 0.87rem;
  font-weight: 500;
  line-height: 171.429%;
`;
