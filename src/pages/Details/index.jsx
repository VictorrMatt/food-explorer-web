import {
  Container,
  DetailsContent,
  DishImage,
  Holder,
  TextContainer,
  Title,
  SpanDescription,
  TagContainer,
} from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";

import { BackButton } from "../../components/BackButton";
import { ScrollSection } from "../../components/ScrollSection";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import massa from "../../assets/dishes/Mask group-1.png";

export function Details() {
  const [sideState, setSideState] = useState("false");

  const tags = {
    1: "pamonha",
    2: "paçoca",
    3: "ninho",
    4: "burocracia",
    5: "suco de pneu",
  };

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.stopPropagation();
    navigate(-1);
  };

  return (
    <Container>
      <Header sidestate={sideState} setsidestate={setSideState} />
      <SideMenu sidestate={sideState} setsidestate={setSideState} />
      <BackButton tabIndex="0" onClick={handleBack} />
      <ScrollSection>
        <DetailsContent>
          <Holder>
            <DishImage src={massa} />
            <TextContainer>
              <Title>Salada Ravanello</Title>
              <SpanDescription>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim.
              </SpanDescription>
              <TagContainer>
                {tags &&
                  Object.entries(tags).map(([key, value]) => (
                    <Tag key={key} title={value} />
                  ))}
              </TagContainer>
            </TextContainer>
            <Button type="button" value="Editar prato" />
          </Holder>
        </DetailsContent>
        <Footer />
      </ScrollSection>
    </Container>
  );
}
