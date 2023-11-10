import styled from "styled-components";

import polygon from "../../assets/icons/Polygon.svg";
import hamburguer from "../../assets/icons/Menu.svg";
import receipt from "../../assets/icons/Receipt.svg";
import close from "../../assets/icons/Close.svg";

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 3.5rem 1.75rem 1.5rem 1.75rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  h2 {
    font-size: 1.32rem;
    font-weight: 700;
    white-space: nowrap;
  }

  > aside {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  > div {
    display: flex;
    position: relative;
    margin: auto;
    align-items: center;
    gap: 0.5rem;

    span {
      position: absolute;
      left: calc(100% + 0.5rem);
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.2rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;

export const Hamburguer = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: 1.53rem;
  height: 1.12rem;
  background-image: url(${hamburguer});
`;

export const Polygon = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: 1.53rem;
  height: 1.53rem;
  background-image: url(${polygon});
`;

export const Receipt = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: 1.62rem;
  height: 1.37rem;
  background-image: url(${receipt});
  filter: opacity(0.1);
`;

export const Close = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: 1.53rem;
  height: 1.53rem;
  transform: translateY(3px);
  /*   margin-top: 6px;
 */
  background-image: url(${close});
`;
