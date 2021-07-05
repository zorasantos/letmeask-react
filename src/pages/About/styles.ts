import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 85%;

  height: 100vh;
  margin-left: 50px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 5px;
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 20px;
      color: #D4C6Bd;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 20px;

    h1 {
      margin-bottom: 10px;
      color: #3D5361;
      font-size: 50px;
      font-weight: lighter;
      font-family: 'Caveat', sans-serif;
    }

    h3 {
      font-weight: 500;
      margin-bottom: 30px;
      color: #D6B7B5;
    }

    p {
      text-align: justify;
      line-height: 25px;
      margin-top: 40px;
      color: #3D5361;
    }
  }

`;

export const Divider = styled.hr`
  border-top: 1px solid #D6B7B5;
`;