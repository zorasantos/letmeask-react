import styled from 'styled-components';

export const InputTitle = styled.input`
  border: none;
  height: 70px;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  ::-webkit-input-placeholder {
    color: #BDBDBD;
    font-weight: lighter;
    font-size: 30px;
  }
`;