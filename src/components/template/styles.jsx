import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
  box-size: border-box;
  min-width: 800px;
`;

export const Content = styled.div`
  background-color: #000;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #5538c7;
  padding: 1rem;
  color: white;
  border: 0;
  font-size: 18px;
  margin-bottom: 2rem;
`;
