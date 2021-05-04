
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles'

import {
  Text, View,
} from 'react-native';

const InitialPage = () => {
  const navigation = useNavigation()

  return (
    <S.Container>
        <S.Title>
            Avaliação de Filippo Ippolito
        </S.Title>
        <S.GoToMaxDoctor onPress={() => navigation.navigate('MaxDoctor')}>
          <Text>Acessar MaxDoctor</Text>
        </S.GoToMaxDoctor>
    </S.Container>
  );
};

export default InitialPage;
