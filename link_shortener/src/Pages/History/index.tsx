import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {Text, View, Linking, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../Global/Styles/theme';

export default function HistoryPage() {
  const [Items, setItems] = React.useState([]);

  const date = new Date();
  const currentDate = date.toLocaleDateString();

  useFocusEffect(
    React.useCallback(() => {
      HandleItems();
    }, []),
  );

  async function HandleItems() {
    const response = await AsyncStorage.getItem('@LinkShortener:History');
    const data = response ? JSON.parse(response) : [];
    setItems(data);
  }

  function LastArraySetted(array) {
    return array[array.length - 1];
  }

  function InterpolatedGroup(array) {
    const result = [];
    let CurrentGroup = [array[0]];
    for (let item = 1; item < array.length; item++) {
      const CurrentObject = array[item];

      if (CurrentObject?.date !== LastArraySetted(CurrentGroup)?.date) {
        result.push(CurrentGroup);
        CurrentGroup = [];
      }
      CurrentGroup.push(CurrentObject);
    }
    result.push(CurrentGroup);
    return result;
  }

  const ShowTransactions = React.useMemo(() => {
    return InterpolatedGroup(Items).map((offsideItems: any, id: number) => (
      <View key={id}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>
            {currentDate === offsideItems[0]?.date
              ? 'Hoje'
              : offsideItems[0]?.date}
          </Text>
        </View>

        <View style={styles.content}>
          {Items.length < 1 ? (
            <View style={styles.emptyContent}>
              <Text style={styles.emptyText}>Histórico vazio</Text>
            </View>
          ) : (
            offsideItems.map((insideItems: any, index: number) => (
              <View key={index}>
                <Text style={styles.subtitle}>{insideItems?.Nickname}</Text>
                <Text
                  style={styles.link}
                  onPress={() => {
                    Linking.openURL(`${insideItems?.newLink}`);
                  }}>
                  {insideItems?.newLink}
                </Text>
              </View>
            ))
          )}
        </View>
      </View>
    ));
  }, [Items, currentDate]);

  return (
    <ScrollView style={styles.Container}>
      {Items.length > 0 && (
        <TouchableOpacity activeOpacity={0.4} style={styles.trashContainer}>
          <Icon color={theme.colors.primary} name="trash" size={30} />
        </TouchableOpacity>
      )}
      {ShowTransactions}
    </ScrollView>
  );
}
