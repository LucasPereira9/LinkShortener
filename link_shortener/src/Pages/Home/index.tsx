import React, {useState} from 'react';
import {Alert, StatusBar, Text} from 'react-native';
import theme from '../../Global/Styles/theme';
import {Container, Content, Title, InputsContainer} from './styles';
import Input from '../../components/Input';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <TouchableOpacity onPress={() => Short()}>
          <Text>{newLink}</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default HomePage;
