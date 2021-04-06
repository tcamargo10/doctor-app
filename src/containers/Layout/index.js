import React from "react";
import { Content, Sidebar, Footer, Header } from "../../components";
import { Container, Wrapper, Body } from "./styles";
import { useSelector } from "react-redux";

export default function Layout() {
  const showSideBar = useSelector((state) => state.sidebar);

  return (
    <Container>
      <Sidebar />
      <Wrapper show={showSideBar}>
        <Header />
        <Body>
          <Content />
        </Body>
        <Footer />
      </Wrapper>
    </Container>
  );
}
