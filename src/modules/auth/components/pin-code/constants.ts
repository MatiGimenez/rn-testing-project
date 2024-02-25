import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const PIN_CODE_LENGTH = 6;
export const PIN_CONTAINER_SIZE = width / 2;
export const PIN_MAX_SIZE = PIN_CONTAINER_SIZE / PIN_CODE_LENGTH;
export const SPACING = 10;
export const PIN_SIZE = PIN_MAX_SIZE - SPACING;
