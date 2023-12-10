import {
  Container,
  BannerContainer,
  BannerGradient,
  BannerImage,
  ContentHolder,
  TextContainer,
  BannerTitle,
  Description,
  HomeContent,
} from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { ScrollSection } from "../../components/ScrollSection";
import { TitleSection } from "../../components/TitleSection";
import { Dish } from "../../components/Dish";
import { Footer } from "../../components/Footer";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

import background from "../../assets/images/detail.png";

import randomPlate from "../../assets/dishes/Mask group-10.png";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function Home() {
  const { user } = useAuth();

  const [sideState, setSideState] = useState("false");
  const [dishes, setDishes] = useState([]);
  const [meal, setMeal] = useState([]);
  const [mainDish, setMainDish] = useState([]);
  const [drink, setDrink] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?name&ingredients`, {
          withCredentials: true,
        });
        setDishes(response.data);
      } catch (error) {
        let message = error.response
          ? error.response.data.message
          : "Não foi possível procurar os pratos:";
        alert(message);
      }
    }

    fetchDishes();
  }, []);

  useEffect(() => {
    const separateDishes = () => {
      const mealDishes = dishes.filter((dish) => dish.category === "meal");
      const mainDishes = dishes.filter((dish) => dish.category === "mainDish");
      const drinkDishes = dishes.filter((dish) => dish.category === "drink");

      setMeal(mealDishes);
      setMainDish(mainDishes);
      setDrink(drinkDishes);
    };

    separateDishes();
  }, [dishes]);

  return (
    <Container>
      <Header sidestate={sideState} setsidestate={setSideState} />
      <SideMenu sidestate={sideState} setsidestate={setSideState} />

      <BannerContainer>
        <BannerGradient />
        <BannerImage src={background} alt="Imagem de ingredientes" />

        <ContentHolder>
          <TextContainer>
            <BannerTitle>Sabores inigualáveis</BannerTitle>
            <Description>
              Sinta o cuidado do preparo com ingredientes selecionados
            </Description>
          </TextContainer>
        </ContentHolder>
      </BannerContainer>

      <ScrollSection vh="70vh">
        <HomeContent>
          {meal != "" && (
            <TitleSection title="Refeições">
              {meal.map((dish) => (
                <Dish
                  tabIndex="0"
                  key={dish.id}
                  imageurl={dish.avatar}
                  title={dish.name}
                  price={dish.price}
                  onClick={(event) => navigate(`/details/${dish.id}`)}
                />
              ))}
            </TitleSection>
          )}

          {mainDish != "" && (
            <TitleSection title="Pratos principais">
              {mainDish.map((dish) => (
                <Dish
                  tabIndex="0"
                  key={dish.id}
                  imageurl={dish.avatar}
                  title={dish.name}
                  price={dish.price}
                  onClick={(event) => navigate(`/details/${dish.id}`)}
                />
              ))}
            </TitleSection>
          )}

          {drink != "" && (
            <TitleSection title="Bebidas">
              {drink.map((dish) => (
                <Dish
                  tabIndex="0"
                  key={dish.id}
                  imageurl={dish.avatar}
                  title={dish.name}
                  price={dish.price}
                  onClick={(event) => navigate(`/details/${dish.id}`)}
                />
              ))}
            </TitleSection>
          )}
        </HomeContent>
        <Footer />
      </ScrollSection>
    </Container>
  );
}
