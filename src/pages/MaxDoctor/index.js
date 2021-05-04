import React from "react";
import { ScrollView } from 'react-native';

import * as S from "./styles";

import Header from "../../components/Header";
import Form from "../../components/Form";
import Icons from "../../components/Icons";

const MaxDoctor = () => {
  return (
      <ScrollView>
        <S.Container>
          <S.Background source={require("../../assets/Background.png")}>
            <Header />
            <Form />
            <Icons />
          </S.Background>
        </S.Container>
      </ScrollView>
  );
};

export default MaxDoctor;
