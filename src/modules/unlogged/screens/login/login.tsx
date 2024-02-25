import React, {FC, useState} from 'react';
import {Dimensions} from 'react-native';
import {Button, Text, View} from 'tamagui';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

import MainIllustration from '../../../../assets/illustrations/undraw_starlink_3r0a.svg';

const {width, height} = Dimensions.get('window');

const LoginScreen: FC = () => {
  const [user, setUser] = useState({});
  console.log('🚀 ~ user:', user);
  // Somewhere in your code
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser({...userInfo, error: undefined});
    } catch (error: any) {
      console.log('error', error);
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // user cancelled the login flow
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // play services not available or outdated
          break;
        default:
        // some other error happened
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View backgroundColor={'violet'} flex={1} justifyContent="flex-end">
        <View
          backgroundColor={'$blue2Light'}
          height={height * 0.9}
          alignItems="center"
          padding={16}
          borderTopStartRadius={12}
          borderTopEndRadius={12}>
          <MainIllustration height={height * 0.3} />
          <View>
            <Text>
              Esta es una app de prueba, así que dale pa... ¡logueate!
            </Text>
          </View>
          <Button
            size="$3"
            variant="outlined"
            icon={<Icon name="logo-google" size={24} />}
            onPress={_signIn}>
            Ingresar con Google
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
