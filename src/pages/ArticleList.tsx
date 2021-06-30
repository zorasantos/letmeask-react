import { ArticleCard } from "../components/ArticleCard";
import { useArticle } from "../hooks/useArticle";

export function ArticleList() {
  const { articles } = useArticle();
  console.log(articles);
  return (
    <div>
      {articles.map(article => {
        return (
          <ArticleCard
            title={article.title}
            firsParagraph={article.firsParagraph}
          />
        );
      })}

    </div>
  );
}