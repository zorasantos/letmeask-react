import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin: 0 auto;
  margin-top: 20px;
  width: 950px;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 950px;

    div {
      display: flex;
      flex-direction: column;

      max-width: 316px;
      max-height: 316px;
    }

    img {
      border-radius: 50%;
      height: 290px;
    }
  }

  .teste {
    background-color: red;
    width: 100vw;
    height: 100vh;
    margin-bottom: 50px;
  }
`;

export const PainelHome = styled.img`
  width: 950px;
  height: 450px;
`;