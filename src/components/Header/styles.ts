import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Wrapper = styled.div`
  nav {
    display: flex;
    gap: 20px;
    margin: 20px 150px 0px 0px;

    button {
      background: none;
      border: 0;
      outline: 0;
      color: #F5F0ED;

      min-width: 90px;
      min-height: 100%;

      cursor: pointer;
      &:hover {
        color: var(--color-white);
      }
      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;