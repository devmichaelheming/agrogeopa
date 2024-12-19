import LogoIMG from "~/assets/images/logo3.png";
import T50 from "~/assets/images/T50.png";
import { motion } from "motion/react";
import Image from "next/image";
import React, { FC, ReactElement } from "react";

import S from "./styles";

const Banner: FC = (): ReactElement => {
  return (
    <S.Banner id="home">
      <S.SectionBanner>
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="descriptionAndLogo"
        >
          <Image
            src={LogoIMG}
            alt="logo"
            width={440}
            height={190}
            quality={100}
            loading="lazy"
            className="img-logo"
            unoptimized
          />

          <S.SectionTitle>
            <S.Title>
              <span>Aumente a eficiência na pulverização </span>
              de suas lavouras com os drones pulverizadores.
            </S.Title>
            <S.SubTitle>
              <span>
                Maximize sua produção com a AGRASPRO, e vença todos os desafios
                do campo.
              </span>
              <span>
                Adquira já o seu com a melhor forma de pagamento e o melhor
                suporte do Mato Grosso.
              </span>
            </S.SubTitle>

            <S.ButtonAction>ADQUIRA AGORA SEU DRONE</S.ButtonAction>
          </S.SectionTitle>
        </motion.div>

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

        <S.SectionPerson>
          <S.BannerPerson />
        </S.SectionPerson>
      </S.SectionBanner>
    </S.Banner>
  );
};

export default Banner;
