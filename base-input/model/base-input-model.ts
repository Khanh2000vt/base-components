import {ColorValue, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ERROR, OPTION} from '../utils';

interface SuggestionProps {
  first: string;
  second: string;
  third: string;
}

interface PropsPress {
  onPress: () => void;
}

interface PropsPrice {
  styleViewSuggestion?: StyleProp<ViewStyle> | undefined;
  styleOptionsSuggestion?: StyleProp<ViewStyle> | undefined;
  styleTextSuggestion?: StyleProp<TextStyle> | undefined;
  onPressSuggestion: (option: OPTION) => void;
  dataText: SuggestionProps;
  maxValue?: number | undefined;
  minValue?: number | undefined;
}
interface PropsBaseInput {
  option?:
    | 'text'
    | 'number'
    | 'phone'
    | 'email'
    | 'price'
    | 'password'
    | 'confirm'
    | 'decimal'
    | undefined;
  title?: string;
  placeholder?: string | undefined;
  value: string | undefined;
  onChangeText?: (text: string) => void | undefined;
  defaultValue?: string | undefined;
  autoFocus?: boolean | undefined;
  onEndEditing?: (nativeEvent: any, isErrorInput: boolean) => void | undefined;
  onRef?: any;
  multiline?: boolean | undefined;
  suggestion?: boolean | undefined;
  levelPasswords?: 0 | 1 | 2 | 3;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  maxValue?: number | undefined;
  minValue?: number | undefined;
  messageError?: string[] | undefined;
  comparePasswords?: string | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  styleViewInput?: StyleProp<ViewStyle> | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  styleTitle?: StyleProp<TextStyle> | undefined;
  styleViewSuggestion?: StyleProp<ViewStyle> | undefined;
  styleOptionsSuggestion?: StyleProp<ViewStyle> | undefined;
  styleTextSuggestion?: StyleProp<TextStyle> | undefined;
  backgroundColor?: ColorValue | undefined;
}

interface PropsWarning {
  error: boolean;
  messageError?: string[] | undefined;
  arrayError: ERROR[];
}

interface PropsAnimatedTitle {
  isFocus: boolean;
  title: string | undefined;
  isError: boolean;
  styleTitle?: StyleProp<TextStyle> | undefined;
  backgroundColor?: ColorValue | undefined;
  onPress: () => void;
}
export type {
  PropsBaseInput,
  SuggestionProps,
  PropsPress,
  PropsPrice,
  PropsWarning,
  PropsAnimatedTitle,
};
