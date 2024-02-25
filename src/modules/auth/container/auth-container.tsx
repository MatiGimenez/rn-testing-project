import React, {FC, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

import AuthenticationScreen from '../screens/authentication';
import type {AuthenticationContainerProps} from './types';

const AuthenticationContainer: FC<AuthenticationContainerProps> = ({
  children,
}) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();

    if (!hasHardware) {
      Alert.alert('Sin soporte');
      return;
    }

    const enrolledLevels = await LocalAuthentication.getEnrolledLevelAsync();

    //TODO: Show an alert to tell user to activate biometrics
    console.log('🚀 ~ authenticate ~ enrolledLevels:', enrolledLevels);

    const res = await LocalAuthentication.authenticateAsync({
      cancelLabel: 'Cancelar',
      disableDeviceFallback: true,
      promptMessage: 'Ingresar con datos biometricos',
      fallbackLabel: '',
    });
    console.log('res', res);

    if (res.success) {
      setIsUnlocked(true);
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return <AuthenticationScreen onAuth={authenticate} />;
};

export default AuthenticationContainer;
