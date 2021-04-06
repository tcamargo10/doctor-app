import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  margin-left: ${({ show }) => (show ? "260px" : "0px")};
  transition: margin 0.3s;
  background-color: whitesmoke;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
