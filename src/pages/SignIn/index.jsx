import { Container } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  return (
    <Container>
      <div>
        <h1>food explorer</h1>
      </div>

      <form action="">
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Button title="Entrar" />
        <a>Criar conta</a>
      </form>
    </Container>
  );
}
