import BannerIMG from "~/assets/images/banner-full4.png";
import BannerMobileIMG from "~/assets/images/banner-mobile.png";
import BannerTabletIMG from "~/assets/images/banner-tablet.png";
import T50 from "~/assets/images/T50.png";
import { messageWhatsapp } from "~/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

import S from "./styles";

const Banner: FC = (): ReactElement => {
  return (
    <S.Banner id="home">
      <Image
        src={BannerIMG}
        alt="logo"
        quality={100}
        loading="eager"
        className="img-banner"
        unoptimized
      />

      <Image
        src={BannerTabletIMG}
        alt="logo"
        quality={100}
        loading="eager"
        className="img-banner-tablet"
        unoptimized
      />

      <Image
        src={BannerMobileIMG}
        alt="logo"
        quality={100}
        loading="eager"
        className="img-banner-mobile"
        unoptimized
      />

      <S.SectionDrone>
        <Image
          src={T50}
          alt="logo"
          quality={100}
          loading="eager"
          className="img-t50"
          unoptimized
        />
      </S.SectionDrone>

      <S.ButtonWrapper>
        <Link passHref href={messageWhatsapp} target="_blank">
          <S.ButtonAction>ADQUIRA AGORA SEU DRONE</S.ButtonAction>
        </Link>
      </S.ButtonWrapper>
    </S.Banner>
  );
};

export default Banner;
