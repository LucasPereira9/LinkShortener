import React, {useRef, useState} from 'react';
import {
  StatusBar,
  Alert,
  ToastAndroid,
  View,
  Text,
  useWindowDimensions,
  Keyboard,
} from 'react-native';
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
import {Modal} from '../../components/modal';
import {Modalize} from 'react-native-modalize';

export const HomePage = () => {
  const [link, setLink] = useState<string>('');
  const [nickName, setNickname] = useState<string>('');
  const [newLink, setNewLink] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [linkLimit, setLinkLimit] = useState(false);
  const window = useWindowDimensions();

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const Short = async () => {
    Keyboard.dismiss();
    if (link.includes('https://') || link.includes('http://')) {
      await fetch(
        `https://cutt.ly/api/api.php?key=425b9d584a6d8607264ccf0b501a835a75417&short=${link}&name=${nickName}`,
      ).then(async response => {
        const data = await response.json();
        setError(false);
        console.log('data:', data);

        const MontlyLimit = data.includes('You have reached your limit');
        setLinkLimit(MontlyLimit);

        LimitValidation();
        if (data.url.status === 3) {
          Alert.alert('nickName já em uso.');
        }
        setNewLink(data.url.shortLink);
      });
    } else {
      setError(true);
    }
  };
  function LimitValidation() {
    linkLimit ? onOpen() : null;
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
          <Input
            value={nickName}
            setValue={setNickname}
            placeHolderText="insira o nome que deseja"
          />
        </InputsContainer>
        <ButtonContainer onPress={() => Short()}>
          <ConvText>Converter</ConvText>
        </ButtonContainer>
        <ClipboardContainer onPress={() => copyToClipboard()}>
          <FormatedLink>{newLink}</FormatedLink>
          <Icon color={'#fff'} name="copy" size={22} />
        </ClipboardContainer>
      </Content>
      <Modal windowH={window.height / 2} opened={linkLimit} />
    </Container>
  );
};

export default HomePage;
