import styled from "styled-components";
import searchImage from "../../assets/images/search.png";

export const Container = styled.p`
  display: flex;
  align-self: stretch;
  gap: 0.5rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }

  > input[type="text"] {
    height: 3rem;
    padding: 0.75rem 0.87rem;
    border: none;
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

/*     background-image: ${(props) =>
      props.custom ? `url(${searchImage})` : "none"};
    background-repeat: no-repeat;
    background-position: left center;
    background-position-x: 0.62rem;
    background-size: 1.21rem;
    padding-left: 2.5rem; */
  }

  > input[type="text"]:focus-visible {
    animation-name: focus-text;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

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
