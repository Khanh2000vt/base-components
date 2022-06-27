/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
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
import {PropsBaseInput, SuggestionProps} from './model/base-input-model';
import {OPTION} from './utils';
function BaseInput({
  option,
  title,
  placeholder,
  value,
  onChangeText,
  defaultValue,
  autoFocus,
  onEndEditing,
  onRef,
  multiline,
  secureTextEntry,
  suggestion,
  autoCapitalize,
  propsOther,
  style,
  styleTitle,
  styleViewSuggestion,
  styleOptionsSuggestion,
  styleTextSuggestion,
  styleViewInput,
  offsetMarginSuggestion = 0,
  backgroundColor = '#f0f0f0',
}: PropsBaseInput) {
  //const
  const keyboardType: KeyboardType = getKeyboardType(option);
  // state
  const [isError, setIsError] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [heightSuggestion, setHeightSuggestion] = useState<number>(30);
  const [dataText, setDataText] = useState<SuggestionProps>({
    first: '',
    second: '',
    third: '',
  });

  //handle
  useEffect(() => {
    if (styleOptionsSuggestion) {
      const {height} = styleOptionsSuggestion;
      if (height) {
        setHeightSuggestion(height);
      }
    }
  }, [styleOptionsSuggestion]);

  function handleEndEdit(text: string): boolean {
    const isErrorInput = isErrorFormatType(text, option);
    if (option === 'price') {
      setIsShow(false);
    }
    setIsError(isErrorInput);
    return isErrorInput;
  }

  function handleTextPriceSuggestion(data: string) {
    if (option === 'price' && suggestion) {
      if (getNumberOtherZero(data)) {
        setDataText({
          first: getFormatPrice(`${data}000`, option),
          second: getFormatPrice(`${data}0000`, option),
          third: getFormatPrice(`${data}00000`, option),
        });
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    }
  }

  function handleChangeText(text: string) {
    let data: string = '';
    data = getFormatPrice(text, option);
    handleTextPriceSuggestion(data);
    if (onChangeText !== undefined) {
      onChangeText(data);
    }
  }

  function handleOnEndEditing({nativeEvent}: any) {
    const {text} = nativeEvent;
    const isErrorInput = handleEndEdit(text);
    if (onEndEditing !== undefined) {
      onEndEditing(nativeEvent, isErrorInput);
    }
  }

  function handleFocus(_e: any) {
    if (option === 'price' && value !== undefined && value !== '') {
      // setIsShow(true);
      handleTextPriceSuggestion(value);
    } else if (option === 'email' || option === 'phone') {
      setIsError(false);
    }
  }
  function handlePressSuggestion(index: OPTION) {
    setIsShow(false);
    if (onChangeText !== undefined) {
      if (index === OPTION.FIRST) {
        onChangeText(dataText.first);
      } else if (index === OPTION.SECOND) {
        onChangeText(dataText.second);
      } else if (index === OPTION.THIRD) {
        onChangeText(dataText.third);
      }
    }
    // dismissKeyboard();
    Keyboard.dismiss();
  }

  return (
    <View style={[{backgroundColor: backgroundColor}, styleViewInput]}>
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
          {
            backgroundColor: backgroundColor,
          },
        ]}
        ref={onRef}
        multiline={multiline}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        onEndEditing={handleOnEndEditing}
        onFocus={handleFocus}
        {...propsOther}
      />
      {isShow && option === 'price' ? (
        <ScrollView
          contentContainerStyle={[
            styles.suggestionView,
            {height: suggestion ? heightSuggestion : 0},
          ]}
          style={[{width: '100%'}, styleViewSuggestion]}
          horizontal={true}
          keyboardShouldPersistTaps="always">
          <TouchableOpacity
            style={styleOptionsSuggestion}
            onPress={() => handlePressSuggestion(OPTION.FIRST)}>
            <Text style={styleTextSuggestion}>{dataText.first}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleOptionsSuggestion}
            onPress={() => handlePressSuggestion(OPTION.SECOND)}>
            <Text style={styleTextSuggestion}>{dataText.second}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleOptionsSuggestion}
            onPress={() => handlePressSuggestion(OPTION.THIRD)}>
            <Text style={styleTextSuggestion}>{dataText.third}</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View
          style={{
            height: suggestion ? heightSuggestion + offsetMarginSuggestion : 0,
          }}
        />
      )}
      <Text
        style={[
          {backgroundColor: backgroundColor},
          {color: isError ? 'red' : '#000'},
          styles.textTitle,
          styleTitle,
        ]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
  },
  textTitle: {
    position: 'absolute',
    top: -10,
    paddingHorizontal: 5,
  },
  suggestionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default BaseInput;
