import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WrapperFooter = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  column-gap: 38px;
  padding: 80px 0;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 42px;
  }

  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

export const SectionOne = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TitleSection = styled.div`
  color: #008542;
  font-size: 28px;
  line-height: 26px;
  font-weight: 600;
  padding-bottom: 14px;

  @media (max-width: 1280px) {
    font-size: 24px;
    line-height: 22px;
  }
`;

export const TitleSectionOne = styled.div`
  color: #008542;
  font-size: 28px;
  line-height: 28px;
  font-weight: 600;
  padding-bottom: 14px;

  @media (max-width: 1280px) {
    font-size: 24px;
    line-height: 24px;
  }

  span {
    color: #fff;
  }
`;

export const DescriptionSectionOne = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;

  @media (max-width: 1280px) {
    font-size: 14px;
  }
`;

export const SectionTwo = styled.div`
  color: #fff;
  width: 30%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ItemSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;

  svg {
    font-size: 28px;

    @media (max-width: 1280px) {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ItemContent = styled.div`
  span {
    @media (max-width: 1280px) {
      font-size: 12px;
    }
  }
`;

export const TextSectionTwo = styled.div`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;

export const SectionThree = styled.div`
  color: #fff;
  width: 30%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SectionEnd = styled.div`
  height: 64px;
  width: 100%;
  background-color: rgb(1, 38, 19);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  span {
    color: #fff;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 430px) {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export default {
  Container,
  WrapperFooter,
  SectionOne,
  TitleSection,
  DescriptionSectionOne,
  SectionTwo,
  SectionContent,
  ItemSection,
  ItemContent,
  TextSectionTwo,
  SectionThree,
  SectionEnd,
  TitleSectionOne,
};
