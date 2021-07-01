import { useParams } from "react-router-dom";
import { useArticle } from "../hooks/useArticle";

type RoomParams = {
  id: string;
}

export function ArticleById() {
  const params = useParams<RoomParams>();
  const ArticleId = params.id;
  const { articleById } = useArticle(ArticleId);
  return (
    <div>
      <h2>{articleById.title}</h2>
      <p>{articleById.firsParagraph}</p>
      <p>{articleById.fourthParagraph}</p>
      <p>{articleById.secondParagraph}</p>
      <p>{articleById.thirdParagraph}</p>
    </div>
  );
}