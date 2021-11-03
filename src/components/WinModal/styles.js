/** @format */

import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #f6cfa6, #fff);
  margin: 50% auto;
  padding: 20px;
  width: 40%;
  animation: slide-in-elliptic-top-fwd 5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @keyframes slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(500px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    30% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
    80% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 1;
    }
  }
`;
