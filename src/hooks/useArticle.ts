import { useEffect, useState } from "react";
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
}

type FirebaseQuestions = Record<string, {
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

export function useArticle() {
  const { user } = useAuth();
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    const roomRef = database.ref(`articles`);

    roomRef.on('value', article => {
      const databaseArticle = article.val();
      const firebaseQuestions: FirebaseQuestions = databaseArticle ?? {};
      const parsedArticle = Object.entries(firebaseQuestions).map(([key, value]) => {
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
      setArticles(parsedArticle);
    })

    return () => roomRef.off('value')
  }, [user?.id])

  return { articles }
}