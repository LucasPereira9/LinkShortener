import React, {useState} from 'react';
import {StatusBar, Share, ToastAndroid, Keyboard} from 'react-native';
import theme from '../../Global/Styles/theme';
import {
  Container,
  Content,
  Title,
  InputsContainer,
  ClipboardContainer,
  FormatedLink,
  ButtonContainer,
} from './styles';
import Input from '../../components/Input';
import ModernButton from '../../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-community/clipboard';

export const HomePage = () => {
  const [link, setLink] = useState<string>('');

  const [newLink, setNewLink] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function HandleErrors() {
    setError(true);
    setNewLink('');
    setLoading(false);
  }

  const getDataUsingGet = () => {
    setLoading(true);
    setError(false);
    Keyboard.dismiss();
    fetch(`https://tinyurl.com/api-create.php?url=${link}`, {
      method: 'GET',
    })
      .then(response => response.text())
      .then(responseJson => {
        if (responseJson.includes('Error')) {
          HandleErrors();
          return;
        }
        if (link.includes('https://')) {
          setLoading(false);
          setNewLink(responseJson);
        } else {
          HandleErrors();
        }
      });
  };
  function HandleShare() {
    Share.share({
      message: 'seu link encurtado: ' + newLink,
    });
  }
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
        <Title>Conversor de Links</Title>
        <InputsContainer>
          <Input
            placeHolderText={'insira o link'}
            value={link}
            setValue={setLink}
            error={error}
          />
        </InputsContainer>
        <ButtonContainer>
          <ModernButton
            Loading={loading}
            Colored={true}
            Press={() => getDataUsingGet()}
            Title="Converter"
          />
          <ModernButton
            Colored={true}
            Press={() => HandleShare()}
            Title="Compartilhar"
          />
        </ButtonContainer>

        <ClipboardContainer onPress={() => copyToClipboard()}>
          <FormatedLink>{newLink}</FormatedLink>
          <Icon color={'#fff'} name="copy" size={22} />
        </ClipboardContainer>
      </Content>
    </Container>
  );
};

export default HomePage;
