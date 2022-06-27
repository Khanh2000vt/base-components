import {
  ColorValue,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface PropsBaseInput {
  option?: 'text' | 'number' | 'phone' | 'email' | 'price' | undefined;
  title?: string;
  placeholder?: string | undefined;
  value: string | undefined;
  onChangeText?: (text: string) => void | undefined;
  defaultValue?: string | undefined;
  autoFocus?: boolean | undefined;
  onEndEditing?: (nativeEvent: any, isErrorInput: boolean) => void | undefined;
  onRef?: any;
  multiline?: boolean | undefined;
  secureTextEntry?: boolean | undefined;
  suggestion?: boolean | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  propsOther?: React.Component<TextInputProps>;
  styleViewInput?: StyleProp<ViewStyle> | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  styleTitle?: StyleProp<TextStyle> | undefined;
  styleViewSuggestion?: StyleProp<ViewStyle> | undefined;
  styleOptionsSuggestion?: StyleProp<ViewStyle> | undefined;
  styleTextSuggestion?: StyleProp<TextStyle> | undefined;
  offsetMarginSuggestion?: number;
  backgroundColor?: ColorValue | undefined;
}

interface SuggestionProps {
  first: string;
  second: string;
  third: string;
}
export type {PropsBaseInput, SuggestionProps};
