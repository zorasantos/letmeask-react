import { Link } from "react-router-dom";

type ArticleListProps = {
  title: string;
  firsParagraph: string;
  id: string
}

export function ArticleCard({
  title,
  firsParagraph,
  id
}: ArticleListProps) {
  return(
    <div className="article-list">
      <Link to={`/articleById/${id}`}>
        <h2>{title}</h2>
        <p>{firsParagraph}</p>
      </Link>
    </div>
  );
}