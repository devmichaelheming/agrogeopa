import {
  ColheitaIMG,
  DetectorIMG,
  DroneIMG,
  PenaIMG,
  SinalIMG,
  SprinkleIMG,
} from "~/assets/icons";
import T25IMG from "~/assets/images/T25.png";
import T50IMG from "~/assets/images/T50.png";
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