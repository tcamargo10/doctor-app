import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 260px;
  background: #303c54;
  position: fixed;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const Image = styled.img`
  height: 50px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #3c4b64;
  color: white;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
