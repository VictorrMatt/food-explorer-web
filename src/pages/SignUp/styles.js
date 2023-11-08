import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-areas:
    "logo"
    "main";

  > div {
    grid-area: logo;
  }

  > form {
    grid-area: main;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
      }
    }

    p {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-areas: "logo main";
    align-items: center;
  }
`;
