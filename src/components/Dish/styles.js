import styled from "styled-components";

export const Container = styled.div`
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

  > img {
    display: flex;
    width: 5.5rem;
    height: 5.5rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;

    font-family: Poppins;
    font-size: 0.87rem;
    font-weight: 500;
    line-height: 1.5rem; /* 171.429% */
  }

  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    text-align: center;

    font-size: 1rem;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }
`;
