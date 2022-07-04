import {ViewStyle} from 'react-native';
interface PropsModal {
  data: any[];
  onPressItem: (item: any) => void;
  ItemViewRender: any;
  heightContainerModal?: number | undefined;
  heightItem?: number | undefined;
  maxElementsShow?: number | undefined;
  isVisible: boolean;
  onModalClose: () => void;
  fadeAnimated?: number | undefined;
  timeAnimated?: {
    display: number;
    hide: number;
  };
  style?: ViewStyle;
  backgroundColorOtherView?: any;
  children: React.ReactNode;
  styleModal?: ViewStyle;
  paddingView?: {
    top: number;
    bottom: number;
  };
  closeThreshold?: number;
}

interface PropsItemModal {
  item: any;
  onPress: (item: any) => void;
  index: number;
}

interface PropsHalfModal {
  data: any[];
  onPressItem: (item: any) => void;
  ItemViewRender: any;
  heightContainerModal?: number | undefined;
  heightItem?: number | undefined;
  maxElementsShow?: number | undefined;
  isVisible: boolean;
  onModalClose: () => void;
  styleModal?: ViewStyle;
  paddingView?: {
    top: number;
    bottom: number;
  };
  closeThreshold?: number;
}

interface PropsTest {
  children: React.ReactNode;
  isVisible: boolean;
  onModalClose: Function;
  style?: Object;
  closeThreshold?: number;
  backgroundColor?: string;
  disableTopScroll?: boolean;
}
interface GestureState {
  y0: number;
  moveY: number;
}

export type {
  PropsModal,
  PropsItemModal,
  PropsHalfModal,
  PropsTest,
  GestureState,
};
