import React from "react";
import { Content, Sidebar, Footer, Header } from "../../components";
import { Container, Wrapper, Body } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <Body>
          <Content />
        </Body>
        <Footer />
      </Wrapper>
    </Container>
  );
}
