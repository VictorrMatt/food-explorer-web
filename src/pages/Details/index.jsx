import {
  Container,
  DetailsContent,
  DishImage,
  Holder,
  TextContainer,
  DishTitle,
  SpanDescription,
  TagContainer,
  Tag,
  AnotherHolder,
} from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { BackButton } from "../../components/BackButton";
import { ScrollSection } from "../../components/ScrollSection";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import defaultDishImage from "../../assets/dishes/no-image.jpg"; // Importe a imagem padrão
import { QuantityControl } from "../../components/QuantityControl";

export function Details() {
  const { user } = useAuth();

  const [sideState, setSideState] = useState("false");
  const [dish, setDish] = useState({});
  const [tags, setTags] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [buttonValue, setButtonValue] = useState("00,00");

  const params = useParams();
  const navigate = useNavigate();

  const handleBack = (e) => {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`, {
          withCredentials: true,
        });
        setDish(response.data);
        setButtonValue(response.data.price);
        if (response.data.avatar) {
          const imageUrl = `${api.defaults.baseURL}/files/${response.data.avatar}`;
          setAvatarUrl(imageUrl);
        }
      } catch (error) {
        let message = error.response
          ? error.response.data.message
          : "Não foi possível procurar os pratos:";
        return alert(message);
      }
    }

    fetchDish();
  }, [params.id]);

  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await api.get(`/tags/${params.id}`, {
          withCredentials: true,
        });

        setTags(response.data);
      } catch (error) {
        let message = error.response
          ? error.response.data.message
          : "Não foi possível procurar as tags:";
        return alert(message);
      }
    }

    fetchTags();
  }, [dish]);

  return (
    <Container>
      <Header sidestate={sideState} setsidestate={setSideState} />
      <SideMenu sidestate={sideState} setsidestate={setSideState} />
      <BackButton tabIndex="0" onClick={() => handleBack()} />
      <ScrollSection vh="81vh">
        <DetailsContent>
          <Holder>
            <DishImage src={avatarUrl || defaultDishImage} />
            <TextContainer>
              <DishTitle>{dish.name}</DishTitle>
              <SpanDescription>{dish.description}</SpanDescription>
              <TagContainer>
                {tags.length > 0 &&
                  tags.map((tag) => <Tag key={tag.id}>{tag.name}</Tag>)}
              </TagContainer>
            </TextContainer>
            {user.role === "admin" ? (
              <Button
                type="button"
                value="Editar prato"
                onClick={() => navigate(`/edit/${dish.id}`)}
              />
            ) : (
              <AnotherHolder>
                <QuantityControl out="true" />
                <Button out="true" value={"pedir - R$ " + buttonValue} />
              </AnotherHolder>
            )}
          </Holder>
        </DetailsContent>
        <Footer />
      </ScrollSection>
    </Container>
  );
}
