import {ColorValue} from 'react-native';

interface BaseMaskedViewProps {
  children: React.ReactNode;
  placeholderView: JSX.Element | JSX.Element[];
  backgroundColor?: ColorValue | undefined;
  highlightColor?: ColorValue | undefined;
  speed?: number;
  direction?: 'left' | 'right';
  time?: number;
  onTimeEnding?: (flag: false) => void | undefined;
  loading: boolean;
}

interface MaskedPlaceholderProps {
  children: JSX.Element | JSX.Element[];
  backgroundColor: ColorValue | undefined;
  highlightColor: ColorValue | undefined;
  speed: number;
  direction: 'left' | 'right';
}

export type {BaseMaskedViewProps, MaskedPlaceholderProps};
