import styled from "styled-components";

import polygon from "../../assets/icons/Polygon.svg";
import hamburger from "../../assets/icons/Menu.svg";
import receipt from "../../assets/icons/Receipt.svg";
import close from "../../assets/icons/Close.svg";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem 1.75rem 1.5rem 1.75rem;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const NavClose = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const CloseIcon = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: 1.53rem;
  height: 1.53rem;
  transform: translateY(3px);
  background-image: url(${close});
`;

export const NavCloseTitle = styled.h2`
  font-size: 1.32rem;
  font-weight: 700;
  white-space: nowrap;
`;

export const HamburgerIcon = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: 1.53rem;
  height: 1.53rem;
  background-image: url(${hamburger});
`;

export const LogoHeaderContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavPolygon = styled.nav`
  display: flex;
  position: relative;
  margin: auto;
  align-items: center;
  gap: 0.5rem;
`;
export const PolygonIcon = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: 1.53rem;
  height: 1.53rem;
  background-image: url(${polygon});
  cursor: default;
`;

export const LogoWriting = styled.h2`
  font-size: 1.32rem;
  font-weight: 700;
  white-space: nowrap;
`;

export const AdminSpan = styled.span`
  position: absolute;
  left: calc(100% + 0.5rem);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.COLORS.CAKE_200};
`;

export const ReceiptIcon = styled.svg`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
  width: 1.62rem;
  height: 1.37rem;
  background-image: url(${receipt});
  filter: opacity(0.1);
  cursor: not-allowed;
`;
