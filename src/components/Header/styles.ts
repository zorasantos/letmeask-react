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

  background: #20495b;
  height: 60px;
  width: 100%;
`;

export const LinkMenu = styled(NavLink)`
  color: #F5F0ED;
  text-decoration: none;

  &:hover, &:active {
    border-bottom: 2px solid #F5F0ED;
  }
`;