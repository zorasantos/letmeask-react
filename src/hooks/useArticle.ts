import { SetStateAction, useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type ArticleType = {
  author: {
    name: string;
    avatar: string;
    id: string;
  }
    title: string;
    firsParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
    fourthParagraph: string;
    id: string;
}

type FirebaseArticles = Record<string, {
  authorId: {
    name: string;
    avatar: string;
    id: string;
  }
    title: string;
    firsParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
    fourthParagraph: string;
}>

export function useArticle(articleId?: string) {
  const { user } = useAuth();
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [articleById, setArticleById] = useState<SetStateAction<any>>([]);

  useEffect(() => {
    const articleRef = database.ref(`articles/${articleId}`);

    articleRef.on('value', article => {
      const databaseArticle = article.val();
      const firebaseArticles: FirebaseArticles = databaseArticle ?? {};

      const parsedArticle = Object.entries(firebaseArticles).map(([key, value]) => {
        return {
          [key]: value
        }
      })
      console.log(parsedArticle, 'parsedArticle')
      setArticleById(parsedArticle);
    })

    return () => articleRef.off('value')
  }, [articleId])

  useEffect(() => {
    const roomRef = database.ref(`articles`);

    roomRef.on('value', article => {
      const databaseArticle = article.val();
      const firebaseArticles: FirebaseArticles = databaseArticle ?? {};
      const parsedArticle = Object.entries(firebaseArticles).map(([key, value]) => {
        return {
          id: key,
          author: value.authorId,
          title: value.title,
          firsParagraph: value.firsParagraph,
          secondParagraph: value.secondParagraph,
          thirdParagraph: value.thirdParagraph,
          fourthParagraph: value.fourthParagraph,
        }
      })
      console.log(parsedArticle, 'parsedArticles')
      setArticles(parsedArticle);
    })

    return () => roomRef.off('value')
  }, [user?.id])

  return { articles, articleById }
}