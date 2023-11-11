import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-areas:
    "logo"
    "main";
  gap: 4.56rem;
  padding: 0 1rem;

  > div {
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.62rem;

    h2 {
      font-size: 2.32rem;
      font-weight: 700;
    }

    svg {
      width: 2.68rem;
      height: 2.68rem;
    }
  }

  > form {
    grid-area: main;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h2 {
      display: none;

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
      }
    }

    p {
      display: flex;
      flex-direction: column;
    }

    a {
      font-family: Poppins;
      font-size: 0.87rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-areas: "logo main";
    align-items: center;
  }
`;
