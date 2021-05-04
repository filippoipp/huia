import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    padding: 60px;
`;

export const InputSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputLabel = styled.Text`
    font-size: 16px;
    width: 20%;
`;

export const Input = styled.TextInput`
    width: 80%;
    height: 50px;
    font-size: 16px;
    color: #151515;
`;

export const SelectSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SelectLabel = styled.Text`
    font-size: 16px;
    width: 20%;
`;

export const Select = styled.Picker`
    width: 80%;
    height: 50px;
    font-size: 16px;
`

export const ContinueButton = styled(RectButton)`
  border-radius: 6px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: #8a6fad;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
    color: #fff;
`;

export const Error = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  text-align: left;
  color: #D80108;
  margin-bottom: 16px;
`;