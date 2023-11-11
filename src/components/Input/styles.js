import styled from "styled-components";

export const Container = styled.p`
  display: flex;
  align-self: stretch;
  gap: 0.5rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }

  > input[type="text"] {
    height: 3rem;
    padding: 0.75rem 0.87rem;
    border: none;
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
