import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import '../styles/question.scss';

// type AnswerProps = {
//   content: string;
  // author: {
  //   avatar: string;
  //   name: string;
  // };
  // children?: ReactNode;
  // isAnswered?: boolean;
  // isHighlighted?: boolean;
// }

type RoomParams = {
  id: string;
}

export function Answer(questionId: any) {
  const [newAnswer, setNewAnswer] = useState('');
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { user } = useAuth();

  async function handleSendAnswer(event: FormEvent){
    event.preventDefault();
    if(newAnswer.trim() === '') return;

    const answer = {
      content: newAnswer,
      author: {
        name: user?.name,
        avatar: user?.avatar
      }
    };

    await database.ref(`rooms/${roomId}/questions/${questionId}/answers`).push(answer);
    setNewAnswer('');

  }

  return (
    <>
      {/* <div
        className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted && !isAnswered ? 'highlighted' : ''}`}
      >
        {/* <p>{content}</p>
        <footer>
          <div className="user-info">
            <img src={author.avatar} alt={author.name} />
            <span>{author.name}</span>
          </div>
          <div>{children}</div>
        </footer>
      </div> */}
      <form onSubmit={handleSendAnswer}>
        <textarea
          placeholder="Responda esta pergunta..."
          onChange={event => setNewAnswer(event.target.value)}
          value={newAnswer}
        />
        <button type="submit" >Enviar resposta</button>
      </form>
    </>
  );
}