import React from 'react';
import {Text, StatusBar} from 'react-native';
import theme from '../../Global/Styles/theme';
import {Container, Content} from './styles';

export const HomePage = () => {
  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.primary} />
      <Content>
        <Text>LALALAL</Text>
      </Content>
    </Container>
  );
};

export default HomePage;
