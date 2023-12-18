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
} from "../Edit/styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Mark } from "../../components/Mark";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import addKeyPressListener from "../../utils/addKeyPressListener";

import { api } from "../../services/api";

export function New() {
  const [sidestate, setsidestate] = useState("false");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("mainDish");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.stopPropagation();
    navigate(-1);
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
    if (!name || !price) {
      return alert("Bota os coisa certo otário.");
    }

    try {
      const dish = {
        name,
        category,
        tags,
        price,
        description,
      };

      await api.post(`/dishes`, dish, {
        withCredentials: true,
      });
    } catch (error) {
      let message = error.response
        ? error.response.data.message
        : "Não foi possível criar um novo prato.";
      return alert(message);
    }

    return alert("Prato criado com sucesso!");
  };

  const showData = () => {
    console.log(
      `Name: ${name} Category: ${category} Tags: ${tags} Price: ${price} Description: ${description}`
    );
  };

  addKeyPressListener(setsidestate);

  return (
    <>
      <Header sidestate={sidestate} setsidestate={setsidestate} />
      <SideMenu sidestate={sidestate} setsidestate={setsidestate} />
      <BackButton tabIndex="0" onClick={handleBack} />
      <EditContent>
        <CreationForm onKeyPress={handleKeyPress}>
          <Title>Novo prato</Title>
          <CustomInputContainer>
            <GenericLabel htmlFor="customInput">Imagem do prato</GenericLabel>
            <LabelForInput htmlFor="customInput" tabIndex="0">
              Selecione imagem para alterá-la
            </LabelForInput>
            <InputFile id="customInput" type="file" />
          </CustomInputContainer>
          <Input
            type="text"
            id="name"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <CustomInputContainer>
            <GenericLabel htmlFor="select">Categoria</GenericLabel>
            <Select
              id="select"
              onChange={() => {
                setCategory(event.target.value);
              }}
            >
              <option value="meal" defaultValue>
                Refeição
              </option>
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
            ></Textarea>
          </CustomInputContainer>
          <Button
            type="button"
            model="others"
            value="Salvar alterações"
            onClick={() => handleSaveChanges()}
          />
        </CreationForm>
      </EditContent>
    </>
  );
}
