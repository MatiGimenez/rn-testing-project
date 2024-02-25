export type PadProps = {
  onPress: (item: string | number) => void;
};

export type PadItem = {
  label: number | string;
  borderWidth: number;
  icon?: string;
  disabled?: boolean;
};
