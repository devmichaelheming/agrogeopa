import BannerIMG from "~/assets/images/banner-full.png";
import BannerMobileIMG from "~/assets/images/banner-mobile.png";
import T50 from "~/assets/images/T50.png";
import Image from "next/image";
import React, { FC, ReactElement } from "react";

import S from "./styles";

const Banner: FC = (): ReactElement => {
  return (
    <S.Banner id="home">
      <Image
        src={BannerIMG}
        alt="logo"
        quality={100}
        loading="lazy"
        className="img-banner"
        unoptimized
        priority
      />

      <Image
        src={BannerMobileIMG}
        alt="logo"
        quality={100}
        loading="lazy"
        className="img-banner-mobile"
        priority
        unoptimized
      />

      <S.SectionDrone>
        <Image
          src={T50}
          alt="logo"
          quality={100}
          loading="lazy"
          className="img-t50"
          priority
          unoptimized
        />
      </S.SectionDrone>

      <S.ButtonWrapper>
        <S.ButtonAction>ADQUIRA AGORA SEU DRONE</S.ButtonAction>
      </S.ButtonWrapper>
    </S.Banner>
  );
};

export default Banner;
