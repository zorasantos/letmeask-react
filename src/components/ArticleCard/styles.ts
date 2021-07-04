import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fefefe;
  border-radius: 5px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  margin: 20px;
  margin-top: 8px;
  max-width: 60%;
  padding: 10px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border: 1px solid #fefefe;
  }
`;
export const LinkArticle = styled(Link)`
  text-decoration: none;
  color: #3b3d42;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
  }

  p {
    font-family: 'Mulish', sans-serif;

    span {
      font-weight: bold;
    }
  }

  .author {
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    img {
      border-radius: 50px;
      width: 25px;
    }

    span {
      margin-left: 8px;
      font-family: 'Mulish', sans-serif;
      text-decoration: underline;
    }
  }
`;

