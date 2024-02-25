import {NavigatorScreenParams} from '@react-navigation/native';

import {HOME_STACK} from '../../modules/home/navigation/constants';
import {HomeStackParamList} from '../../modules/home/navigation/types';

export type DashboardParamList = {
  [HOME_STACK]: NavigatorScreenParams<HomeStackParamList>;
};
