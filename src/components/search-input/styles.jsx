import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

export const Label = styled.label`
  &:after {
    content: ": ";
  }
`;

export const Input = styled.input``;

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
