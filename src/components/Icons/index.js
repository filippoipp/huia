import React from "react";

import * as S from "./styles";

const Icons = () => {
  return (
    <S.Container>
      <S.Section>
        <S.Icon>
          <S.Image source={require("../../assets/ICONE_FACILIDADE.png")} style={{ resizeMode: 'contain'}}>
          </S.Image>
          <S.Text>FACILIDADE DE COMPRA</S.Text>
        </S.Icon>
        <S.Icon>
          <S.Image source={require("../../assets/Rectangle_1_copy_2.png")} style={{ resizeMode: 'contain'}}>
          </S.Image>
          <S.Text>QUANTIDADE NÃO LIMITADA</S.Text>
        </S.Icon>
      </S.Section>

      <S.Section>
        <S.Icon2>
          <S.Image source={require("../../assets/ICONE_FRETE_GRATIS.png")} style={{ resizeMode: 'contain'}}>
          </S.Image>
          <S.Text>FRETE GRÁTIS</S.Text>
        </S.Icon2>
        <S.Icon2>
          <S.Image source={require("../../assets/ICONE_AGILIDADE.png")} style={{ resizeMode: 'contain'}}>
          </S.Image>
          <S.Text>AGILIDADE</S.Text>
        </S.Icon2>
        <S.Icon2>
          <S.Image source={require("../../assets/ICONE_COMODIDADE.png")} style={{ resizeMode: 'contain'}}>
          </S.Image>
          <S.Text>COMODIDADE</S.Text>
        </S.Icon2>
      </S.Section>
    </S.Container>
  );
};

export default Icons;
