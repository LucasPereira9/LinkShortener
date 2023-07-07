import {StyleSheet} from 'react-native';
import theme from '../../Global/Styles/theme';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  inputsContent: {
    alignItems: 'center',
    height: '25%',
    justifyContent: 'space-between',
    marginTop: '30%',
  },
  buttonContainer: {
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '4%',
  },
  bottomContent: {
    alignItems: 'center',
    height: '24%',
    justifyContent: 'space-between',
  },
  shareIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    height: '38%',
    width: '16%',
    borderRadius: 10,
  },
});
