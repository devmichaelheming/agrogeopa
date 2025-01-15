import {
  ColheitaIMG,
  DetectorIMG,
  DroneIMG,
  PenaIMG,
  SinalIMG,
  SprinkleIMG,
} from "~/assets/icons";
import { T25IMG, T50IMG } from "~/assets/images";
import React, { FC, ReactElement } from "react";

import ItemDrone from "./components/ItemDrone";
import S from "./styles";
import { DroneItemProps } from "./types";

const dataMockDrones: Array<DroneItemProps> = [
  {
    title: "DJI AGRAS T25",
    src: T25IMG,
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
    src: T50IMG,
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
