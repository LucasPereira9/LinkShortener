import styled from 'styled-components/native';
import theme from '../../Global/Styles/theme';

export const TextInput = styled.TextInput`
  background: ${theme.colors.gray};
  width: 100%;
  border-radius: 4px;
  text-align: center;
`;
export const Container = styled.View`
  width: 80%;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;
export const ErrorText = styled.Text`
  font-size: 13px;
  color: ${theme.colors.error};
`;
export const ErrorView = styled.View`
  margin: 4%;
`;
export const IconView = styled.TouchableOpacity`
  right: 98%;
  width: 15%;
  padding-left: 10px;
  background: ${theme.colors.gray};
`;
