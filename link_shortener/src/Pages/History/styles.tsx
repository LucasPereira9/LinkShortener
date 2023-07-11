import {StyleSheet} from 'react-native';
import theme from '../../Global/Styles/theme';

export const styles = StyleSheet.create({
  Container: {margin: 20},
  titleContent: {
    left: 50,
  },
  title: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: '800',
    color: theme.colors.black,
  },
  content: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 0.6,
  },
  subtitle: {
    fontSize: 20,
    color: theme.colors.black,
    fontWeight: '300',
    marginVertical: 5,
  },
  link: {
    marginBottom: 15,
    color: theme.colors.linkColor,
    textDecorationLine: 'underline',
  },
  emptyContent: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  emptyText: {
    fontWeight: '600',
    fontSize: 17,
  },
  trashContainer: {
    alignItems: 'flex-end',
  },
});
