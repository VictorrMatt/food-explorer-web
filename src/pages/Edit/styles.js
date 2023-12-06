import styled from "styled-components";

import UploadIcon from "../../assets/icons/UploadSimple.svg";
import ChevronIcon from "../../assets/icons/chevron-down.svg";

export const Container = styled.div``;

export const EditContent = styled.div`
  margin: 0 1.2rem;
`;

export const CreationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  max-height: 40rem;
  overflow: auto;

  > p {
    display: flex;
    flex-direction: column;
  }
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
    animation-name: focus;
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

  > option {
    font-size: 1rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &:focus-visible {
    animation-name: focus;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;

export const MarkersContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  padding: 0.5rem;
  gap: 0.7rem;
  overflow-y: hidden;
  border-radius: 0.3rem;
`;

export const Textarea = styled.textarea`
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%;
  padding: 0.87rem;
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus-visible {
    animation-name: focus;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
