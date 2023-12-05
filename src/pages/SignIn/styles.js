import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "logo"
    "main";
  gap: 4.56rem;
  margin: 9.87rem 1.5rem 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-areas: "logo main";
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.62rem;

  > svg {
    width: 2.68rem;
    height: 2.68rem;
  }
`;

export const LogoWriting = styled.h2`
  font-size: 2.32rem;
  font-weight: 700;
  white-space: nowrap;
`;

export const SignInForm = styled.form`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > p {
    display: flex;
    flex-direction: column;
  }

  > a {
    font-family: Poppins;
    font-size: 0.87rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > button:focus-visible {
    animation-name: focus;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  > a:focus-visible {
    animation-name: focus;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
    padding: 0 0.87rem;
  }
`;

export const SignInTitle = styled.h2`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
  }
`;
