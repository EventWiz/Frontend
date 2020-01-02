import styled from 'styled-components';

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
