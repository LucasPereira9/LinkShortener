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
      {error ? (
        <ErrorView>
          <ErrorText> {myIcon} Link Inválido</ErrorText>
        </ErrorView>
      ) : null}
    </Container>
  );
};
export default Input;
