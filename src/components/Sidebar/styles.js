import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 260px;
  background: #303c54;
  margin-left: ${({ show }) => (show ? "0px" : "-260px")};
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  transition: box-shadow 0.3s 0.15s, transform 0.3s, margin-left 0.3s,
    margin-right 0.3s, width 0.3s, z-index 0s ease 0.3s, -webkit-transform 0.3s;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 61px;
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
