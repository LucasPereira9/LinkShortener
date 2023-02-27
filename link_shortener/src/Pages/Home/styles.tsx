import styled from 'styled-components/native';
import theme from '../../Global/Styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary}
  align-items: center;
`;
export const Content = styled.View`
  width: 50%;
  height: 50%;
  background: ${theme.colors.secundary}
  align-items: center;
`;
