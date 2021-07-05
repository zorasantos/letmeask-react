import { ArticleCard } from "../../components/ArticleCard/index";
import { useArticle } from "../../hooks/useArticle";

export function ArticleList() {
  const { articles } = useArticle();
  return (
    <div>
      {articles.map(article => {
        return (
          <ArticleCard
            key={article.id}
            title={article.title}
            id={article.id}
            author={article.author.name}
            avatar={article.author.avatar}
            firsParagraph={article.firsParagraph}
          />
        );
      })}

    </div>
  );
}