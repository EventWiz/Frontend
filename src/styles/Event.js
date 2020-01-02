import styled from 'styled-components';

export const EvevtPageStyle = styled.div`
  width: 100%;
  height: 100vh;
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
    }
  }

  .hero {
    margin: 0 auto;
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
