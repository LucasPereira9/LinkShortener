import React, {useState} from 'react';
import {StatusBar, ToastAndroid} from 'react-native';
import theme from '../../Global/Styles/theme';
import {
  Container,
  Content,
  Title,
  InputsContainer,
  ButtonContainer,
  ConvText,
  ClipboardContainer,
  FormatedLink,
} from './styles';
import Input from '../../components/Input';
import Clipboard from '@react-native-community/clipboard';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HomePage = () => {
  const [link, setLink] = useState<string>('');
  const [newLink, setNewLink] = useState<string>('mdkasmdisamd/asdknsa');

  const showToast = () => {
    ToastAndroid.show('Link copiado com sucesso!', ToastAndroid.SHORT);
  };
  const copyToClipboard = () => {
    Clipboard.setString(newLink);
    showToast();
  };
  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.primary} />
      <Content>
        <Title>Link Converter</Title>
        <InputsContainer>
          <Input
            enable={true}
            placeHolderText={'insira o link'}
            value={link}
            setValue={setLink}
            error={true}
          />
          <Input enable={false} />
        </InputsContainer>
        <ButtonContainer>
          <ConvText>Converter</ConvText>
        </ButtonContainer>
        <ClipboardContainer onPress={() => copyToClipboard()}>
          <FormatedLink>{newLink}</FormatedLink>
          <Icon name="copy" size={22} />
        </ClipboardContainer>
      </Content>
    </Container>
  );
};

export default HomePage;
