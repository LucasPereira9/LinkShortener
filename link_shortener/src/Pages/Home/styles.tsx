import styled from 'styled-components/native';
import theme from '../../Global/Styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary}
  align-items: center;
  justify-content: center;
`;
export const Content = styled.View`
  width: 85%;
  height: 45%;
  background: ${theme.colors.secundary}
  align-items: center;
  border-radius: 20px;
`;
export const Title = styled.Text`
  font-size: 24px;
  padding: 8%;
  color: ${theme.colors.tertiary};
`;
export const InputsContainer = styled.View`
  flex-direction: column;
  width: 80%;
  height: 50%;
  align-items: center;
  justify-content: space-around;
`;
