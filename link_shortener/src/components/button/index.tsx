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
        disabled={Colored ? false : true}
        style={{
          backgroundColor: Colored ? theme.colors.primary : theme.colors.gray,
        }}
        onPress={Press}>
        {Loading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <ConvText
            style={{
              color: Colored ? theme.colors.white : theme.colors.white,
            }}>
            {Title}
          </ConvText>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default ModernButton;
