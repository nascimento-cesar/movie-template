import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:after {
    content: ": ";
  }
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
`;

export const Option = styled.div`
  cursor: pointer;
`;

export const SearchResults = styled.div`
  background-color: #efefef;
  top: 30px;
  position: absolute;
  width: 600px;
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
