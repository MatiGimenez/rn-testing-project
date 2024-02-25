import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootNavigator from './navigation/root-navigator';
import {TamaguiProvider} from 'tamagui';
import {tamaguiConfig} from './theme/theme.config';

const Root: FC = () => {
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={tamaguiConfig}>
        <RootNavigator />
      </TamaguiProvider>
    </SafeAreaProvider>
  );
};

export default Root;
