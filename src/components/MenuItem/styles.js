import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  color: #ddd;

  && :hover {
    background-color: #321fdb;
    color: white;
  }
`;

export const Contain = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 14px 16px;
  transition: all ease 0.4s, color 0.4s;

  && svg {
    font-size: 25px;
    margin-right: 15px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 0px;
`;

export const Title = styled.h3`
  padding: 13px 16px;
  margin: 16px 0px 0px 0px;
  font-size: 14px;
  font-weight: normal;
  text-transform: uppercase;
  color: #ddd;
`;
