import styled from 'styled-components/native';
import theme from '../../Global/Styles/theme';

export const TextInput = styled.TextInput`
  background: #72707065;
  width: 100%;
  border-radius: 10px;
  text-align: center;
`;
export const Container = styled.View`
  width: 80%;
`;
export const ErrorText = styled.Text`
  font-size: 13px;
  color: ${theme.colors.error};
`;
export const ErrorView = styled.View`
  margin: 4%;
`;
