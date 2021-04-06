import React from "react";
import { Container, Contain, Area, AreaAvatar, Avatar } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/Sidebar/Sidebar.actions";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Contain>
        <Area>
          <IconButton
            // diferença do padding do iconbutton
            style={{ marginLeft: "-12px" }}
            aria-label="menu"
            onClick={() => dispatch(toggleSidebar())}
          >
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
