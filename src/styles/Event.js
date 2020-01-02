import styled from 'styled-components';

export const EventPageStyle = styled.div`
  width: 100%;
  background-color: #6438cf;

  header {
    padding: 10px;
    nav {
      display: flex;
      justify-content: space-between;
      margin: 20px 10px;
      a {
        color: #fff;
        margin: 0 10px;
        font-size: 18px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;

      }
      .links {
        a {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .hero {
    margin: 30px auto;
    width: 60%
    display: flex;
    justify-content: space-between;
    align-items: center;
    .hero-text {
      width: 90%
      position: relative;
      right: 5%;
      h2 {
        width: 130%
        font-family: 'Lato', sans-serif;
        font-weight: 800;
        font-size: 62px;
        line-height: 80px;
        color: #fff;
        background-color: #111;
        margin: 10px 0;
      }
    }
    img {
      width: 60%;
    }
  }

  footer {
    bottom: 0;
    padding: 20px;
    p {
      text-align: center;
      font-size: 18px;
      color: #fff;
    }
  }
`;

export const CardContainer = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  h2 {
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 80px;
    color: #666a7c;
  }
  .cards {
    margin: 20px;
  }
`;

export const EventCardStyle = styled.div`
  width: 250px;
  height: 250px;
  box-shadow: -1px 1px 5px 1px rgba(219, 219, 219, 1);

  img {
    width: 100%;
    height: 170px;
    border-radius: 5px 5px 0 0;
  }

  .desc {
    text-align: center;
    padding: 10px;
    p {
      font-size: 14px;
      font-weight: bolder;
      color: #666a7c;
    }
    div {
      margin: 10px auto;
      font-size: 18px;
      line-height: 18px;
      color: #666a7c;
    }
  }
`;
