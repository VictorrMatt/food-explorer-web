import {
  Container,
  LogoContainer,
  LogoWriting,
  SignInForm,
  SignInTitle,
} from "../SignIn/styles";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { PolygonIcon } from "../../components/Header/styles";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault();

    if ((!name, !email, !password)) {
      return alert("Por favor, preencha todos os campos.");
    }

    signUp();
  }

  async function signUp() {
    try {
      await api.post("/users", { name, email, password }).then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      });
    } catch (error) {
      let message = error.response.data.message;
      alert(error.response ? message : "Não foi possível cadastrar o usuário.");
    }
  }

  return (
    <Container>
      <LogoContainer>
        <PolygonIcon />
        <LogoWriting>food explorer</LogoWriting>
      </LogoContainer>

      <SignInForm onSubmit={handleSignUp}>
        <SignInTitle>Faça seu login</SignInTitle>
        <Input
          id="seu_nome"
          placeholder="Exemplo: Maria da Silva"
          label="Seu nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          id="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="senha"
          placeholder="No mínimo 6 caracteres"
          label="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="off"
        />
        <Button title="Criar conta" />
        <Link to="/">Já tenho uma conta</Link>
      </SignInForm>
    </Container>
  );
}
