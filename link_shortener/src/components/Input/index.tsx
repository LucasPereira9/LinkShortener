import React from 'react';
import {TextInput, Container, ErrorView, ErrorText} from './styles';
import IInput from './Input.Structure';
import theme from '../../Global/Styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Input = ({
  enable,
  placeHolderText,
  value,
  setValue,
  error,
}: IInput) => {
  const myIcon = <Icon name="exclamation" size={18} color="#900" />;
  return (
    <Container>
      <TextInput
        editable={enable}
        style={{
          color: theme.colors.primary,
          borderWidth: 1,
          borderColor: error ? theme.colors.error : theme.colors.secundary,
        }}
        placeholder={placeHolderText}
        value={value}
        onChangeText={(string: string) => setValue(string)}
        placeholderTextColor="#a09f9fd6"
        returnKeyType={'next'}
        keyboardType="text"
        autoCapitalize="none"
      />
      {error ? (
        <ErrorView>
          <ErrorText> {myIcon} Link Inválido</ErrorText>
        </ErrorView>
      ) : null}
    </Container>
  );
};
export default Input;
