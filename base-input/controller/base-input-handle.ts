/* eslint-disable no-useless-escape */
import {KeyboardType} from 'react-native';
import {ERROR} from '../utils';

function getKeyboardType(option: string | undefined): KeyboardType {
  if (option === 'number') {
    console.log('getKeyboardType: numeric');
    return 'numeric';
  } else if (option === 'phone') {
    console.log('getKeyboardType: phone-pad');
    return 'phone-pad';
  } else if (option === 'email') {
    console.log('getKeyboardType: email-address');
    return 'email-address';
  } else if (option === 'price') {
    console.log('getKeyboardType: number-pad');
    return 'number-pad';
  } else if (option === 'decimal') {
    console.log('getKeyboardType: decimal-pad');
    return 'decimal-pad';
  } else {
    console.log('getKeyboardType: default');
    return 'default';
  }
}

function isErrorVietnamesePhoneNumber(number: string): ERROR {
  if (/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(number)) {
    return ERROR.NOT_ERROR;
  }
  return ERROR.PHONE_INCORRECT;
}

function isErrorValidateEmail(mail: string): ERROR {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return ERROR.NOT_ERROR;
  }
  return ERROR.GMAIL_INCORRECT;
}

function getNumberOtherZero(number: string): boolean {
  if (number.replace(/[^1-9]/g, '')) {
    return true;
  }
  return false;
}

function getDecimalValue(text: string, pre: string | undefined): string {
  let data = text;
  if (text.slice(-1) === ',') {
    data = text.slice(0, -1);
  }
  if (getNumberOtherZero(text)) {
    data = text.replace(/^0+/, '');
  }
  let indexLast = data.lastIndexOf('.');
  let indexStart = data.indexOf('.');
  let preIndex = pre ? pre.indexOf('.') : -1;
  if (preIndex === indexStart && indexStart < indexLast) {
    data = data.slice(0, indexStart) + data.slice(indexStart + 1, data.length);
  } else if (preIndex >= indexStart && preIndex === indexLast - 1) {
    data = data.slice(0, indexLast) + data.slice(indexLast + 1, data.length);
  }
  return data;
}

function getFormatPrice(price: string, option: string | undefined): string {
  const COUNT_NUMBER = 3;
  let priceBase = price.replace(/[^0-9]/g, '');
  if (getNumberOtherZero(priceBase)) {
    priceBase = priceBase.replace(/^0+/, '');
  }
  let result = priceBase;
  if (option === 'price') {
    let index = 0;
    const length = priceBase.length;
    const count = Math.floor(length / COUNT_NUMBER);
    const offset = length % COUNT_NUMBER;
    if (length <= COUNT_NUMBER) {
      result = priceBase;
    } else {
      for (let i = 0; i < count; i++) {
        index = offset + i * COUNT_NUMBER + i;
        result = result.slice(0, index) + ',' + result.slice(index);
      }
      if (result[0] === ',') {
        result = result.slice(1);
      }
    }
  } else {
    result = price;
  }
  return result;
}

function getPriceMax(data: number, max: number): number {
  data = Math.floor(data);
  if (data > max) {
    return getPriceMax(data / 10, max);
  } else {
    return data;
  }
}

function getPriceMin(data: string, zero: string): string {
  let a = data.slice(0, -1);
  let temp = data.slice(data.length - 1);
  if (temp === '0') {
    return getPriceMin(a, `${zero}0`);
  } else {
    return zero;
  }
}

function getPriceSuggestArray(
  data_1: string,
  data_2: string,
  data_3: string,
  option: string | undefined,
): string[] {
  let first: string = '';
  let second: string = '';
  let third: string = '';
  first = getFormatPrice(data_1, option);
  second = getFormatPrice(data_2, option);
  third = getFormatPrice(data_3, option);
  return [first, second, third];
}

function getPriceMinMaxNotUndefined(
  price: number,
  min: number,
  max: number,
  option: string | undefined,
) {
  let price_1: number = getPriceMax(price, max);
  let price_2: number = Math.floor(price_1 / 10);
  if (price_1 < min) {
    price_1 = price_1 * 100;
    price_2 = min;
  }
  let price_3: number = price_1 * 10;
  price_3 = price_3 > max ? max : price_3;
  return getPriceSuggestArray(
    price_2.toString(),
    price_1.toString(),
    price_3.toString(),
    option,
  );
}

function getPriceMinMax(
  price: number,
  max: number,
  option: string | undefined,
) {
  let price_1: number = getPriceMax(price * 10, max);
  let price_2: number = price_1 * 10;
  let price_3: number = price_2 * 10;
  if (price_2 > max) {
    price_1 = Math.floor(price_1 / 10);
    price_2 = price_1 * 10;
  }
  price_3 = price_3 > max ? max : price_3;
  return getPriceSuggestArray(
    price_1.toString(),
    price_2.toString(),
    price_3.toString(),
    option,
  );
}

function handleMultiple(log: string, price: number): number {
  let temp = `1${log}0`;
  let a = parseInt(temp, 10);
  return a * price;
}

function getPriceSuggest(
  data: string,
  min: number | undefined,
  max: number | undefined,
  option: string | undefined,
): string[] {
  let value = data.replace(/[^0-9]/g, '');
  let price: number = parseInt(value, 10);
  // && data.length === 1
  if (min !== undefined) {
    let log: string = getPriceMin(min.toString(), '');
    if (max !== undefined && handleMultiple(log, price) >= max) {
      return getPriceMinMaxNotUndefined(price, min, max, option);
    } else {
      return getPriceSuggestArray(
        `${data}${log}`,
        `${data}${log}0`,
        `${data}${log}00`,
        option,
      );
    }
  } else {
    if (max !== undefined) {
      return getPriceMinMax(price, max, option);
    } else {
      return getPriceSuggestArray(
        `${data}000`,
        `${data}0000`,
        `${data}00000`,
        option,
      );
    }
  }
}

function isNotLengthPassword(password: string): ERROR {
  return password.length < 6 ? ERROR.PASSWORD_LENGTH_LESS_6 : ERROR.NOT_ERROR;
}

function isNotTextAndNumPass(password: string): ERROR {
  if (password.replace(/[^0-9]/g, '')) {
    return ERROR.NOT_ERROR;
  }
  return ERROR.PASSWORD_NOT_CONTAIN_NUMBER;
}

function isNotTextUpper(password: string): ERROR {
  if (password.replace(/[^A-Z]/g, '')) {
    return ERROR.NOT_ERROR;
  }
  return ERROR.PASSWORD_NOT_CONTAIN_UPPER_CHAR;
}

function isNotSpecialCharacters(password: string): ERROR {
  if (password.replace(/[\w\s]/gi, '')) {
    return ERROR.NOT_ERROR;
  }
  return ERROR.PASSWORD_NOT_CONTAIN_SPECIAL_CHAR;
}

function isPriceLessMinValue(price: string, min: number | undefined): ERROR {
  if (min === undefined) {
    return ERROR.NOT_ERROR;
  }
  let priceBase = price.replace(/[^0-9]/g, '');
  let priceNumber = parseFloat(priceBase);
  return priceNumber < min ? ERROR.PRICE_LESS_MIN_VALUE : ERROR.NOT_ERROR;
}

function isPriceBiggerMaxValue(price: string, max: number | undefined): ERROR {
  if (max === undefined) {
    return ERROR.NOT_ERROR;
  }
  let priceBase = price.replace(/[^0-9]/g, '');
  let priceNumber = parseInt(priceBase, 10);
  return priceNumber > max ? ERROR.PRICE_BIGGER_MAX_VALUE : ERROR.NOT_ERROR;
}

function isDecLessMinValue(text: string, min: number | undefined): ERROR {
  if (min === undefined) {
    return ERROR.NOT_ERROR;
  }
  let decNumber = parseFloat(text);
  return decNumber < min ? ERROR.PRICE_LESS_MIN_VALUE : ERROR.NOT_ERROR;
}

function isDecBiggerMaxValue(text: string, max: number | undefined): ERROR {
  if (max === undefined) {
    return ERROR.NOT_ERROR;
  }
  let decNumber = parseFloat(text);
  return decNumber > max ? ERROR.PRICE_BIGGER_MAX_VALUE : ERROR.NOT_ERROR;
}

function getArrayKeyError(
  text: string | undefined,
  option: string | undefined,
  level: number,
  comparePasswords: string | undefined,
  minLength: number | undefined,
  minValue: number | undefined,
  maxValue: number | undefined,
): ERROR[] {
  if (text === undefined) {
    return [ERROR.NOT_ERROR];
  }
  let result: ERROR[] = [ERROR.NOT_ERROR];
  if (minLength !== undefined && text.length < minLength) {
    result = [ERROR.TEXT_LESS_MIN_LENGTH];
  }
  if (option === 'phone') {
    let errorPhone: ERROR = isErrorVietnamesePhoneNumber(text);
    result = [errorPhone];
  } else if (option === 'email') {
    let errorEmail: ERROR = isErrorValidateEmail(text);
    result = [errorEmail];
  } else if (option === 'password') {
    const level1: ERROR = isNotLengthPassword(text);
    const level2: ERROR = isNotTextAndNumPass(text);
    const level3: ERROR = isNotTextUpper(text);
    const level4: ERROR = isNotSpecialCharacters(text);
    if (level === 0) {
      result = [level1];
    } else if (level === 1) {
      result = [level1, level2];
    } else if (level === 2) {
      result = [level1, level2, level3];
    } else if (level === 3) {
      result = [level1, level2, level3, level4];
    }
  } else if (option === 'confirm') {
    let error_confirm: ERROR = getFormatConfirm(text, comparePasswords);
    result = [error_confirm];
  } else if (option === 'price') {
    let error_min: ERROR = isPriceLessMinValue(text, minValue);
    let error_max: ERROR = isPriceBiggerMaxValue(text, maxValue);
    result = [error_min, error_max];
  } else if (option === 'decimal') {
    let error_min: ERROR = isDecLessMinValue(text, minValue);
    let error_max: ERROR = isDecBiggerMaxValue(text, maxValue);
    result = [error_min, error_max];
  }
  return result;
}

function getIsErrorInput(array: ERROR[]): boolean {
  let result: boolean = false;
  array.forEach(item => {
    if (item !== ERROR.NOT_ERROR) {
      result = true;
    }
  });
  return result;
}

function getFormatConfirm(data: string, root: string | undefined): ERROR {
  return data === root ? ERROR.NOT_ERROR : ERROR.CONFIRM_PASSWORD_INCORRECT;
}

export {
  getKeyboardType,
  isErrorVietnamesePhoneNumber,
  isErrorValidateEmail,
  getFormatPrice,
  getArrayKeyError,
  getNumberOtherZero,
  getFormatConfirm,
  getIsErrorInput,
  getPriceSuggest,
  getDecimalValue,
};
