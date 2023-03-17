import React from 'react';
import {IButton} from './button.Structure';
import {ButtonContainer, Container, ConvText} from './style';
import theme from '../../Global/Styles/theme';
import {ActivityIndicator} from 'react-native';

export const ModernButton = ({
  Press,
  Title,
  Loading,
  Colored = false,
}: IButton) => {
  return (
    <Container>
      <ButtonContainer
        style={{
          backgroundColor: Colored
            ? theme.colors.primary
            : theme.colors.secundary,
        }}
        onPress={Press}>
        {Loading ? (
          <ActivityIndicator color={theme.colors.secundary} />
        ) : (
          <ConvText
            style={{
              color: Colored ? theme.colors.secundary : theme.colors.primary,
            }}>
            {Title}
          </ConvText>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default ModernButton;
