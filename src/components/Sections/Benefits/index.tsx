import {
  AimOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  LineChartOutlined,
  PercentageOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import arrowAnimationData from "~/assets/animated/down.json";
import { messageWhatsapp } from "~/lib/constants";
import { motion, useInView } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC, ReactElement, useRef } from "react";

import CardItem from "./components/CardItem";
import { CardItemProps } from "./components/CardItem/types";
import S from "./styles";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LottieComponent = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const dataItensBenefits: Array<CardItemProps> = [
  {
    icon: <AimOutlined />,
    title: "Precisão máxima nas camadas mais baixas",
    description:
      "Os drones pulverizadores garantem uma cobertura 1,9 vez maior nas camadas mais baixas (próximas ao solo) da planta.",
  },
  {
    icon: <LineChartOutlined />,
    title: "Redução do consumo de água",
    description:
      "A pulverização com drones reduz em até 90% o consumo de água.",
  },
  {
    icon: <PercentageOutlined />,
    title: "ZERO de perdas por esmagamento",
    description:
      "As perdas por esmagamento causadas pelas rodas dos tratores são cerca de 5%. Em uma lavoura de soja com produção média de 60 sc/ha, isso significa 3sc/ha de perda.",
  },
  {
    icon: <BarChartOutlined />,
    title: "Retorno sobre investimento",
    description:
      "Tecnologia que eleva a eficiência da pulverização e garante retorno de investimento.",
  },
  {
    icon: <CheckCircleOutlined />,
    title: "Agilidade em qualquer terreno",
    description:
      "Caso a sua área tenha relevos acentuados, obstáculos, árvores e etc, o drone pode pulverizar sem problemas.",
  },
  {
    icon: <SafetyOutlined />,
    title: "Segurança no trabalho",
    description:
      "Conduzir um drone pelo controle remoto é mais cômodo e seguro que utilizar um trator ao longo do campo.",
  },
];

const Benefits: FC = (): ReactElement => {
  const refButton = useRef(null);
  const isInViewButton = useInView(refButton);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.Container>
      <LottieComponent
        options={defaultOptions}
        height={60}
        width={60}
        style={{ animationDelay: "1s" }}
      />

      <S.Title>CONHEÇA NOSSOS BENEFÍCIOS</S.Title>

      <S.SectionCards ref={ref}>
        {dataItensBenefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="motion-div"
          >
            <CardItem
              description={item.description}
              icon={item.icon}
              title={item.title}
            />
          </motion.div>
        ))}
      </S.SectionCards>

      <Link passHref href={messageWhatsapp} target="_blank" ref={refButton}>
        <S.ButtonAction isInView={isInViewButton}>
          ADQUIRA AGORA SEU DRONE
        </S.ButtonAction>
      </Link>
    </S.Container>
  );
};

export default Benefits;
