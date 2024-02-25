import {Dimensions} from 'react-native';
import {PadItem} from './types';

const {width} = Dimensions.get('window');

export const PAD_SIZE = width * 0.2;
export const PAD_TEXT_SIZE = PAD_SIZE * 0.4;
export const PAD_SPACING = 20;

const defaultStyle = {
  borderWidth: 1,
};

const nonBorderStyle = {
  borderWidth: 0,
};

export const PAD_ITEMS: PadItem[] = [
  {
    label: 1,
    ...defaultStyle,
  },
  {
    label: 2,
    ...defaultStyle,
  },
  {
    label: 3,
    ...defaultStyle,
  },
  {
    label: 4,
    ...defaultStyle,
  },
  {
    label: 5,
    ...defaultStyle,
  },
  {
    label: 6,
    ...defaultStyle,
  },
  {
    label: 7,
    ...defaultStyle,
  },
  {
    label: 8,
    ...defaultStyle,
  },
  {
    label: 9,
    ...defaultStyle,
  },
  {
    label: 'auth',
    icon: 'fingerprint',
    ...nonBorderStyle,
  },
  {
    label: 0,
    ...defaultStyle,
  },
  {
    label: 'del',
    icon: 'backspace-outline',
    ...nonBorderStyle,
  },
];
