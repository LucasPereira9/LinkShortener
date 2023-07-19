import React, {useEffect, useRef} from 'react';
import {Modalize} from 'react-native-modalize';
import ModernButton from '../button';
import {IModal} from './modal.Structure';
import {styles} from './style';
import {Text, View} from 'react-native';
import theme from '../../Global/Styles/theme';

export const Modal = ({
  setOpen,
  opened,
  title,
  subtitle,
  secondButton,
  buttonTitle,
  buttonFunction,
}: IModal) => {
  const myRef = useRef<any>();

  useEffect(() => {
    if (opened) {
      myRef.current?.open();
    } else {
      myRef.current?.close();
    }
  }, [opened]);

  return (
    <Modalize
      handlePosition="inside"
      handleStyle={{backgroundColor: theme.colors.primary}}
      onOverlayPress={setOpen}
      adjustToContentHeight
      ref={myRef}>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View
          style={[
            styles.buttonContainer,
            {flexDirection: secondButton ? 'row' : undefined},
          ]}>
          <ModernButton
            Press={() => {
              myRef.current?.close();
              buttonFunction();
            }}
            Title={buttonTitle}
          />
          {secondButton && (
            <ModernButton
              Press={() => {
                myRef.current?.close();
                setOpen();
              }}
              Title="Cancelar"
            />
          )}
        </View>
      </View>
    </Modalize>
  );
};
