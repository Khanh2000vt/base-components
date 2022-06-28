/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ItemDelete from './components/item-delete';
import ItemPassword from './components/item-password';
import ItemPrice from './components/item-price';
import ItemWarning from './components/item-warning';
import {
  getFormatConfirm,
  getFormatPassword,
  getFormatPrice,
  getKeyboardType,
  getNumberOtherZero,
  isErrorFormatType,
} from './controller/base-input-handle';
import {
  LevelPassword,
  PropsBaseInput,
  SuggestionProps,
} from './model/base-input-model';
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
  suggestion,
  autoCapitalize,
  propsOther,
  style,
  styleTitle,
  styleViewSuggestion,
  styleOptionsSuggestion,
  styleTextSuggestion,
  styleViewInput,
  backgroundColor = '#f0f0f0',
  levelPasswords = 0,
  comparePasswords,
}: PropsBaseInput) {
  //const
  const keyboardType: KeyboardType = getKeyboardType(option);
  // state
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<LevelPassword>({
    length: false,
    textAndNumber: false,
    textUpper: false,
    specialCharacters: false,
  });
  const [dataText, setDataText] = useState<SuggestionProps>({
    first: '',
    second: '',
    third: '',
  });

  function handleEndEdit(text: string): boolean {
    const isErrorInput = isErrorFormatType(
      text,
      option,
      levelPasswords,
      comparePasswords,
    );
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
    let data = text;
    if (option === 'price') {
      data = getFormatPrice(text, option);
      handleTextPriceSuggestion(data);
    } else if (option === 'password') {
      let password = getFormatPassword(text);
      setIsPassword(password);
    } else if (option === 'confirm') {
      let isConfirm = getFormatConfirm(text, comparePasswords);
      setIsError(!isConfirm);
      setIsShow(true);
    }
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
      handleTextPriceSuggestion(value);
    } else if (option === 'email' || option === 'phone') {
      setIsError(false);
    } else if (option === 'password') {
      setIsError(false);
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
    // dismissKeyboard();
    Keyboard.dismiss();
  }

  function handlePressPassword() {
    setHidePassword(!hidePassword);
  }
  function handleDelete() {
    if (handleChangeText !== undefined) {
      handleChangeText('');
    }
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
          ref={onRef}
          multiline={multiline}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={hidePassword}
          defaultValue={defaultValue}
          onEndEditing={handleOnEndEditing}
          onFocus={handleFocus}
          {...propsOther}
        />
        <View style={styles.icon}>
          {(option === 'password' || option === 'confirm') && (
            <ItemPassword onPress={handlePressPassword} />
          )}
          <ItemDelete onPress={handleDelete} />
        </View>
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
        option={option}
        password={isPassword}
        isShow={isShow}
        level={levelPasswords}
      />
      <Text
        style={[
          {backgroundColor: backgroundColor},
          {color: isError ? '#b00020' : '#000'},
          styles.textTitle,
          styleTitle,
        ]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
  textInput: {
    flexGrow: 1,
    // backgroundColor: 'red',
    marginLeft: 5,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    flexGrow: 1,
  },
  icon: {
    flexDirection: 'row',
  },
});
export default BaseInput;
