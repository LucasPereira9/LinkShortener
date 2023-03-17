import React, {useEffect, useRef} from 'react';
import {Modalize} from 'react-native-modalize';
import ModernButton from '../button';
import {IModal} from './modal.Structure';
import {Container, Title, Description} from './style';

export const Modal = ({windowH, opened}: IModal) => {
  const myRef = useRef<any>();

  useEffect(() => {
    if (opened) {
      myRef.current?.open();
    } else {
      myRef.current?.close();
    }
  }, [opened]);

  return (
    <Modalize modalHeight={windowH} ref={myRef}>
      <Container>
        <Title>TESTE</Title>
        <Description>
          LALBLLBLALBLBLBALBLBALBALBLALBLLBLALBLBLBALBLBALBALBLBLBALBALALALBLLBLALBLBLBALBLBALBALBLBLBALBALALALBLLBLALBLBLBALBLBALBALBLBLBALBALALALBLLBLALBLBLBALBLBALBALBLBLBALBALALALBLLBLALBLBLBALBLBALBALBLBLBALBALALBLBALBALA
        </Description>
        <ModernButton Press={() => myRef.current?.close()} Title="Entendido" />
      </Container>
    </Modalize>
  );
};
