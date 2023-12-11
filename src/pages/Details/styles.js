import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 45rem;
  overflow-y: auto;
`;

export const DishImage = styled.img`
  width: 15.45rem;
  height: 15.45rem;
  border-radius: 50%;
`;

export const Holder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 1.3rem 3rem;
  gap: 1.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const DishTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins;
  font-size: 1.69rem;
  font-weight: 400;
  line-height: 140%; /* 37.858px */
`;

export const SpanDescription = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 300;
  max-height: 3.5rem;
  overflow-y: auto;
  line-height: 140%; /* 22.715px */
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Tag = styled.p`
  display: inline-flex;
  padding: 0.25rem 0.5rem;

  border-radius: 0.31rem;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  font-family: Poppins;
  font-size: 0.87rem;
  font-weight: 400;
  line-height: 171.429%;
`;
