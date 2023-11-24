import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  display: flex;
  /*   height: 4.81rem;
 */
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1.5rem 1.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > div {
    display: none;
    align-items: center;
    gap: 0.4rem;
    white-space: nowrap;

    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-family: Roboto;
      font-size: 0.95rem;
      font-weight: 700;
    }

    img {
      height: 1.37rem;
      width: 1.37rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      justify-content: space-between;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: "Dm Sans", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
  }
`;
