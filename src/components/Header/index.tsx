import { Container, LinkMenu } from './styles';

export function Header() {
  return (
    <Container>
      <nav>
        <LinkMenu to="/">
          <span>Home</span>
        </LinkMenu>
        <LinkMenu to="/article/list">
          <span>Artigos</span>
        </LinkMenu>
        <LinkMenu to="/about">
          <span>Sobre</span>
        </LinkMenu>
        <LinkMenu to="/">
          <span>Contato</span>
        </LinkMenu>
      </nav>
    </Container>
  );
}