import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: "main";

  > div {
    grid-area: logo;
  }

  > form {
    grid-area: main;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-areas: "logo main";
  }

  > div {
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: block;
    }
  }
`;
