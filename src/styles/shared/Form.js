import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 490px;
  padding-top: 200px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
    padding: 80px 10px 10px 10px;
  }

  h1 {
    color: #666a7c;
    font-weight: bolder;
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    color: #f70d1a;

    &:nth-last-child(1) {
      color: #000;
      margin: 10px 0;
      a {
        color: #6438cf;
      }
    }
  }
`;
