import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './src/Pages/Home';
import HistoryPage from './src/Pages/History';
import {ThemeProvider} from 'styled-components';
import theme from './src/Global/Styles/theme';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './src/components/drawerContent';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          initialRouteName="Home">
          <Drawer.Screen
            options={{
              title: 'Converter Link',
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.white,
              headerTitleStyle: {
                fontSize: 22,
                fontWeight: 'bold',
              },
            }}
            name="Home"
            component={Home}
          />
          <Drawer.Screen
            options={{
              title: 'Meus Links',
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.white,
              headerTitleStyle: {
                fontSize: 22,
                fontWeight: 'bold',
              },
            }}
            name="HistoryPage"
            component={HistoryPage}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
