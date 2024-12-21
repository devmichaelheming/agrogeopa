import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  min-height: 230px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  row-gap: 20px;

  @media (max-width: 1024px) {
    width: 240px;
    min-height: 180px;
  }

  @media (max-width: 576px) {
    min-height: 110px;
    width: 100%;
  }

  .img-item {
    background-color: rgb(33, 165, 99);
    padding: 20px;
    width: 80px;
    height: 80px;
    border-radius: 8px;

    @media (max-width: 1024px) {
      width: 70px;
      height: 70px;
      padding: 16px;
    }

    @media (max-width: 576px) {
      width: 60px;
      height: 60px;
      padding: 16px;
    }
  }
`;

export const Title = styled.div`
  color: rgb(53, 53, 53);
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const SectionIcone = styled.div`
  background: rgb(0, 133, 66);
  background: linear-gradient(
    34deg,
    rgba(0, 133, 66, 1) 26%,
    rgba(3, 73, 38, 1) 80%
  );
  width: 82px;
  height: 82px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -24px;
  left: 24px;

  svg {
    font-size: 42px;
  }
`;

export const TitleIcon = styled.div`
  color: rgb(53, 53, 53);
  background-color: rgb(33, 165, 99);
  font-weight: 700;
  font-size: 20px;
  white-space: nowrap;
  padding: 20px;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
    padding: 16px;
  }

  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
    font-size: 18px;
    padding: 16px;
  }
`;

export default {
  Container,
  Title,
  SectionIcone,
  TitleIcon,
};
