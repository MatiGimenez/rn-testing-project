import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'tamagui';
import {MotiView} from 'moti';

import {PinCodeProps} from './types';
import {PIN_CODE_LENGTH, PIN_SIZE, SPACING} from './constants';

const PinCode: FC<PinCodeProps> = ({code = []}) => {
  return (
    <View
      flexDirection="row"
      gap={SPACING * 2}
      marginBottom={SPACING * 3}
      height={PIN_SIZE * 2}
      alignItems="flex-end">
      {Array.from({length: PIN_CODE_LENGTH}).map((_, i) => {
        const isSelected = code[i] !== undefined;
        return (
          <MotiView
            key={i}
            style={styles.pinCode}
            transition={{
              type: 'spring',
              duration: 600,
            }}
            animate={{
              height: isSelected ? PIN_SIZE : 2,
              marginBottom: isSelected ? PIN_SIZE - SPACING : 0,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pinCode: {
    width: PIN_SIZE,
    borderRadius: PIN_SIZE,
    backgroundColor: '#FFF',
  },
});

export default PinCode;
