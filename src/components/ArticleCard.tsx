import { Link } from "react-router-dom";

type ArticleListProps = {
  title: string;
  firsParagraph: string;
}

export function ArticleCard({
  title,
  firsParagraph
}: ArticleListProps) {
  return(
    <div className="article-list">
      <Link to="/article">
        <h2>{title}</h2>
        <p>{firsParagraph}</p>
      </Link>
    </div>
  );
}