
import React from 'react';

import * as S from './styles'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Icons from '../../components/Icons'

const MaxDoctor = () => {
  return (
    <S.Container>
      <S.Background source={require("../../assets/Background.png")}>
        <Header />
        <Form />
        <Icons />
      </S.Background>
    </S.Container>
  );
};

export default MaxDoctor;
