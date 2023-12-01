import {
  Container,
  CreationForm,
  SectionSendDish,
  Title,
  CustomInputContainer,
  GenericLabel,
  InputFile,
  LabelForInput,
  Select,
  MarkersContainer,
  Textarea,
  SaveButton,
} from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Mark } from "../../components/Mark";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import addKeyPressListener from "../../utils/addKeyPressListener";

export function New() {
  const [sidestate, setsidestate] = useState("false");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
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

  addKeyPressListener(setsidestate);

  return (
    <Container>
      <Header sidestate={sidestate} setsidestate={setsidestate} />
      <SideMenu sidestate={sidestate} setsidestate={setsidestate} />
      <SectionSendDish>
        <BackButton tabIndex="0" onClick={() => handleBack()} />
        <CreationForm>
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
          />
          <CustomInputContainer>
            <GenericLabel htmlFor="select">Categoria</GenericLabel>
            <Select id="select">
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
          <Input type="text" id="price" label="Preço" placeholder="R$ 00,00" />
          <CustomInputContainer>
            <GenericLabel htmlFor="description">Descrição</GenericLabel>
            <Textarea
              id="description"
              name="story"
              rows="5"
              cols="33"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></Textarea>
          </CustomInputContainer>
          <SaveButton type="button" value="Salvar alterações" />
        </CreationForm>
      </SectionSendDish>
    </Container>
  );
}
