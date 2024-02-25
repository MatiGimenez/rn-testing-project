import React, {FC, useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Pad from '../components/pad/pad';
import PinCode from '../components/pin-code/pin-code';
import {PIN_CODE_LENGTH} from '../components/pin-code/constants';
import {AuthenticationScreenProps} from './types';

const AuthenticationScreen: FC<AuthenticationScreenProps> = ({onAuth}) => {
  const [code, setCode] = useState<number[]>([]);

  const handleOnPadPress = (item: number | string) => {
    if (item === 'auth') {
      onAuth();
      return;
    }

    if (item === 'del') {
      if (code.length === 0) {
        return;
      }

      setCode(prevCode => prevCode.slice(0, prevCode.length - 1));
      return;
    }

    if (code.length < PIN_CODE_LENGTH) {
      setCode(prevCode => [...prevCode, Number(item)]);
      return;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <PinCode code={code} />
      <Pad onPress={handleOnPadPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
});

export default AuthenticationScreen;
