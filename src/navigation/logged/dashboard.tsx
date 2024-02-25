import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME_STACK} from '../../modules/home/navigation/constants';
import HomeStack from '../../modules/home/navigation';
import {DashboardParamList} from './types';
import AuthenticationContainer from '../../modules/auth/container/auth-container';

const Tab = createBottomTabNavigator<DashboardParamList>();

const Dashboard: FC = () => {
  return (
    <AuthenticationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name={HOME_STACK} component={HomeStack} />
      </Tab.Navigator>
    </AuthenticationContainer>
  );
};

export default Dashboard;
