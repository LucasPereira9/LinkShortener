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
  height: 55%;
  background: ${theme.colors.secundary}
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
export const Title = styled.Text`
  font-size: 24px;
  padding: 8%;
  color: ${theme.colors.primary};
`;
export const InputsContainer = styled.View`
  flex-direction: column;
  width: 80%;
  height: 30%;
  align-items: center;
  justify-content: space-around;
`;
export const ButtonContainer = styled.TouchableOpacity`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ConvText = styled.Text`
  font-size: 20px;
  text-align: center;
  padding: 8%;
  color: ${theme.colors.secundary};
`;
export const ClipboardContainer = styled.TouchableOpacity`
  min-width: 10%;
  height: 12%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
export const FormatedLink = styled.Text`
  font-size: 12px;
  padding: 4%;
  text-align: center;
  color: ${theme.colors.primary};
`;
