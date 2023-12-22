import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select:none;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: "Roboto", "Poppins";
    font-weight: bold;

    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  svg {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${({ theme }) =>
      theme.COLORS.LIGHT_100} !important;
    -webkit-box-shadow: transparent;
    transition: background-color 5000s ease-in-out 0s;
  }

  svg:focus-visible {
        animation-name: focus;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        border-radius: 0.31rem;
      }

  svg:active,
  svg:focus {
    outline: none;
  }

  /* WebKit (Chrome, Safari) */
  *::-webkit-scrollbar {
    /* width: 5px; 
    height: 3px; */
    width: 0;
    height: 0;
  }

  *::-webkit-scrollbar-thumb {
    /* background-color: ${({ theme }) => theme.COLORS.CAKE_200}; */
    /* border-radius: 10px; */
  }

  /* Firefox */
  * {
    scrollbar-width: thin; /* Largura da barra de rolagem */
    scrollbar-color: ${({ theme }) =>
      theme.COLORS.CAKE_200} transparent; /* Cor do thumb e do track */
  }

  @keyframes focus {
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
