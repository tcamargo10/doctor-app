import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const Image = styled.img`
  height: 160px;
  width: auto;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const Link = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: gray;
  cursor: pointer;

  &&:hover {
    text-decoration: underline;
  }
`;

export const Input = styled(TextField)`
  && {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const FormButton = styled(Button)`
  && {
    height: 45px;
  }
`;
