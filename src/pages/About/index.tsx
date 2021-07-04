import { Container, Divider } from './styles';
import AboutImage from '../../assets/images/image-about.png';
import './styles';

export function About() {
  return (
    <Container>
      <img src={AboutImage} alt="Foto da Psicóloga Alana Farias" />
      <div>
        <h1>Alana Farias</h1>
        <h3>Psicóloga Clínica</h3>
        <Divider />
        <p>
          Psicóloga clínica com foco na saúde mental emocional aplicadas ao dia a dia.
          Trabalho com a Gestalt Terapia como forma de compreensão do ser humano.
          Atualmente meu público alvo são adultos.
        </p>
      </div>
    </Container>
  );
}