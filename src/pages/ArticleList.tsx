import { ArticleCard } from "../components/ArticleCard";
import { useArticle } from "../hooks/useArticle";

export function ArticleList() {
  const { articles } = useArticle();
  return (
    <div>
      {articles.map(article => {
        return (
          <ArticleCard
            title={article.title}
            id={article.id}
            firsParagraph={article.firsParagraph}
          />
        );
      })}

    </div>
  );
}