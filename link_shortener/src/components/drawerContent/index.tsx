import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../Global/Styles/theme';
import {Content, DrawerContent, Logo} from './styles';

export default function CustomDrawerContent(props: any) {
  const width = useWindowDimensions().width * 0.3;
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Logo
          resizeMode="contain"
          source={require('../../assets/ConvLinkLogo.png')}
        />
      </View>
      <Content>
        <DrawerContent>
          <Icon color={theme.colors.secundary} name="circle" size={8} />

          <DrawerItem
            style={{
              width: width,
            }}
            label="Home"
            labelStyle={{color: theme.colors.black}}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
        </DrawerContent>
        <DrawerContent>
          <Icon color={theme.colors.secundary} name="circle" size={8} />
          <DrawerItem
            style={{
              width: width,
            }}
            label="Meus links"
            labelStyle={{color: theme.colors.black}}
            onPress={() => {
              props.navigation.navigate('HistoryPage');
            }}
          />
        </DrawerContent>
      </Content>
    </DrawerContentScrollView>
  );
}
