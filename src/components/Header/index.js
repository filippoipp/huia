import React from "react";

import * as S from "./styles";

import { Image, Text } from "react-native";

const Header = () => {
  return (
    <S.Container>
      <S.Logo source={require("../../assets/logo_maxi_doctor.png")}/>
      <S.Title>A PLATAFORMA DE COMPRA DIRETA DO SEU ANESTÉSICO TÓPICO</S.Title>
    </S.Container>
  );
};

export default Header;
