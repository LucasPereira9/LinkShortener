import React from 'react';
import {
  TextInput,
  Container,
  ErrorView,
  ErrorText,
  Content,
  IconView,
} from './styles';
import IInput from './Input.Structure';
import theme from '../../Global/Styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Input = ({
  enable,
  placeHolderText,
  value,
  setValue,
  error,
  icon,
  iconPressed,
}: IInput) => {
  const myIcon = <Icon name="exclamation" size={18} color="#900" />;
  return (
    <Container>
      <Content>
        <TextInput
          editable={enable}
          style={{
            color: theme.colors.black,
            borderWidth: 1,
            borderColor: error ? theme.colors.error : theme.colors.gray,
          }}
          placeholder={placeHolderText}
          value={value}
          onChangeText={(string: string) => setValue(string)}
          placeholderTextColor="#a09f9fd6"
          returnKeyType={'next'}
          keyboardType="text"
          autoCapitalize="none"
        />
        {icon && (
          <IconView onPress={iconPressed}>
            <Icon color={theme.colors.primary} name={icon} size={30} />
          </IconView>
        )}
      </Content>

      {error && (
        <ErrorView>
          <ErrorText> {myIcon} Link Inválido</ErrorText>
        </ErrorView>
      )}
    </Container>
  );
};
export default Input;
