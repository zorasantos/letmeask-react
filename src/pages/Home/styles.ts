import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 1000px;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    margin-top: 20px;

    gap: 30px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;

      h3 {
        margin: 10px 0px;
      }

      p {
        text-align: center;
      }

      img {
        border-radius: 50%;
        height: 290px;
      }
    }
  }
`;

export const PainelHome = styled.img`
  width: 1000px;
  height: 500px;
`;