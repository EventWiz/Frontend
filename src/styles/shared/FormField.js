import styled from 'styled-components';

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 490px;
  padding-top: 100px;
  margin: 0 auto;

  @media (max-width: 320px) {
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

  input {
    width: 100%;
    height: 50px;
    border: 1px solid #6438cf;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    font-size: 1.5rem;
  }

  a, .add, .next {
    text-align: center;
    width: 100%;
    background: #6438cf;
    border-radius: 5px;
    margin: 5px;
    padding: 15px;
    border: none;
    font-size: 1.8rem;
    color: #ffffff;
    cursor: pointer;
  }
  .add {
    margin: 20px 0;
  }
  .icon {
    display: flex;
    justify-content: center
    button {
      font-size: 24px;
      text-align: center;
      background: #6438cf;
      border-radius: 50%;
      padding:30px
      color: #fff
      margin: 20px;
    }
  }
`;
