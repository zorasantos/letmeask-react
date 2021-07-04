import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import '../styles/text-editor.scss';

import { InputTitle, TextareaParagraph } from './styles';

export function TextEditor() {
  const { user } = useAuth();
  const searchInput = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: "",
    firsParagraph: "",
    secondParagraph: "",
    thirdParagraph: "",
    fourthParagraph: ""
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { title, firsParagraph, secondParagraph, thirdParagraph, fourthParagraph } = formData
    const roomRef = database.ref('articles');
    await roomRef.push({
      authorId: {
        id: user?.id,
        avatar: user?.avatar,
        name: user?.name,
      },
      fourthParagraph: fourthParagraph,
      thirdParagraph: thirdParagraph,
      secondParagraph: secondParagraph,
      firsParagraph: firsParagraph,
      title: title,
      createAt: new Date()
    })
    setFormData({
      title: "",
      firsParagraph: "",
      secondParagraph: "",
      thirdParagraph: "",
      fourthParagraph: ""
    })
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value})
  }

  useEffect(()=>{
    searchInput.current?.focus();
 },[])
  return (
    <div id="text-editor">
      <h2>Novo Artigo</h2>
      <form onSubmit={handleSubmit}>
        <InputTitle
        ref={searchInput}
         type="text"
         name="title"
         placeholder="Título do artigo"
         value={formData.title}
         onChange={handleInputChange}
        />
        <TextareaParagraph
          name="firsParagraph"
          id="firsParagraph"
          rows={10}
          placeholder="Escreva o primeiro paragrafo..."
          value={formData.firsParagraph}
          onChange={handleInputChange}
        />
        <TextareaParagraph
          name="secondParagraph"
          id="secondParagraph"
          rows={10}
          placeholder="Escreva o segundo paragrafo..."
          value={formData.secondParagraph}
          onChange={handleInputChange}
        />
        <TextareaParagraph
          name="thirdParagraph"
          id="thirdParagraph"
          rows={10}
          placeholder="Escreva o terceiro paragrafo..."
          value={formData.thirdParagraph}
          onChange={handleInputChange}
        />
        <TextareaParagraph
          name="fourthParagraph"
          id="fourthParagraph"
          rows={10}
          placeholder="Escreva o quarto paragrafo..."
          value={formData.fourthParagraph}
          onChange={handleInputChange}
        />
      <button type="submit">Enviar artigo</button>
      </form>
    </div>
  );
}
