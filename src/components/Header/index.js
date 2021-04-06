import React from "react";
import { Container, Contain, Area, AreaAvatar, Avatar } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

export default function Header() {
  return (
    <Container>
      <Contain>
        <Area>
          <IconButton aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Area>

        <Area>
          <AreaAvatar>
            <Avatar src={"avatars/5.jpg"} alt="avatar" />
          </AreaAvatar>
        </Area>
      </Contain>
    </Container>
  );
}
