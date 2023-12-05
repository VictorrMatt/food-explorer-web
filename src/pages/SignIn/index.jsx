import {
  Container,
  LogoContainer,
  LogoWriting,
  SignInForm,
  SignInTitle,
} from "./styles";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { PolygonIcon } from "../../components/Header/styles";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(event) {
    event.preventDefault();

    if (!email || !password) {
      return alert("Por favor, preencha todos os campos.");
    }

    signIn({ email, password });
  }

  return (
    <Container>
      <LogoContainer>
        <PolygonIcon />
        <LogoWriting>food explorer</LogoWriting>
      </LogoContainer>

      <SignInForm onSubmit={handleSignIn}>
        <SignInTitle>Faça seu login</SignInTitle>
        <Input
          id="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <Input
          id="senha"
          placeholder="No mínimo 6 caracteres"
          label="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="off"
          value={password}
        />
        <Button type="submit" model="others" value="Entrar" />
        <Link to="/register">Criar uma conta</Link>
      </SignInForm>
    </Container>
  );
}
