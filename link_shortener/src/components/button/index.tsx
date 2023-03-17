import React from 'react';
import {IButton} from './button.Structure';
import {ButtonContainer, Container, ConvText} from './style';
import theme from '../../Global/Styles/theme';

export const ModernButton = ({Press, Title, colored = false}: IButton) => {
  return (
    <Container>
      <ButtonContainer
        style={{
          backgroundColor: colored
            ? theme.colors.primary
            : theme.colors.secundary,
        }}
        onPress={Press}>
        <ConvText
          style={{
            color: colored ? theme.colors.secundary : theme.colors.primary,
          }}>
          {Title}
        </ConvText>
      </ButtonContainer>
    </Container>
  );
};

export default ModernButton;
