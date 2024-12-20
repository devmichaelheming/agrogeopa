import styled, { keyframes } from "styled-components";

const floating = keyframes`
  0%, 100% {
    transform: translateY(60px);
  }
  50% {
    transform: translateY(-60px);
  }
`;

const floatingTablet = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(60px);
  }
`;

const floatingMobile = keyframes`
  0%, 100% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(40px);
  }
`;

const floatingMobileSmall = keyframes`
  0%, 100% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .img-banner {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SectionDrone = styled.div`
  position: absolute;
  top: 20%;
  left: 45%;

  @media (max-width: 1440px) {
    left: 48%;
  }

  @media (max-width: 1280px) {
    left: 44%;
  }

  @media (max-width: 1024px) {
    top: 20%;
    left: 42%;
  }

  @media (max-width: 768px) {
    top: 6%;
    left: 62%;
  }

  @media (max-width: 576px) {
    width: 100%;
    left: 0;
    height: 50%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 576px) {
    height: 40%;
  }

  .img-t50 {
    width: 520px;
    height: 250px;

    @media (max-width: 1440px) {
      width: 360px;
      height: 150px;
    }

    @media (max-width: 1024px) {
      width: 340px;
      height: 140px;
    }

    @media (max-width: 768px) {
      width: 260px;
      height: 100px;
    }

    @media (max-width: 576px) {
      width: 400px;
      height: 200px;
    }

    @media (max-width: 500px) {
      width: 360px;
      height: 150px;
    }

    @media (max-width: 430px) {
      width: 340px;
      height: 140px;
    }
  }

  animation: ${floating} 5s ease-in-out infinite;

  @media (max-width: 1024px) {
    animation: ${floatingTablet} 5s ease-in-out infinite;
  }

  @media (max-width: 576px) {
    animation: ${floatingMobile} 4s ease-in-out infinite;
  }

  @media (max-width: 430px) {
    animation: ${floatingMobileSmall} 3.5s ease-in-out infinite;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 7vh;
  left: 21vh;
  transform: translateX(-50%);

  @media (max-width: 1920px) {
    left: 28vh;
  }

  @media (max-width: 1600px) {
    bottom: 5vh;
  }

  @media (max-width: 1440px) {
    bottom: 4vh;
    left: 24vh;
  }

  @media (max-width: 1280px) {
    left: 23vh;
    bottom: 3vh;
  }

  @media (max-width: 1024px) {
    left: 21vh;
    bottom: 2vh;
  }
`;

export const ButtonAction = styled.button`
  border: none;
  background-color: rgb(2, 100, 51);
  padding: 1rem 3rem;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.3s ease;

  &:hover {
    transform: translateX(20px);
    background-color: rgb(4, 164, 84);
    transition: 0.3s ease;
  }

  @media (max-width: 1440px) {
    font-size: 0.8rem;
    padding: 1rem 3rem;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    /* height: 52px;
    width: 94%; */
    margin-top: 8px;
  }
`;

// Botão Estilizado
// export const ButtonAction = styled.button`
//   border: none;
//   background-color: rgb(2, 100, 51);
//   color: #fff;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 0.3s ease;

//   font-size: 1rem; /* Tamanho do texto proporcional */
//   padding: 1rem 3rem; /* Padding proporcional */

//   &:hover {
//     transform: translateY(-5px);
//     background-color: rgb(4, 164, 84);
//   }

//   @media (max-width: 576px) {
//     font-size: calc(0.9rem + 0.3vw);
//   }
// `;

export default {
  Banner,
  SectionDrone,
  ButtonWrapper,
  ButtonAction,
};
