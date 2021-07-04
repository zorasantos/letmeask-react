import styled from 'styled-components';

export const InputTitle = styled.input`
  border: none;
  height: 70px;
  font-size: 30px;
  caret-color: #BDBDBD;
  font-weight: normal;
  background-color: transparent;
  /* -webkit-box-shadow: 0 0 0px 1000px white inset; */

  &:focus {
    outline: 0;
  }
  ::-webkit-input-placeholder {
    color: #BDBDBD;
    font-weight: lighter;
    font-size: 30px;
  }
`;

export const TextareaParagraph = styled.textarea`
  border: none;
  font-size: 15px;
  caret-color: #BDBDBD;
  font-weight: normal;
  background-color: transparent;
  /* -webkit-box-shadow: 0 0 0px 1000px white inset; */

  &:focus {
    outline: 0;
  }
  ::-webkit-input-placeholder {
    color: #BDBDBD;
    font-weight: lighter;
    font-size: 15px;
  }
`;