import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

interface PropsBaseInput {
  option?: 'text' | 'number' | 'phone' | 'email' | 'price' | undefined;
  title?: string;
  placeholder?: string | undefined;
  value: string | undefined;
  onChangeText?: (text: string) => void | undefined;
  defaultValue?: string | undefined;
  autoFocus?: boolean | undefined;
  onSubmitEditing?: (
    nativeEvent: any,
    isErrorInput: boolean,
  ) => void | undefined;
  onRef?: any;
  multiline?: boolean | undefined;
  secureTextEntry?: boolean | undefined;
  recommend?: boolean | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  propsOther?: React.Component<TextInputProps>;
  style?: StyleProp<ViewStyle> | undefined;
  styleTitle?: StyleProp<TextStyle> | undefined;
  styleViewRecommend?: StyleProp<ViewStyle> | undefined;
  styleOptionsRecommend?: StyleProp<ViewStyle> | undefined;
  styleTextRecommend?: StyleProp<TextStyle> | undefined;
  styleViewInput?: StyleProp<ViewStyle> | undefined;
  offsetMarginRecommend?: number;
}

interface RecommendProps {
  first: string;
  second: string;
  third: string;
}
export type {PropsBaseInput, RecommendProps};
