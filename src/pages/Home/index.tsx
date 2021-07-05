import { Container, PainelHome } from "./styles";
import painelHomeImage from '../../assets/images/painel.jpg';
import imageOne from '../../assets/images/image-home-one.png';
import imageTwo from '../../assets/images/image-home-two.png';
import imageThree from '../../assets/images/image-home-three.png';
export function Home() {
  return (
    <Container>
      <PainelHome src={painelHomeImage} alt="Imagem painel home" />

      <section id="section-one">
        <div>
          <img src={imageOne} alt="" />
          <h2>Psicoterapia Home Care</h2>
          <p>É o serviço de psicologia que vai até onde cliente está. Entre em contato e saiba mais informações.</p>
        </div>
        <div id="section-one">
          <img src={imageTwo} alt="" />
          <h2>Compartilhe saúde!</h2>
          <p>
            Será um prazer palestrar na sua instituição sobre temas relacionado
            a psicologia! Também podemos realizar parcerias de sucesso! Entre em
            contato e saiba mais!
          </p>
        </div>
        <div id="section-one">
          <img src={imageThree} alt="" />
          <h2>Psicoterapia Individual Presencial e Online</h2>
          <p>
            Ter o acompanhamento de um psicólogo no dia a dia pode trazer
            transformações significativas em sua vida, independente do motivo que
            o motivou a iniciar a psicoterapia.
          </p>
        </div>
      </section>
    </Container>
  );
}