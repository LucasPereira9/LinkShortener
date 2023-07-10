import React, {useState} from 'react';
import {
  StatusBar,
  Share,
  ToastAndroid,
  Keyboard,
  View,
  TouchableOpacity,
} from 'react-native';
import theme from '../../Global/Styles/theme';
import {styles} from './styles';
import Input from '../../components/Input';
import ModernButton from '../../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-community/clipboard';
import SaveHistory from '../../services/historySave/history';
import {Controller, SubmitHandler, useForm, FieldValues} from 'react-hook-form';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export const HomePage = () => {
  const [newLink, setNewLink] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {isValid},
    watch,
  } = useForm({mode: 'onChange'});

  let Link = watch('link');
  const nickname = watch('linkNickname');
  const isConvertedLinkValid = newLink.length > 1;

  const onSubmit: SubmitHandler<FieldValues> = () => {
    GetData();
  };

  function HandleErrors() {
    setError(true);
    setNewLink('');
    setLoading(false);
  }

  const GetData = () => {
    setLoading(true);
    setError(false);
    setNewLink('');
    Keyboard.dismiss();
    fetch(`https://tinyurl.com/api-create.php?url=${Link}`, {
      method: 'GET',
    })
      .then(response => response.text())
      .then(responseJson => {
        if (responseJson.includes('Error')) {
          HandleErrors();
          return;
        }
        if (Link.includes('https://')) {
          setLoading(false);
          SaveHistory({
            newLink: responseJson,
            nickname: nickname,
          });
          setNewLink(responseJson);
        } else {
          HandleErrors();
        }
      });
  };
  function HandleShare() {
    Share.share({
      message: 'seu link encurtado: ' + newLink,
    });
  }
  const showToast = () => {
    ToastAndroid.show('Link copiado com sucesso!', ToastAndroid.SHORT);
  };
  const copyToClipboard = () => {
    Clipboard.setString(newLink);
    showToast();
  };

  return (
    <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <StatusBar backgroundColor={theme.colors.primary} />
        <View>
          <View style={styles.inputsContent}>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, value}}) => (
                <Input
                  placeHolderText={'insira o link a ser convertido'}
                  value={value}
                  setValue={onChange}
                  error={error}
                />
              )}
              name="link"
            />

            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, value}}) => (
                <Input
                  placeHolderText={'apelido do link'}
                  value={value}
                  setValue={onChange}
                />
              )}
              name="linkNickname"
            />
          </View>
          <View style={styles.buttonContainer}>
            <ModernButton
              Loading={loading}
              Colored={isValid}
              Press={handleSubmit(onSubmit)}
              Title="Converter"
            />
          </View>

          <View style={styles.bottomContent}>
            <Input
              enable={false}
              placeHolderText={'link convertido'}
              value={newLink}
              setValue={setNewLink}
              icon="copy"
              iconPressed={() => copyToClipboard()}
              enableIcon={!isConvertedLinkValid}
            />

            <TouchableOpacity
              onPress={() => HandleShare()}
              disabled={!isConvertedLinkValid}
              style={[
                styles.shareIcon,
                {
                  backgroundColor: isConvertedLinkValid
                    ? theme.colors.primary
                    : theme.colors.gray,
                },
              ]}>
              <Icon color={theme.colors.white} name="share" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HomePage;
