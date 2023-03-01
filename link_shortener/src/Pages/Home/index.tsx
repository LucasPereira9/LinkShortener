import React, {useState} from 'react';
import {Alert, StatusBar, Text} from 'react-native';
import {StatusBar, Alert, ToastAndroid} from 'react-native';
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
  const [nickName, setNickname] = useState<string>('');
  const [newLink, setNewLink] = useState<string>('..........');
  const [error, setError] = useState<boolean>(false);

  const Short = async () => {
    if (link.includes('https://') || link.includes('http://')) {
      await fetch(
        `https://cutt.ly/api/api.php?key=425b9d584a6d8607264ccf0b501a835a75417&short=${link}&name=${nickName}`,
      ).then(async response => {
        const data = await response.json();
        if (data.url.status === 3) {
          Alert.alert('nickName já em uso.');
        }
        console.log('data: ', data);
        setNewLink(data.url.shortLink);
      });
    } else {
      setError(true);
    }
  };

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
            placeHolderText={'insira o link'}
            value={link}
            setValue={setLink}
            error={error}
          />
          <Input
            value={nickName}
            setValue={setNickname}
            placeHolderText="insira o nome que deseja"
          />
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
