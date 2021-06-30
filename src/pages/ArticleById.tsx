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
      {articleById.map((item: any) => {
        return(
          <div>
            <h2>{item.title}</h2>
            <p>{item.firsParagraph}</p>
            <p>{item.fourthParagraph}</p>
            <p>{item.secondParagraph}</p>
            <p>{item.thirdParagraph}</p>
          </div>
        );
      })}
    </div>
  );
}