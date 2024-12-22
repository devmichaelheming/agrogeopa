import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";

import S from "./styles";

const Footer: FC = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Container>
      <S.WrapperFooter>
        <S.SectionOne>
          <S.TitleSectionOne>
            Maximize sua produção com a AGRASPRO,
            <span> e vença todos os desafios do campo.</span>
          </S.TitleSectionOne>

          <S.DescriptionSectionOne>
            Adquira já o seu com a melhor forma de pagamento e o melhor suporte
            do Mato Grosso.
          </S.DescriptionSectionOne>
        </S.SectionOne>

        <S.SectionTwo>
          <S.TitleSection>Horário de funcionamento</S.TitleSection>

          <S.SectionContent>
            <S.ItemSection>
              <PhoneOutlined />
              <S.ItemContent>
                <S.TextSectionTwo>Segunda a Sexta</S.TextSectionTwo>
                <span>7:30h as 11:30h e 13:30h as 17:30h</span>
              </S.ItemContent>
            </S.ItemSection>
          </S.SectionContent>
        </S.SectionTwo>

        <S.SectionThree>
          <S.TitleSection>Entre em Contato</S.TitleSection>

          <S.SectionContent>
            <S.ItemSection>
              <EnvironmentOutlined />
              <S.ItemContent>
                <S.TextSectionTwo>Endereço</S.TextSectionTwo>

                <span>
                  R. do Cachimbo, 228 - Jardim Planalto, Novo Progresso - PA,
                  68193-000
                </span>
              </S.ItemContent>
            </S.ItemSection>

            <S.ItemSection>
              <PhoneOutlined />
              <S.ItemContent>
                <S.TextSectionTwo>Telefone</S.TextSectionTwo>

                <span>(93) 98414-4452</span>
              </S.ItemContent>
            </S.ItemSection>
          </S.SectionContent>
        </S.SectionThree>
      </S.WrapperFooter>

      <S.SectionEnd>
        <span>
          Copyright ©{currentYear} Todos Os Direitos Reservados - AGROGEO
        </span>
      </S.SectionEnd>
    </S.Container>
  );
};

export default Footer;
