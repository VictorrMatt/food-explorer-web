import styled from "styled-components";

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";

export const Container = styled.a`
  display: flex;
  align-items: center;
  width: min-content;
  margin: 1px;

  &:focus-visible {
    animation-name: focus;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const CaretLeft = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: ${({ model }) => {
    switch (model) {
      case "app_1":
        return "1rem";
      case "app_2":
        return "1.5rem";
    }
  }};
  height: ${({ model }) => {
    switch (model) {
      case "app_1":
        return "1rem";
      case "app_2":
        return "1.5rem";
    }
  }};
  background-image: url(${CaretLeftIcon});
`;

export const GoBackSpan = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins, "Roboto";
  font-size: ${({ model }) => {
    switch (model) {
      case "app_1":
        return "1.033rem";
      case "app_2":
        return "1.5rem";
    }
  }};
  font-weight: 500;
  line-height: 140%; /* 33.6px */
`;
