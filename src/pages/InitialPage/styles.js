import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #151515;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #F2F2F2;
  padding: 20px;
`;

export const GoToMaxDoctor = styled(RectButton)`
  background: #f2f2f2;
  width: 80%;
  border-radius: 6px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #151515;
`;