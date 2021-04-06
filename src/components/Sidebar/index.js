import { Container, Header, Image, Menu, Footer } from "./styles";
import Logo from "../../assets/logo.png";
import { IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import MenuItem from "../../components/MenuItem";
import NavItems from "./NavItems";

export default function Sidebar() {
  return (
    <Container>
      <Header>
        <Image src={Logo} alt="logo" />
      </Header>

      <Menu>
        {NavItems.map((item, index) => (
          <MenuItem
            key={index}
            text={item.text}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </Menu>

      <Footer>
        <IconButton aria-label="arrow-left">
          <ChevronLeftIcon style={{ fontSize: 32, color: "white" }} />
        </IconButton>
      </Footer>
    </Container>
  );
}
