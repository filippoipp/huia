import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import { View, Alert } from "react-native";

import * as S from "./styles";

const Form = () => {
  const [selectedUf, setSelectedUf] = useState();
  const [estados, setEstados] = useState([]);
  let ufs = [];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    Alert.alert(
      "Sucesso",
      `CRM: ${JSON.stringify(data.crm)}, Estado: ${JSON.stringify(data.uf)}
      `
    );
  async function handleUf() {
    try {
      const res = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      res.data.map((uf) => {
        ufs.push(uf.nome);
      });
      setEstados(ufs);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    handleUf();
  }, []);

  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.InputSection>
            <S.InputLabel>CRM</S.InputLabel>
            <S.Input
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="000000"
              placeholderTextColor={"black"}
            />
          </S.InputSection>
        )}
        name="crm"
        rules={{ required: true, minLength: 5 }}
        defaultValue=""
      />

      {errors.crm && errors.crm.type === "required" && (
        <S.Error>Campo obrigatório.</S.Error>
      )}
      {errors.crm && errors.crm.type === "minLength" && (
        <S.Error>Mínimo 5 caracteres.</S.Error>
      )}

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.SelectSection>
            <S.SelectLabel>UF</S.SelectLabel>
            <S.Select
              selectedValue={value}
              onBlur={onBlur}
              onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            >
              <S.Select.Item label={"Selecione"} value={""} />
              {estados.map((uf, index) => {
                return <S.Select.Item key={index} label={uf} value={uf} />;
              })}
            </S.Select>
          </S.SelectSection>
        )}
        name="uf"
        rules={{ required: true }}
      />

      {errors.uf && <S.Error>Campo obrigatório.</S.Error>}

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />

      <S.ContinueButton onPress={handleSubmit(onSubmit)}>
        <S.TextButton>Continuar</S.TextButton>
      </S.ContinueButton>
    </S.Container>
  );
};

export default Form;
