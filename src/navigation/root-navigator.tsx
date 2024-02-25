import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from './logged/dashboard';
import UnloggedStack from '../modules/unlogged/navigation';

const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      {true ? <UnloggedStack /> : <Dashboard />}
    </NavigationContainer>
  );
};

export default RootNavigator;
