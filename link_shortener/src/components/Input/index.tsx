import React from 'react';
import {TextInput, Container, ErrorText} from './styles';
import IInput from './Input.Structure';
import theme from '../../Global/Styles/theme';

export const Input = ({
  enable,
  placeHolderText,
  value,
  setValue,
  error,
}: IInput) => {
  return (
    <Container>
      <TextInput
        editable={enable}
        style={{
          borderWidth: 1,
          borderColor: error ? theme.colors.error : '#000',
        }}
        placeholder={placeHolderText}
        value={value}
        onChangeText={(string: string) => setValue(string)}
        placeholderTextColor="#464343"
        returnKeyType={'next'}
        keyboardType="text"
        autoCapitalize="none"
      />
      {error ? <ErrorText>Link Inválido</ErrorText> : null}
    </Container>
  );
};
export default Input;
