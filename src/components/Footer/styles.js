import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  display: flex;
  height: 4.81rem;

  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1.5rem 1.3rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const FooterContainer = styled.div`
  display: none;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterLogoImage = styled.img`
  height: 1.37rem;
  width: 1.37rem;
`;

export const FooterLogoSpan = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  font-family: Roboto;
  font-size: 0.95rem;
  font-weight: 700;
`;

export const ContentLicense = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-family: "Dm Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
`;
