import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './src/Pages/Home';
import HistoryPage from './src/Pages/History';
import {ThemeProvider} from 'styled-components';
import theme from './src/Global/Styles/theme';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HistoryPage" component={HistoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
