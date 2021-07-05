import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  nav {
    display: flex;
    gap: 20px;
    margin-right: 50px;
  }

  background: #D4C6Bd;
  height: 60px;
  width: 100%;
`;

export const LinkMenu = styled(NavLink)`
  color: #3D5361;
  text-decoration: none;

  &:hover, &:active {
    border-bottom: 2px solid #3D5361;
  }
`;