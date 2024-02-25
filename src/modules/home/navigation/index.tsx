import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HOME_SCREEN} from './constants';
import HomeScreen from '../screens/home';
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
