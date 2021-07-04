import { useParams } from "react-router-dom";
import { useArticle } from "../../hooks/useArticle";

import { Container } from './styles';

type RoomParams = {
  id: string;
}

export function ArticleById() {
  const params = useParams<RoomParams>();
  const ArticleId = params.id;
  const { articleById } = useArticle(ArticleId);
  console.log(articleById, 'articleById')
  return (
    <Container>
      <h2>{articleById.title}</h2>
      <p>{articleById.firsParagraph}</p>
      <p>{articleById.fourthParagraph}</p>
      <p>{articleById.secondParagraph}</p>
      <p>{articleById.thirdParagraph}</p>
      {/* Quando a página é recarregada perdemos o authorId */}
      {/* <span>{articleById.authorId.name}</span> */}
    </Container>
  );
}