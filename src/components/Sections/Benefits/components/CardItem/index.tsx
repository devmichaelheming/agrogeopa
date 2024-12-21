import React, { FC, ReactElement } from "react";

import S from "./styles";
import { CardItemProps } from "./types";

const CardItem: FC<CardItemProps> = ({
  description,
  icon,
  title,
}): ReactElement => {
  return (
    <S.Container>
      <S.SectionIcone>{icon}</S.SectionIcone>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

export default CardItem;
