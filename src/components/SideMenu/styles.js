import styled from "styled-components";

export const Container = styled.aside`
  /*   position: absolute;
 */
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  opacity: ${({ sidestate }) => (sidestate === "true" ? 1 : 0)};
  transition: opacity 150ms ease-in-out;
  pointer-events: ${({ sidestate }) =>
    sidestate === "true" ? "auto" : "none"};
  visibility: ${({ sidestate }) =>
    sidestate === "true" ? "visible" : "hidden"};
  display: ${({ sidestate }) =>
    sidestate === "true"
      ? "block"
      : "none"}; /* Adicionando a propriedade display */

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

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      &:focus-visible {
        animation-name: focus-link;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        border-radius: 0.31rem;
      }
    }

    @keyframes focus-link {
      0% {
        outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      }
      50% {
        outline: 0px solid ${({ theme }) => theme.COLORS.DARK_1000};
      }
      100% {
        outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }
`;
