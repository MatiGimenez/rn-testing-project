import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LOGIN_SCREEN, SIGNUP_SCREEN} from './constants';
import LoginScreen from '../screens/login/login';
import SignUpScreen from '../screens/sign-up/sign-up';
import {UnloggedStackParamList} from './types';

const Stack = createNativeStackNavigator<UnloggedStackParamList>();

const UnloggedStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default UnloggedStack;
