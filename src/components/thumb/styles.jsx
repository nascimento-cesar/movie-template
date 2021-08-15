import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #000;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  margin-bottom: 2rem;
  padding: 0.2rem;
`;

export const Frame = styled.div`
  margin-bottom: 0.2rem;

  img {
    width: 100%;
  }
`;

export const Caption = styled.div`
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
`;
