import { ChangeEvent, FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import '../styles/text-editor.scss';

export function TextEditor() {
  const { user } = useAuth();
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
      title: title
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
    const { name, value } = event.target
    setFormData({...formData, [name]: value})
  }
  return (
    <div id="text-editor">
      <h2>Novo Artigo</h2>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="title"
         value={formData.title}
         placeholder="Titulo do artigo"
         onChange={handleInputChange}
        />
        <textarea
          name="firsParagraph"
          id="firsParagraph"
          placeholder="Escreva o primeiro paragrafo..."
          value={formData.firsParagraph}
          onChange={handleInputChange}
        />
        <textarea
          name="secondParagraph"
          placeholder="Escreva o segundo paragrafo..."
          value={formData.secondParagraph}
          onChange={handleInputChange}
        />
        <textarea
          name="thirdParagraph"
          placeholder="Escreva o terceiro paragrafo..."
          value={formData.thirdParagraph}
          onChange={handleInputChange}
        />
        <textarea
          name="fourthParagraph"
          placeholder="Escreva o quarto paragrafo..."
          value={formData.fourthParagraph}
          onChange={handleInputChange}
        />
      <button type="submit">Enviar artigo</button>
      </form>
    </div>
  );
}
