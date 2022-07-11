import {StyleProp, ViewStyle} from 'react-native';

interface PropsStepOrder {
  data: any[];
  pageCurrent: number;
  onPress?: (item: any, index: number) => void | undefined;
  indexDisabled?: number;
  style?: StyleProp<ViewStyle> | undefined;
  position: number;
}

interface PropsPage {
  position?: number;
  navigation?: any;
  onPressNextPage?: () => void;
}

interface PropsStepItem {
  item: any;
  index: number;
  onPress?: (item: any, index: number) => void | undefined;
  indexDisabled?: number;
  pageCurrent: number;
  length: number;
  position: number;
}
export type {PropsStepOrder, PropsPage, PropsStepItem};
