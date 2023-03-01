import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import theme from '../../Global/Styles/theme';
import {Container, Content, Title, InputsContainer} from './styles';
import Input from '../../components/Input';

export const HomePage = () => {
  const [link, setLink] = useState<string>('');
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
      </Content>
    </Container>
  );
};

export default HomePage;
