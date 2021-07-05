import { Container, LinkArticle } from './styles';

type ArticleListProps = {
  title: string;
  firsParagraph: string;
  id: string;
  author: string;
  avatar: string;
}

export function ArticleCard({
  title,
  author,
  avatar,
  firsParagraph,
  id
}: ArticleListProps) {
  return(
    <Container key={id}>
      <LinkArticle to={`/articleById/${id}`}>
        <h2>{title}</h2>
        <div className="author">
          <img src={avatar} alt="Avatar do autor" />
          <span>{author}</span>
        </div>
        <p>{firsParagraph} <span>Continuar lendo...</span></p>
      </LinkArticle>
    </Container>
  );
}