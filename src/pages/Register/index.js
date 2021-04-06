import React, { useState } from "react";
import { Container, Form, Input, FormButton, Image, Link } from "./styles";
import { useHistory } from "react-router";
import Logo from "../../assets/logo.png";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");

  const history = useHistory();

  const Login = (e) => {
    e.preventDefault();

    setErrorEmail("");
    setErrorSenha("");

    if (email !== "" && senha !== "" && senha2 !== "") {
      //Verifica se senhas são iguais
      if (senha !== senha2) {
        setErrorSenha("Senhas tem de ser iguais");
      } else {
        // cria usuario no banco de dados

        //salva dados do user no redux

        //redireciona para tela home
        alert("Usuário criado com sucesso");
        history.push("/");
      }
    }

    if (email === "") {
      setErrorEmail("Digite um email");
    }

    if (senha === "" || senha2 === "") {
      setErrorSenha("Digite uma senha");
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
          label="Senha"
          error={errorSenha !== ""}
          variant="outlined"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Input
          type="password"
          error={errorSenha !== ""}
          label="Confirme a senha"
          helperText={errorSenha}
          variant="outlined"
          value={senha2}
          onChange={(e) => setSenha2(e.target.value)}
        />

        <FormButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={Login}
        >
          Registrar
        </FormButton>

        <Link onClick={() => history.push("/login")}>já sou cadastrado</Link>
      </Form>
    </Container>
  );
}
