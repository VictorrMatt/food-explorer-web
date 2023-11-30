import styled from "styled-components";

export const Container = styled.p`
  display: flex;
  align-self: stretch;
  gap: 0.5rem;

  @keyframes focus-text {
    0% {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    50% {
      outline: 0px solid ${({ theme }) => theme.COLORS.DARK_900};
    }
    100% {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%;
`;

export const InputText = styled.input`
  font-family: Roboto;
  width: 100%;
  height: 3rem;
  padding: 0.75rem 0.87rem;
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme, disabled }) => theme.COLORS.LIGHT_100};

  &:focus-visible {
    animation-name: focus-text;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;
