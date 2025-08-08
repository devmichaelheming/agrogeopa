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

const slideDown = keyframes`
  from {
    transform: translateY(-100vh) translateX(-50%);
    opacity: 1;
  }
  to {
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .img-banner,
  .img-banner-tablet,
  .img-banner-mobile {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-banner-tablet {
    display: none;
  }

  .img-banner-mobile {
    display: none;
  }

  @media (max-width: 800px) {
    .img-banner {
      display: none;
    }

    .img-banner-tablet {
      display: block;
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .img-banner-tablet {
      display: none;
    }

    .img-banner-mobile {
      display: block;
      width: 100%;
    }
  }
`;

export const SectionDrone = styled.div`
  position: absolute;
  top: 20%;
  left: 45%;
  z-index: 10;

  @media (max-width: 1600px) {
    left: 42%;
  }

  @media (max-width: 1280px) {
    left: 44%;
  }

  @media (max-width: 1024px) {
    top: 20%;
    left: 42%;
  }

  @media (max-width: 800px) {
    width: 100%;
    left: 0;
    height: 50%;
    top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 430px) {
    top: 34px;
  }

  .img-t50 {
    width: 580px;
    height: 310px;
    object-fit: cover;

    @media (max-width: 1600px) {
      width: 480px;
      height: 220px;
    }

    @media (max-width: 1440px) {
      width: 420px;
      height: 200px;
    }

    @media (max-width: 1280px) {
      width: 380px;
      height: 180px;
    }

    @media (max-width: 1024px) {
      width: 340px;
      height: 140px;
    }

    @media (max-width: 800px) {
      width: 480px;
      height: 220px;
    }

    @media (max-width: 576px) {
      width: 340px;
      height: 160px;
    }

    @media (max-width: 500px) {
      width: 340px;
      height: 160px;
    }

    @media (max-width: 430px) {
      width: 280px;
      height: 130px;
    }
  }

  animation: ${floating} 5s ease-in-out infinite;

  @media (max-width: 1024px) {
    animation: ${floatingTablet} 5s ease-in-out infinite;
  }

  @media (max-width: 576px) {
    animation: ${floatingMobile} 5s ease-in-out infinite;
  }

  @media (max-width: 430px) {
    animation: ${floatingMobileSmall} 3.5s ease-in-out infinite;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 7vh;
  left: 34vh;
  transform: translateX(-50%);
  animation: ${slideDown} 1s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (max-width: 1920px) {
    left: 38vh;
  }

  @media (max-width: 1600px) {
    bottom: 4vh;
    left: 34vh;
  }

  @media (max-width: 1440px) {
    bottom: 3vh;
    left: 30vh;
  }

  @media (max-width: 1280px) {
    left: 28vh;
    bottom: 2vh;
  }

  @media (max-width: 1024px) {
    left: 22vh;
    bottom: 2vh;
  }

  @media (max-width: 800px) {
    left: 50%;
    bottom: 20%;
  }

  @media (max-width: 576px) {
    left: 50%;
    bottom: 2%;
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

  @media (max-width: 1024px) {
    font-size: 0.7rem;
    padding: 0.8rem 3rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    width: 300px;
    padding: 12px;
  }

  @media (max-width: 576px) {
    white-space: nowrap;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }

  @media (max-width: 430px) {
    font-size: 0.8rem;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #000;
  z-index: 20;
  position: absolute;

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #ccc;
    border-top-color: #00d084;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default {
  Banner,
  SectionDrone,
  ButtonWrapper,
  ButtonAction,
  LoadingSpinner,
};
