import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;
  width: 100%;
  z-index: 1;

  > nav {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    margin: 2.25rem 1.75rem;

    input[type="text"] {
      width: 100%;
    }

    li {
      font-family: "Poppins", "Roboto";
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 140%;
      padding: 0.62rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      transition: border 350ms ease-in-out;
      cursor: pointer;
    }

    li:hover {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    li:focus-visible {
      animation-name: focus-link;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      outline: none;
    }

    @keyframes focus-link {
      0% {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      }
      50% {
        border-bottom: 0px solid ${({ theme }) => theme.COLORS.DARK_1000};
      }
      100% {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }
`;
