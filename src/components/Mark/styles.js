import styled from "styled-components";

import plusIcon from "../../assets/icons/Plus.svg";
import closeIcon from "../../assets/icons/Close.svg";

export const Container = styled.div`
  max-height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
  border: ${({ theme, $isNew }) =>
    $isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_600};

  @keyframes focus-link {
    0% {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    50% {
      outline: 0px solid ${({ theme }) => theme.COLORS.DARK_400};
    }
    100% {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const InputText = styled.input`
  max-width: 3.7rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 2px;

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const PlusIcon = styled.button`
  width: 1rem;
  height: 1rem;

  background-color: transparent;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const CloseIcon = styled.button`
  width: 1rem;
  height: 1rem;

  background-color: transparent;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-radius: 0.31rem;
  }
`;

export const IconHolder = styled.div`
  display: flex;
`;
