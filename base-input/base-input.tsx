/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardType,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import AnimatedTitle from './components/animated-title';
import ItemDelete from './components/item-delete';
import ItemPassword from './components/item-password';
import ItemPrice from './components/item-price';
import ItemWarning from './components/item-warning';
import {
  getFormatConfirm,
  getFormatPrice,
  getKeyboardType,
  getNumberOtherZero,
  getArrayKeyError,
  getIsErrorInput,
  getPriceSuggest,
  getDecimalValue,
} from './controller/base-input-handle';
import {PropsBaseInput, SuggestionProps} from './model/base-input-model';
import {ERROR, OPTION} from './utils';
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
  suggestion,
  autoCapitalize,
  style,
  styleTitle,
  styleViewSuggestion,
  styleOptionsSuggestion,
  styleTextSuggestion,
  styleViewInput,
  backgroundColor = '#f0f0f0',
  levelPasswords = 0,
  comparePasswords,
  maxLength,
  minLength,
  maxValue,
  minValue,
  messageError,
}: PropsBaseInput) {
  //const
  const keyboardType: KeyboardType = useMemo(
    () => getKeyboardType(option),
    [option],
  );
  //ref
  const ref = useRef<TextInput>(null);
  const ref_input = onRef ? onRef : ref;
  //array error
  const [arrayError, setArrayError] = useState<ERROR[]>([ERROR.NOT_ERROR]);
  // state
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [dataText, setDataText] = useState<SuggestionProps>({
    first: '',
    second: '',
    third: '',
  });

  function handleTextPriceSuggestion(data: string) {
    if (option === 'price' && suggestion) {
      setIsError(false);
      if (getNumberOtherZero(data)) {
        let priceSuggest = getPriceSuggest(data, minValue, maxValue, option);
        setDataText({
          first: priceSuggest[0],
          second: priceSuggest[1],
          third: priceSuggest[2],
        });
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    }
  }

  function getIsShow(data: string) {
    if (data === '') {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }

  function handleChangeText(text: string) {
    let data = text;
    if (option === 'price') {
      data = getFormatPrice(text, option);
      handleTextPriceSuggestion(data);
    } else if (option === 'password') {
      getIsShow(data);
    } else if (option === 'confirm') {
      let isConfirm = getFormatConfirm(text, comparePasswords);
      if (isConfirm === ERROR.NOT_ERROR) {
        setIsError(true);
      } else {
        setIsError(false);
      }
      getIsShow(data);
    } else if (option === 'decimal') {
      data = getDecimalValue(text, value);
    } else {
      getIsShow(data);
    }
    if (onChangeText !== undefined) {
      onChangeText(data);
    }
  }

  function handleEndEdit(_text: string): boolean {
    const listError: ERROR[] = getArrayKeyError(
      value,
      option,
      levelPasswords,
      comparePasswords,
      minLength,
      minValue,
      maxValue,
    );
    console.log('error: ', listError);
    setArrayError([...listError]);
    const isErrorInput = getIsErrorInput(listError);
    if (option === 'price') {
      setIsShow(false);
    }
    if (option === 'password' || option === 'confirm') {
      if (isErrorInput === false) {
        setIsShow(false);
      }
    }
    setIsError(isErrorInput);
    return isErrorInput;
  }

  function handleOnEndEditing({nativeEvent}: any) {
    const {text} = nativeEvent;
    const isErrorInput = handleEndEdit(text);
    if (text === '') {
      setIsFocus(false);
    }
    if (onEndEditing !== undefined) {
      onEndEditing(nativeEvent, isErrorInput);
    }
  }

  function handleFocus(_e: any) {
    setIsFocus(true);
    if (option === 'price' && value !== undefined && value !== '') {
      handleTextPriceSuggestion(value);
    } else if (option === 'email' || option === 'phone') {
      setIsError(false);
    } else if (option === 'password') {
      setIsError(false);
      setIsShow(true);
    } else if (option === 'confirm') {
      setIsShow(true);
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
    Keyboard.dismiss();
  }

  function handlePressPassword() {
    setHidePassword(!hidePassword);
  }
  function handleDelete() {
    if (handleChangeText !== undefined) {
      handleChangeText('');
      setIsShow(false);
    }
  }

  function handlePressToFocus() {
    ref_input?.current.focus();
  }
  return (
    <View
      style={[{backgroundColor: backgroundColor}, styles.view, styleViewInput]}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isError ? '#b00020' : '#000',
          },
        ]}>
        <TextInput
          onChangeText={handleChangeText}
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          style={[
            styles.textInput,
            style,
            {
              backgroundColor: backgroundColor,
            },
          ]}
          ref={ref_input}
          multiline={multiline}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          // keyboardType="decimal-pad"
          secureTextEntry={
            option === 'password' || option === 'confirm' ? hidePassword : false
          }
          defaultValue={defaultValue}
          onEndEditing={handleOnEndEditing}
          onFocus={handleFocus}
          maxLength={option === 'phone' ? 12 : maxLength}
        />
        {isFocus && (
          <View style={styles.icon}>
            {isShow && <ItemDelete onPress={handleDelete} />}
            {(option === 'password' || option === 'confirm') && (
              <ItemPassword onPress={handlePressPassword} />
            )}
          </View>
        )}
      </View>
      {isShow && option === 'price' && (
        <ItemPrice
          styleViewSuggestion={styleViewSuggestion}
          styleOptionsSuggestion={styleOptionsSuggestion}
          styleTextSuggestion={styleTextSuggestion}
          onPressSuggestion={handlePressSuggestion}
          dataText={dataText}
        />
      )}
      <ItemWarning
        error={isError}
        messageError={messageError}
        arrayError={arrayError}
      />
      {title && (
        <AnimatedTitle
          isFocus={isFocus}
          title={title}
          styleTitle={styleTitle}
          isError={isError}
          backgroundColor={backgroundColor}
          onPress={handlePressToFocus}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5,
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    flexDirection: 'row',
  },
});
export default BaseInput;
