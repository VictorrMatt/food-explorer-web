import { Container } from "./styles";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Polygon } from "../../components/Header/styles";

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
      <div>
        <Polygon />
        <h2>food explorer</h2>
      </div>

      <form onSubmit={handleSignIn}>
        <h2>Faça seu login</h2>
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
        <Button title="Entrar" />
        <Link to="/register">Criar uma conta</Link>
      </form>
    </Container>
  );
}
