import BannerIMG from "~/assets/images/banner-full.png";
import BannerMobileIMG from "~/assets/images/banner-mobile2.png";
import BannerTabletIMG from "~/assets/images/banner-tablet2.png";
import T50NoBackgroundIMG from "~/assets/images/T50-2.png";
import { messageWhatsapp } from "~/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

import S from "./styles";
import { BannerProps } from "./types";

const Banner: FC<BannerProps> = ({ isLoaded, setIsLoaded }): ReactElement => {
  return (
    <S.Banner id="home">
      {!isLoaded && (
        <S.LoadingSpinner>
          <div className="spinner"></div>
        </S.LoadingSpinner>
      )}

      <Image
        src={BannerIMG}
        alt="banner-full"
        quality={100}
        loading="eager"
        className="img-banner"
        onLoadingComplete={() => setIsLoaded(true)}
        priority
      />
      <Image
        src={BannerTabletIMG}
        alt="banner-tablet"
        quality={100}
        loading="eager"
        className="img-banner-tablet"
        priority
      />
      <Image
        src={BannerMobileIMG}
        alt="banner-mobile"
        quality={100}
        loading="eager"
        className="img-banner-mobile"
        priority
      />
      <S.SectionDrone>
        <Image
          src={T50NoBackgroundIMG}
          alt="drone"
          quality={100}
          loading="eager"
          className="img-t50"
        />
      </S.SectionDrone>
      <S.ButtonWrapper aria-label="Botão whatsapp">
        <Link passHref href={messageWhatsapp} target="_blank">
          <S.ButtonAction>ADQUIRA AGORA SEU DRONE</S.ButtonAction>
        </Link>
      </S.ButtonWrapper>
    </S.Banner>
  );
};

export default Banner;
