import { Container, LinkMenu } from './styles';

export function Header() {
  return (
    <Container>
      <nav>
        <LinkMenu href="/">
          <span>Home</span>
        </LinkMenu>
        <LinkMenu href="/article/list">
          <span>Artigos</span>
        </LinkMenu>
        <LinkMenu href="/about">
          <span>Sobre</span>
        </LinkMenu>
        <LinkMenu href="/">
          <span>Contato</span>
        </LinkMenu>
      </nav>
    </Container>
  );
}