import styled from 'styled-components';

export const EventDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  height: 95vh;

  @media (max-width: 500px) {
    flex-direction: column;
    height: 100%;
  }

  section {
    &:first-child {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 80px;

      @media (max-width: 500px) {
        width: 100%;
        padding: 50px 20px;
      }

      div {
        position: fixed;
        top: 20px;
        left: 20px;

        a {
          font-size: 1.5rem;
          color: #6438cf;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      h2 {
        font-size: 5rem;
        font-weight: 700;
        text-align: center;
      }

      p {
        font-size: 1.5rem;
        margin: 25px 0;
        text-align: center;
        line-height: 1.4;
      }

      .desc-button {
        border-radius: 50px;
        background: #666a7c;
        border: none;
        color: #ffffff;
        font-size: 2rem;
        padding: 10px;
        width: 250px;
        text-align: center;
        cursor: pointer;
      }
    }

    &:last-child {
      width: 40%;
      background: rgba(24, 23, 23, 0.06);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 25px;

      @media (max-width: 500px) {
        display: none;
      }

      svg {
        font-size: 2.5rem;
        margin-right: 10px;
      }

      div {
        margin: 20px 0;

        div {
          display: flex;
          align-items: center;
          margin: 10px 0;

          p {
            font-size: 1.5rem;
            line-height: 1.5;
          }
        }

        div > div {
          flex-direction: column;
          align-items: start;

          h3 {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;

export const EventAgendaContainer = styled.div`
  background-color: #262626;
  color: #ffffff;
  padding: 20px;

  & > h2 {
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
    padding: 0 5px 10px 5px;
    line-height: 1.8;
    margin: 10px 0;

    span {
      background-color: #6438cf;
      padding: 5px;
      font-weight: 700;
      font-size: 2.8rem;
    }
  }

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 100%;
  }

  & > section > div {
    width: 80%;
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
      width: 100%;
    }

    section {
      width: 50%;
      margin: 10px;

      h2 {
        font-size: 2rem;
        font-weight: 700;
      }

      h3 {
        font-size: 4.3rem;
        font-weight: 700;
        letter-spacing: 2px;

        span {
          font-size: 1.5rem;
          vertical-align: top;
        }
      }

      h4 {
        font-size: 1.5rem;
        background-color: #6438cf;
        width: fit-content;
        padding: 5px;
        margin: 5px 0;
      }

      p {
        font-size: 1.5rem;
        line-height: 1.8;
      }
    }
  }
`;
