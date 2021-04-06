import React, { useState } from "react";
import { Container, Form, Input, FormButton, Image, Link } from "./styles";
import { useHistory } from "react-router";
import Logo from "../../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");

  const history = useHistory();

  const Login = (e) => {
    e.preventDefault();

    setErrorEmail("");
    setErrorSenha("");

    if (email !== "" && senha !== "") {
      //Valida email e senha
      if (senha !== "123") {
        setErrorSenha("Email ou senha invalidos!");
      } else {
        //salva dados do user no redux

        //redireciona para tela home
        history.push("/");
      }
    }

    if (email === "") {
      setErrorEmail("Digite seu email");
    }

    if (senha === "") {
      setErrorSenha("Digite sua senha");
    }
  };

  return (
    <Container>
      <Form>
        <Image src={Logo} alt="logo" />

        <Input
          type="email"
          error={errorEmail !== ""}
          label="Email"
          helperText={errorEmail}
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          error={errorSenha !== ""}
          label="Senha"
          helperText={errorSenha}
          variant="outlined"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <FormButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={Login}
        >
          Entrar
        </FormButton>

        <Link onClick={() => history.push("/register")}>
          não possuo cadastro
        </Link>
      </Form>
    </Container>
  );
}
