import AsyncStorage from '@react-native-community/async-storage';
import {ISavedItems} from './history.structure';

export default async function SaveHistory(props: ISavedItems) {
  const response = await AsyncStorage.getItem('@LinkShortener:History');

  const newData = {
    newLink: props.newLink,
    Nickname: props.nickname,
    date: props.date,
  };

  const PreviousData = response ? JSON.parse(response) : [];
  const data = [...PreviousData, newData];
  await AsyncStorage.setItem('@LinkShortener:History', JSON.stringify(data));

  return data;
}
