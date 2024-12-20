import BannerIMG from "~/assets/images/banner-full3.png";
import T50 from "~/assets/images/T50.png";
import Image from "next/image";
import React, { FC, ReactElement } from "react";

import S from "./styles";

// AJUSTAR O LEFT DO DRONE NA RESOLUÇÃO DE NOTEBOOK
// CRIAR IMAGEM PARA A VERSÃO TABLE / MOBILE PARA BAIXO(A PARTIR DE 800PX DA RESOLUÇÃO)
// ADICIONAR COMPORTAMENTO PARA DESLIZAR O CAROUSEL, USUARIO TER INTERAÇÃO

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
      />

      <S.SectionDrone>
        <Image
          src={T50}
          alt="logo"
          quality={100}
          loading="lazy"
          className="img-t50"
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
