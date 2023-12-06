import styled from "styled-components";

import CaretLeftIcon from "../../assets/icons/CaretLeft.svg";

export const Container = styled.a`
  display: flex;
  align-items: center;
  width: min-content;
  margin: 1px;
  align-self: flex-start;
  margin: 1.2rem 0 0 1.3rem;

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
  width: 1rem;
  height: 1rem;
  background-image: url(${CaretLeftIcon});
`;

export const GoBackSpan = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins, "Roboto";
  font-size: 1.033rem;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
`;
