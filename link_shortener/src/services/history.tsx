import AsyncStorage from '@react-native-community/async-storage';

export default async function SaveHistory() {
  const response = await AsyncStorage.getItem('@LinkShortener:History');

  const teste = {
    name: 'lucas',
    idade: '11',
    city: 'ww',
  };

  const PreviousData = response ? JSON.parse(response) : [];
  const data = [...PreviousData, teste];
  await AsyncStorage.setItem('@LinkShortener:History', JSON.stringify(data));
  console.log('data: ', data);
  return data;
}
