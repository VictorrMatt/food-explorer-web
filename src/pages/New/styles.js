import styled from "styled-components";

import UploadIcon from "../../assets/icons/UploadSimple.svg";
import ChevronIcon from "../../assets/icons/chevron-down.svg";

export const Container = styled.div`
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

export const CreationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;

  > p {
    display: flex;
    flex-direction: column;
  }
`;

export const SectionSendDish = styled.div`
  margin: 1.2rem 1.3rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2rem;
  font-weight: 400;
`;

export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputFile = styled.input`
  display: none;
`;

export const GenericLabel = styled.label`
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const LabelForInput = styled.label`
  width: 100%;
  height: 3rem;
  padding: 0.75rem 0.87rem 0.75rem 2.87rem;
  border: none;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;

  font-family: Poppins;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 171.429%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-image: url(${UploadIcon});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 0.87rem;

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;

export const Select = styled.select`
  appearance: none;
  font-family: Roboto;
  width: 100%;
  height: 3rem;
  padding: 0.75rem 0.87rem;
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-image: url(${ChevronIcon});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: calc(100% - 0.87rem);

  &:focus-visible {
    animation-name: focus-link;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;
