import {
  Container,
  SectionTitleContainer,
  Title,
  SymbolSpan,
  SectionChildren,
} from "./styles";

import Slider from "react-slick";

export function TitleSection({ ...props }, { ...rest }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: true,
    swipeToSlide: true,
    variableWidth: true,
    focusOnSelect: false,
    arrows: false,
  };
  return (
    <Container {...rest}>
      {props.title && (
        <SectionTitleContainer>
          <Title>{props.title}</Title>
          <SymbolSpan> &#8628;</SymbolSpan>
        </SectionTitleContainer>
      )}
      <Slider {...settings}>{props.children}</Slider>
    </Container>
  );
}
