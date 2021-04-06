import { Container, Text, Contain, Title } from "./styles";
import { useHistory } from "react-router";

export default function MenuItem({ title, text, link, icon, ...restProps }) {
  const history = useHistory();

  if (title) {
    return <Title>{text}</Title>;
  }

  return (
    <Container onClick={() => history.push(link)} {...restProps}>
      <Contain>
        {icon}
        <Text>{text}</Text>
      </Contain>
    </Container>
  );
}
