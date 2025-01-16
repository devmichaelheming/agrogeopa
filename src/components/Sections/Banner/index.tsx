import BannerIMG from "~/assets/images/banner-full.png";
import BannerMobileIMG from "~/assets/images/banner-mobile.png";
import BannerTabletIMG from "~/assets/images/banner-tablet.png";
import T50 from "~/assets/images/T50.png";
import { messageWhatsapp } from "~/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement, useEffect, useState } from "react";
import T50NoBackgroundIMG from "~/assets/images/T50-2.png";

import S from "./styles";

const Banner: FC = (): ReactElement => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = [
      BannerIMG.src,
      BannerMobileIMG.src,
      BannerTabletIMG.src,
      T50NoBackgroundIMG.src,
    ];

    // Função para pré-carregar as imagens
    const preloadImages = async () => {
      const promises = images.map(
        (src) =>
          new Promise<void>((resolve, reject) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => reject(new Error(`Erro ao carregar ${src}`));
          })
      );

      try {
        await Promise.all(promises);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    preloadImages();
  }, []);

  return (
    <S.Banner id="home">
      {isLoaded ? (
        <>
          <Image
            src={BannerIMG}
            alt="banner-full"
            quality={100}
            loading="lazy"
            className="img-banner"
            priority
            unoptimized
          />
          <Image
            src={BannerTabletIMG}
            alt="banner-tablet"
            quality={100}
            loading="lazy"
            className="img-banner-tablet"
            priority
            unoptimized
          />
          <Image
            src={BannerMobileIMG}
            alt="banner-mobile"
            quality={100}
            loading="lazy"
            className="img-banner-mobile"
            priority
            unoptimized
          />
          <S.SectionDrone>
            <Image
              src={T50NoBackgroundIMG}
              alt="drone"
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
        </>
      ) : (
        <S.LoadingSpinner>
          <div className="spinner"></div>
        </S.LoadingSpinner>
      )}
    </S.Banner>
  );
};

export default Banner;
