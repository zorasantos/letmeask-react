import { Container, Wrapper } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <div className="right">
          <nav>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
            <NavLink to="/article/list">
              <span>Artigos</span>
            </NavLink>
            <NavLink to="/about">
              <span>Sobre</span>
            </NavLink>
            <NavLink to="/">
              <span>Contato</span>
            </NavLink>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}