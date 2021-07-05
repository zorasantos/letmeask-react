import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;

`;

export const Wrapper = styled.div`
  margin: 50px 50px 0px 0px;
  nav {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
`;

export const LinkMenu = styled(NavLink)`
  color: #F5F0ED;
  text-decoration: none;

  &:hover {
    color: #D4C6Bd;
    border-bottom: 2px solid #D4C6Bd;
  }
`;