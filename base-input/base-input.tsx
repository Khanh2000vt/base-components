/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  KeyboardType,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  getFormatPrice,
  getKeyboardType,
  getNumberOtherZero,
  isErrorFormatType,
} from './controller/base-input-handle';
import {PropsBaseInput, RecommendProps} from './model/base-input-model';

function BaseInput({
  option,
  title,
  placeholder,
  value,
  onChangeText,
  defaultValue,
  autoFocus,
  onSubmitEditing,
  onRef,
  multiline,
  secureTextEntry,
  recommend,
  autoCapitalize,
  propsOther,
  style,
  styleTitle,
  styleViewRecommend,
  styleOptionsRecommend,
  styleTextRecommend,
  styleViewInput,
  offsetMarginRecommend = 0,
}: PropsBaseInput) {
  const keyboardType: KeyboardType = getKeyboardType(option);
  const [isError, setIsError] = useState<boolean>(false);
  const [isNotEmpty, setIsNotEmpty] = useState<boolean>(false);
  const [heightRecommend, setHeightRecommend] = useState<number>(30);
  const [dataText, setDataText] = useState<RecommendProps>({
    first: '',
    second: '',
    third: '',
  });
  useEffect(() => {
    if (styleOptionsRecommend) {
      const {height} = styleOptionsRecommend;
      if (height) {
        setHeightRecommend(height);
      }
    }
  }, [styleOptionsRecommend]);
  function handleChangeText(text: string) {
    let data: string = '';
    data = getFormatPrice(text, option);
    if (option === 'price' && recommend) {
      // setDataText(data);
      setDataText({
        first: getFormatPrice(`${data}000`, option),
        second: getFormatPrice(`${data}0000`, option),
        third: getFormatPrice(`${data}00000`, option),
      });
      if (getNumberOtherZero(data)) {
        setIsNotEmpty(true);
      } else {
        setIsNotEmpty(false);
      }
    }
    if (onChangeText !== undefined) {
      onChangeText(data);
    }
  }

  function handleSubmitEditing({nativeEvent}: any) {
    const {text} = nativeEvent;
    const isErrorInput = isErrorFormatType(text, option);
    setIsError(isErrorInput);
    if (onSubmitEditing !== undefined) {
      onSubmitEditing(nativeEvent, isErrorInput);
    }
  }
  return (
    <View style={styleViewInput}>
      <Text style={styleTitle}>{title}</Text>
      <TextInput
        onChangeText={handleChangeText}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        style={[
          styles.textInput,
          style,
          {
            borderColor: isError ? 'red' : '#000',
          },
        ]}
        onSubmitEditing={handleSubmitEditing}
        ref={onRef}
        multiline={multiline}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        {...propsOther}
      />
      {isNotEmpty && option === 'price' ? (
        <ScrollView
          contentContainerStyle={[
            styles.recommendView,
            {height: recommend ? heightRecommend : 0},
            styleViewRecommend,
          ]}
          horizontal={true}>
          <TouchableOpacity style={styleOptionsRecommend}>
            <Text style={styleTextRecommend}>{dataText.first}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleOptionsRecommend}>
            <Text style={styleTextRecommend}>{dataText.second}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleOptionsRecommend}>
            <Text style={styleTextRecommend}>{dataText.third}</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View
          style={{
            height: recommend ? heightRecommend + offsetMarginRecommend : 0,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    // backgroundColor: '#fff',
  },
  recommendView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
export default BaseInput;
