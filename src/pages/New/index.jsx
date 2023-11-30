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
} from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import addKeyPressListener from "../../utils/addKeyPressListener";

export function New() {
  const [sidestate, setsidestate] = useState("false");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

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
              <option value="valor1" selected>
                Valor 1
              </option>
              <option value="valor2">Valor 2</option>
              <option value="valor3">Valor 3</option>
            </Select>
          </CustomInputContainer>
          <Input type="text" id="price" label="Preço" placeholder="R$ 00,00" />
        </CreationForm>
      </SectionSendDish>
    </Container>
  );
}
