import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function HistoryPage() {
  const [Hdata, SetData] = useState();
  async function HandleItems() {
    const response = await AsyncStorage.getItem('@LinkShortener:History');
    const data = response ? JSON.parse(response) : [];
    SetData(data);
  }
  return (
    <View>
      <TouchableOpacity onPress={() => HandleItems()}>
        <Text>getitems</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('dataaa: ', Hdata)}>
        <Text>see itemss</Text>
      </TouchableOpacity>
    </View>
  );
}
