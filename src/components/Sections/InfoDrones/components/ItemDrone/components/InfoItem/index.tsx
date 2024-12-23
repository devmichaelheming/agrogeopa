import Image from "next/image";
import React, { FC, ReactElement } from "react";

import S from "./styles";
import { InfoItemProps } from "./types";

const InfoItem: FC<InfoItemProps> = ({ icon, title }): ReactElement => {
  return (
    <S.Container>
      {typeof icon === "string" ? (
        <S.TitleIcon>{icon}</S.TitleIcon>
      ) : (
        <Image
          src={icon}
          alt="logo"
          height={64}
          width={64}
          quality={100}
          loading="eager"
          className="img-item"
          unoptimized
        />
      )}
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default InfoItem;
