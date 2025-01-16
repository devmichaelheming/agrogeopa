import { motion, useInView } from "motion/react";
import Image from "next/image";
import React, { FC, ReactElement, useRef } from "react";

import InfoItem from "./components/InfoItem";
import S from "./styles";
import { ItemDroneProps } from "./types";

const ItemDrone: FC<ItemDroneProps> = ({ data }): ReactElement => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <S.Container>
      <S.SectionDrone>
        <S.TitleSectionDrone>{data.title}</S.TitleSectionDrone>

        <Image
          src={data.src}
          alt="logo"
          quality={100}
          loading="eager"
          className="img-logo"
        />

        <S.SubTitleSectionDrone>{data.subtitle}</S.SubTitleSectionDrone>
        <S.DescriptionSectionDrone>
          {data.description}
        </S.DescriptionSectionDrone>
      </S.SectionDrone>

      <S.SectionInformation>
        <S.SectionInfoItens ref={ref}>
          {data.information.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="motion-div"
            >
              <InfoItem icon={item.icon} title={item.title} />
            </motion.div>
          ))}
        </S.SectionInfoItens>
      </S.SectionInformation>
    </S.Container>
  );
};

export default ItemDrone;
