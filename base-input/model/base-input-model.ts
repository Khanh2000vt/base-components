import {
  ColorValue,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {OPTION} from '../utils';

interface PropsBaseInput {
  option?:
    | 'text'
    | 'number'
    | 'phone'
    | 'email'
    | 'price'
    | 'password'
    | 'confirm'
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
  comparePasswords?: string | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  propsOther?: React.Component<TextInputProps>;
  styleViewInput?: StyleProp<ViewStyle> | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  styleTitle?: StyleProp<TextStyle> | undefined;
  styleViewSuggestion?: StyleProp<ViewStyle> | undefined;
  styleOptionsSuggestion?: StyleProp<ViewStyle> | undefined;
  styleTextSuggestion?: StyleProp<TextStyle> | undefined;
  backgroundColor?: ColorValue | undefined;
}

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
}
interface LevelPassword {
  length: boolean;
  textAndNumber: boolean;
  textUpper: boolean;
  specialCharacters: boolean;
}

interface PropsWarning {
  error: boolean;
  option?:
    | 'text'
    | 'number'
    | 'phone'
    | 'email'
    | 'price'
    | 'password'
    | 'confirm'
    | undefined;
  password: LevelPassword;
  isShow: boolean;
  level: 0 | 1 | 2 | 3;
}
export type {
  PropsBaseInput,
  SuggestionProps,
  PropsPress,
  PropsPrice,
  PropsWarning,
  LevelPassword,
};
