import {
  ColheitaIMG,
  DetectorIMG,
  DroneIMG,
  PenaIMG,
  SinalIMG,
  SprinkleIMG,
} from "~/assets/icons";
import T100NoBackgroundIMG from "~/assets/images/T100-2.png";
import T25NoBackgroundIMG from "~/assets/images/T25-2.png";
import T25PNoBackgroundIMG from "~/assets/images/T25P-2.png";
import T50NoBackgroundIMG from "~/assets/images/T50-2.png";
import T70PNoBackgroundIMG from "~/assets/images/T70P-2.png";
import React, { FC, ReactElement } from "react";

import ItemDrone from "./components/ItemDrone";
import S from "./styles";
import { DroneItemProps } from "./types";

const dataMockDrones: Array<DroneItemProps> = [
  {
    title: "DJI AGRAS T25",
    src: T25NoBackgroundIMG,
    subtitle: "O DJI AGRAS T25 pode ser facilmente manuseado por uma pessoa.",
    description:
      "Pode transportar uma carga útil de pulverização até 20 kg ou uma carga útil de dispersão até 25 kg. O DJI AGRAS T25 está equipado com radares de matriz de fase dianteiro e traseiro, um sistema de visão binocular e uma câmera com estabilizador FPV de alta resolução. O DJI AGRAS T25 é compatível com várias missões, desde levantamento aéreo até pulverização e dispersão, e se destaca em uma variedade de terrenos.",
    information: [
      {
        title: "Leve e Ágil",
        icon: PenaIMG,
      },
      {
        title: "Pulverização ou dispersão",
        icon: DroneIMG,
      },
      {
        title: "Estabilidade do sinal",
        icon: SinalIMG,
      },
      {
        title: "Adaptabilidade a todos os cenários",
        icon: ColheitaIMG,
      },
      {
        title: "Detecção de obstáculos multidirecional",
        icon: DetectorIMG,
      },
      {
        title: "Kit com quatro sprinklers (opcional)",
        icon: SprinkleIMG,
      },
    ],
  },
  {
    title: "DJI AGRAS T50",
    src: T50NoBackgroundIMG,
    subtitle:
      "Redefine os padrões para drones agrícolas compactos. Leve e ágil.",
    description:
      "Ele herda um poderoso sistema de propulsão coaxial de rotor duplo e uma estrutura resistente ao torque de tipo dividido para estabilidade de nível seguinte ao transportar pulverização de 40 kg ou espalhamento de cargas úteis de 50 kg. O DJI AGRAS T50 usa um sistema de pulverização de atomização duplo, radares de matriz de fase dianteiro e traseiro e um sistema de visão binocular. O DJI AGRAS T50 se destaca em vários cenários, desde pesquisas até pulverização e dispersão, garantindo operações estáveis e desempenho estável.Redefine os padrões para drones agrícolas compactos. Leve e ágil.",
    information: [
      {
        title: "Carga útil pesada Pulverização de 40 kg Dispersão de 50 kg",
        icon: "50 KG",
      },
      {
        title: "Alta vazão Pulverização 16 l/min Dispersão de 108 kg/min",
        icon: DroneIMG,
      },
      {
        title:
          "Estabilidade do sinal Funcionamento offline transmissão 2 km O3 Relé DJI opcional",
        icon: SinalIMG,
      },
      {
        title: "Adaptabilidade a todos os cenários",
        icon: ColheitaIMG,
      },
      {
        title: "Detecção de obstáculos multidirecional",
        icon: DetectorIMG,
      },
      {
        title: "Kit com quatro sprinklers (opcional)",
        icon: SprinkleIMG,
      },
    ],
  },
  {
    title: "DJI AGRAS T100",
    src: T100NoBackgroundIMG,
    subtitle:
      "Alta performance com capacidade máxima. Potência e precisão em escala.",
    description:
      "O DJI AGRAS T100 eleva o padrão da pulverização agrícola de larga escala com sua impressionante capacidade de 100 litros para pulverização e 100 kg para espalhamento. Equipado com aspersores de atomização dupla, sistema Penta-Vision, LiDAR e radares de ondas milimétricas, oferece pulverização precisa, detecção inteligente de obstáculos e acompanhamento de terreno sem necessidade de mapeamento aéreo. Seu carregamento ultrarrápido e sistema de pesagem em tempo real garantem maior eficiência em campo. Ideal para grandes operações que exigem robustez e tecnologia de ponta.",
    information: [
      {
        title:
          "Carga útil de 100 L para pulverização e 100 kg para espalhamento",
        icon: "100 KG",
      },
      {
        title: "Alta vazão de até 40 L/min com 4 aspersores opcionais",
        icon: DroneIMG,
      },
      {
        title:
          "Aspersores de atomização dupla (50–500 μm) com opção de névoa resfriada",
        icon: SprinkleIMG,
      },
      {
        title:
          "Detecção inteligente com LiDAR, sistema Penta-Vision e radares de ondas milimétricas",
        icon: DetectorIMG,
      },
      {
        title: "Memória automática de obstáculos e exibição em RA",
        icon: SinalIMG,
      },
      {
        title:
          "Carregamento ultrarrápido com bateria DB2160 e gerador D14000iE",
        icon: ColheitaIMG,
      },
    ],
  },
  {
    title: "DJI AGRAS T70P",
    src: T70PNoBackgroundIMG,
    subtitle:
      "Versatilidade e precisão para pulverização e espalhamento de média a grande escala.",
    description:
      "O DJI AGRAS T70P combina alta capacidade operacional com tecnologia de ponta para pulverização e espalhamento agrícolas. Com capacidade de 70 litros para pulverização e 70 kg para espalhamento, o T70P é ideal para produções de média e grande escala. Possui sistema Tri-Vision, radar de ondas milimétricas, detecção inteligente de obstáculos com exibição em realidade aumentada e pesagem em tempo real. Seu desempenho eficiente é complementado por um sistema de carregamento ultrarrápido e opções de baterias inteligentes de alta autonomia.",
    information: [
      {
        title: "Carga útil de 70 L para pulverização e 70 kg para espalhamento",
        icon: "70 KG",
      },
      {
        title: "Alta vazão de até 40 L/min com 4 aspersores opcionais",
        icon: DroneIMG,
      },
      {
        title: "Aspersores centrífugos e de névoa resfriada (50–500 μm)",
        icon: SprinkleIMG,
      },
      {
        title: "Sistema Tri-Vision e radar de ondas milimétricas",
        icon: DetectorIMG,
      },
      {
        title:
          "Memória de obstáculos com exibição em RA e acompanhamento de terreno",
        icon: SinalIMG,
      },
      {
        title:
          "Carregamento ultrarrápido com baterias DB1580/DB2160 e gerador D14000iE",
        icon: ColheitaIMG,
      },
    ],
  },
  {
    title: "DJI AGRAS T25P",
    src: T25PNoBackgroundIMG,
    subtitle:
      "Compacto, ágil e inteligente. Ideal para operações de menor escala com alta eficiência.",
    description:
      "O DJI AGRAS T25P é a solução ideal para pulverizações e espalhamentos em áreas menores, sem abrir mão da tecnologia avançada da série AGRAS. Com capacidade de 20 L para pulverização e 25 kg para espalhamento, oferece precisão com aspersores de atomização dupla, desvio inteligente de obstáculos e acompanhamento de terreno sem mapeamento aéreo. Seu sistema Tri-Vision, radar de ondas milimétricas e carregamento ultrarrápido proporcionam produtividade, segurança e autonomia em campo.",
    information: [
      {
        title: "Carga útil de 20 L para pulverização e 25 kg para espalhamento",
        icon: "25 KG",
      },
      {
        title: "Taxa de fluxo de até 24 L/min com 4 aspersores opcionais",
        icon: DroneIMG,
      },
      {
        title: "Aspersores centrífugos de atomização dupla (50–500 μm)",
        icon: SprinkleIMG,
      },
      {
        title: "Sistema Tri-Vision e radares de ondas milimétricas",
        icon: DetectorIMG,
      },
      {
        title: "Desvio inteligente de obstáculos e acompanhamento de terreno",
        icon: SinalIMG,
      },
      {
        title: "Carregamento ultrarrápido com bateria DB800 e gerador D6000i",
        icon: ColheitaIMG,
      },
    ],
  },
];

const InfoDrones: FC = (): ReactElement => {
  return (
    <S.Container>
      {dataMockDrones.map((item, index) => (
        <ItemDrone key={index} data={item} />
      ))}
    </S.Container>
  );
};

export default InfoDrones;
