import { Container, Wrapper, LinkMenu } from './styles';

export function Header() {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
}