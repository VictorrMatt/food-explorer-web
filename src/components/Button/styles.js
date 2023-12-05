import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  width: 100%;
  max-width: ${({ model }) => {
    switch (model) {
      case "app_1":
        return "50%";
      case "app_2":
        return "50%";
      default:
        return "100%";
    }
  }};
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.31rem;
  white-space: nowrap;
  overflow: ${({ model }) => {
    switch (model) {
      case "app_1":
        return "hidden";
      case "app_2":
        return "visible";
    }
  }};

  font-family: Poppins;
  font-size: ${({ model }) => {
    switch (model) {
      case "app_1":
        return "0.6rem";
      case "app_2":
        return "0.53rem";
      default:
        return "0.87rem";
    }
  }};
  font-weight: 500;
  line-height: 1.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme, model }) => {
    switch (model) {
      case "app_1":
        return theme.COLORS.DARK_800;
      case "app_2":
        return theme.COLORS.TOMATO_400;
      default:
        return theme.COLORS.TOMATO_100;
    }
  }};

  &:focus-visible {
    animation-name: focus;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.PM}) {
    font-size: ${({ model }) => {
      switch (model) {
        case "app_1":
          return "0.87rem";
        case "app_2":
          return "0.77rem";
        default:
          return "0.87rem";
      }
    }};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MG}) {
    font-size: 0.87rem;
  }
`;
