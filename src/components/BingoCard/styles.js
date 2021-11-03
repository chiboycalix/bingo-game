import styled from 'styled-components';


  
export const BingoCard = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 150px;
  /* border-radius: 50%; */
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 4px 0 rgba(255, 255, 255, 0.25);
  background: linear-gradient(145deg, #f6cfa6, #000000);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s;
  }

  p {
    font-size: 1rem;
    color: white;
    @media screen and (max-width: 414px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 0.7rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 0.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 640px) {
    width: 110px;
    height: 110px;
  }
  @media screen and (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 540px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (max-width: 414px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (max-width: 375px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 320px) {
    width: 50px;
    height: 50px;
  }
`;
