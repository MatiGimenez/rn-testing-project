import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Button, Text} from 'tamagui';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {PAD_ITEMS, PAD_SIZE, PAD_SPACING, PAD_TEXT_SIZE} from './constants';
import {PadProps} from './types';

const Pad: FC<PadProps> = ({onPress}) => {
  return (
    <FlatList
      data={PAD_ITEMS}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      scrollEnabled={false}
      contentContainerStyle={{gap: PAD_SPACING}}
      columnWrapperStyle={{gap: PAD_SPACING}}
      style={styles.flatList}
      renderItem={({item}) => {
        return (
          <Button
            w={PAD_SIZE}
            h={PAD_SIZE}
            br={PAD_SIZE}
            bw={item.borderWidth}
            borderColor={'$white1'}
            pressStyle={styles.pressed}
            backgroundColor={'$colorTransparent'}
            disabled={item.disabled}
            alignItems="center"
            justifyContent="center"
            onPress={() => onPress(item.label)}>
            {item.icon ? (
              <MCIcon name={item.icon} size={PAD_TEXT_SIZE} color={'white'} />
            ) : (
              <Text fontSize={PAD_TEXT_SIZE} color={'$white1'}>
                {item.label}
              </Text>
            )}
          </Button>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0,
  },
  pressed: {
    backgroundColor: '#FFFFFFAA',
  },
});

export default Pad;
