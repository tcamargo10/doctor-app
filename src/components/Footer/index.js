import React from "react";
import { Container, Contain, Text, Link } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Contain>
        <div>
          <Text>&copy; 2021 NG Informática.</Text>
        </div>
        <div>
          <Text className="mr-1">Powered by </Text>
          <Link
            href="https://thiagocamargocodes.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thiago Camargo
          </Link>
        </div>
      </Contain>
    </Container>
  );
}
