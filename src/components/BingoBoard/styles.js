import styled from 'styled-components';

export const BingoBoardWrapper = styled.div`
  position: relative;
`;

export const BingoListWrapper = styled.div`
  width: 790px;
  min-height: 790px;
  margin: 0% auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    width: 690px;
    min-height: 690px;
    margin: 18% auto;
  }
  @media screen and (max-width: 640px) {
    width: 590px;
    min-height: 590px;
    margin: 18% auto;
  }
  @media screen and (max-width: 600px) {
    width: 540px;
    min-height: 540px;
    margin: 30% auto;
  }
  @media screen and (max-width: 540px) {
    width: 490px;
    min-height: 490px;
    margin: 30% auto;
  }
  @media screen and (max-width: 414px) {
    width: 390px;
    min-height: 390px;
    margin: 40% auto;
  }
  @media screen and (max-width: 375px) {
    width: 340px;
    min-height: 340px;
    margin: 50% auto;
  }
  @media screen and (max-width: 320px) {
    width: 290px;
    min-height: 290px;
    margin: 40% auto;
  }
  .marked {
    background: linear-gradient(145deg, #f6cfa6, #fff);
    border-radius: 50%;
    p {
      color: black;
      text-decoration: line-through;
    }
  }
`;
  
export const Bing = styled.div`
  p {
    text-align: center;
    font-size: 3rem;
  }
  h2 {
    text-align: center;
    font-size: 4rem;
    span {
      animation: text-flicker-in-glow 4s linear both;
    }
  }
  @keyframes text-flicker-in-glow {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      text-shadow: none;
    }
    10.1% {
      opacity: 1;
      text-shadow: none;
    }
    10.2% {
      opacity: 0;
      text-shadow: none;
    }
    20% {
      opacity: 0;
      text-shadow: none;
    }
    20.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }
    20.6% {
      opacity: 0;
      text-shadow: none;
    }
    30% {
      opacity: 0;
      text-shadow: none;
    }
    30.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.5% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.6% {
      opacity: 0;
      text-shadow: none;
    }
    45% {
      opacity: 0;
      text-shadow: none;
    }
    45.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55.1% {
      opacity: 0;
      text-shadow: none;
    }
    57% {
      opacity: 0;
      text-shadow: none;
    }
    57.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60.1% {
      opacity: 0;
      text-shadow: none;
    }
    65% {
      opacity: 0;
      text-shadow: none;
    }
    65.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75.1% {
      opacity: 0;
      text-shadow: none;
    }
    77% {
      opacity: 0;
      text-shadow: none;
    }
    77.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85.1% {
      opacity: 0;
      text-shadow: none;
    }
    86% {
      opacity: 0;
      text-shadow: none;
    }
    86.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
  }
`;
