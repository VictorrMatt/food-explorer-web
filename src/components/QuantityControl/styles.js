import styled from "styled-components";

import minusIcon from "../../assets/icons/Minus.svg";
import plusIcon from "../../assets/icons/Plus.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.87rem;

  ${(props) => props.out && `filter: opacity(0.1);`}

  &:hover {
    cursor: not-allowed;
  }
`;

export const MinusIcon = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  background-color: transparent;
  background-image: url(${minusIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;

  &:hover {
    cursor: not-allowed;
  }

  &:focus-visible {
    animation-name: focus;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const QuantitySpan = styled.span`
  width: 1.5rem;

  font-family: Roboto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const PlusIcon = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  background-color: transparent;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;

  &:hover {
    cursor: not-allowed;
  }

  &:focus-visible {
    animation-name: focus;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;
