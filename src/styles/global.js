import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: Roboto, Poppins;
    font-weight: bold;

    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }
`;
