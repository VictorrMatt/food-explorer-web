import {
  EditContent,
  CreationForm,
  Title,
  CustomInputContainer,
  GenericLabel,
  InputFile,
  LabelForInput,
  Select,
  MarkersContainer,
  Textarea,
  ButtonsContainer,
} from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Mark } from "../../components/Mark";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import addKeyPressListener from "../../utils/addKeyPressListener";

import { api } from "../../services/api";

export function Edit() {
  const [sidestate, setsidestate] = useState("false");

  const [dish, setDish] = useState({});
  const [avatarUrl, setAvatarUrl] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("mainDish");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleBackHome = () => {
    navigate("/");
  };

  function handleAddTag() {
    if (newTag) {
      setTags((prevState) => [...prevState, newTag]);
      setNewTag("");
    }
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((link) => link !== deleted));
  }

  const handleKeyPress = (e) => {
    const objectType = e.target.type;

    const isSelect = e.target.id === "select";
    if (isSelect) {
      return;
    }

    if (e.key === "Enter" && objectType != "button") {
      e.preventDefault();
      return;
    }
  };

  const handleSaveChanges = async () => {
    try {
      const updatedDish = {
        name,
        category,
        ingredients: tags,
        price,
        description,
      };

      await api.put(`/dishes/${params.id}`, updatedDish, {
        withCredentials: true,
      });
    } catch (error) {
      let message = error.response
        ? error.response.data.message
        : "Não foi possível salvar as alterações.";
      return alert(message);
    }

    if (selectedImage) {
      handleSendImage();
    }
    handleBack();
  };

  const handleDeleteDish = async () => {
    const confirmation = window.confirm(
      "Tem certeza que deseja excluir o prato?"
    );

    if (confirmation) {
      try {
        await api.delete(`/dishes/${params.id}`, {
          withCredentials: true,
        });
      } catch (error) {
        let message = error.response
          ? error.response.data.message
          : "Não foi possível excluir o prato.";
        return alert(message);
      }
    }

    handleBackHome();
  };

  const handleSendImage = async () => {
    try {
      const formData = new FormData();

      if (selectedImage) {
        formData.append("avatar", selectedImage);
      }

      await api.patch(`/dishes/${params.id}/avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
    } catch (error) {
      let message = error.response
        ? error.response.data.message
        : "Não foi possível enviar a imagem do prato.";
      return alert(message);
    }
  };

  addKeyPressListener(setsidestate);

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`, {
          withCredentials: true,
        });
        setDish(response.data);

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
    if (dish.ingredients) {
      async function fetchTags() {
        try {
          const response = await api.get(`/tags/${params.id}`, {
            withCredentials: true,
          });
          const tagNames = response.data.map((tag) => tag.name);
          setTags(tagNames);
        } catch (error) {
          let message = error.response
            ? error.response.data.message
            : "Não foi possível procurar as tags:";
          return alert(message);
        }
      }

      fetchTags();
    }
  }, [dish]);

  useEffect(() => {
    if (Object.keys(dish).length !== 0) {
      setName(dish.name || "");
      setCategory(dish.category || "mainDish");
      setTags(dish.tags || []);
      setPrice(dish.price || "");
      setDescription(dish.description || "");
    }
  }, [dish]);

  return (
    <>
      <Header sidestate={sidestate} setsidestate={setsidestate} />
      <SideMenu sidestate={sidestate} setsidestate={setsidestate} />
      <BackButton tabIndex="0" onClick={() => handleBack()} />
      <EditContent>
        <CreationForm onKeyPress={handleKeyPress}>
          <Title>Editar prato</Title>
          <CustomInputContainer>
            <GenericLabel htmlFor="customInput">Imagem do prato</GenericLabel>
            <LabelForInput
              htmlFor="customInput"
              tabIndex="0"
              sent={selectedImage}
            >
              Selecione imagem para alterá-la
            </LabelForInput>
            <InputFile
              id="customInput"
              type="file"
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
            />
          </CustomInputContainer>
          <Input
            type="text"
            id="name"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <CustomInputContainer>
            <GenericLabel htmlFor="select">Categoria</GenericLabel>
            <Select
              id="select"
              onChange={() => {
                setCategory(event.target.value);
              }}
            >
              <option value="meal">Refeição</option>
              <option value="mainDish">Prato principal</option>
              <option value="drink">Bebida</option>
            </Select>
          </CustomInputContainer>

          <CustomInputContainer>
            <GenericLabel>Ingredientes</GenericLabel>
            <MarkersContainer>
              {tags.map((tag, index) => (
                <Mark
                  key={index}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}

              <Mark
                placeholder="Adicionar"
                $isNew
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </MarkersContainer>
          </CustomInputContainer>
          <Input
            type="text"
            id="price"
            label="Preço"
            placeholder="R$ 00,00"
            onChange={(event) => {
              if (price === "") {
                setPrice("R$ " + event.target.value);
                return;
              }

              setPrice(event.target.value);
            }}
            onFocus={() => {
              if (price === "") {
                setPrice("R$ ");
              }
            }}
            value={price}
          />
          <CustomInputContainer>
            <GenericLabel htmlFor="description">Descrição</GenericLabel>
            <Textarea
              id="description"
              name="story"
              rows="5"
              cols="33"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              value={description}
            ></Textarea>
          </CustomInputContainer>
          <ButtonsContainer>
            <Button
              type="button"
              model="app_1"
              value="Excluir prato"
              onClick={() => handleDeleteDish()}
            />

            <Button
              type="button"
              model="app_2"
              value="Salvar alterações"
              onClick={() => {
                handleSaveChanges();
              }}
            />
          </ButtonsContainer>
        </CreationForm>
      </EditContent>
    </>
  );
}
