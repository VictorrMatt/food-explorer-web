import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const BannerContainer = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  position: relative;
  height: 7.5rem;
  margin: 0.5rem 1rem 2.5rem 1rem;
  min-width: clamp(18rem, 76vw, 21.43rem);
`;

export const BannerGradient = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.BLUE_400} 0%,
    ${({ theme }) => theme.COLORS.BLUE_500} 100%
  );
`;

export const BannerImage = styled.img`
  position: relative;
  left: -1.5rem;
  width: 9rem;
`;

export const ContentHolder = styled.div`
  position: absolute;
  right: 0.5rem;
  top: calc(50% + 0.5rem);
  transform: translateY(-50%);
`;

export const TextContainer = styled.div`
  max-width: 11.8rem;
`;

export const BannerTitle = styled.h1`
  line-height: 140%;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export const Description = styled.p`
  font-size: 0.75rem;
  font-weight: 200;
  line-height: 0.8rem;
`;

export const HomeContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 1.3rem;
`;

export const ScrollButton = styled.button``;
