import React from "react";
import { ScrollView } from "react-native";

import * as S from "./styles";

import Header from "../../components/Header";
import Form from "../../components/Form";
import Icons from "../../components/Icons";

const MaxDoctor = () => {
  return (
    <S.Container>
      <S.Background source={require("../../assets/Background.png")}>
        <ScrollView style={{ flex: 1 }}>
          <Header />
          <Form />
          <Icons />
        </ScrollView>
      </S.Background>
    </S.Container>
  );
};

export default MaxDoctor;
