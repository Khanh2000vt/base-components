/* eslint-disable prettier/prettier */
import {Options} from '../utils';
interface Layout {
  x: number;
  y: number;
  width: number;
  height: number;
}
interface PropsViewItemPopup {
  item: any;
  onPress: (item: any) => void;
  // heightItem?: number;
  sizeItem: {
    height: number;
    width: number;
  };
  index: number;
}

interface BasePopupProps {
  data: any[];
  onPressItem: (item: any, refLayout?: any) => void;
  ItemViewRender: any;
  option: Options;
  heightPopup?: number | undefined;
  widthPopup?: number | undefined;
  refLayout: any | undefined | null;
  heightItem?: number | undefined;
  maxElementsShow?: number | undefined;
  isShowPopup: boolean;
  onPressCenteredView: any;
  offsetScroll?: number;
  flag?: boolean;
}

export type {Layout, BasePopupProps, PropsViewItemPopup};
