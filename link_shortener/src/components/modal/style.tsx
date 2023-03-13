import styled from 'styled-components/native';
import theme from '../../Global/Styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary}
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  padding: 5%;
  font-size: 24px;
  font-weight: bold;
`;
export const Description = styled.Text`
  padding: 5%;
  text-align: center;
`;
