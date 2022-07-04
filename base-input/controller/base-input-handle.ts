/* eslint-disable no-useless-escape */
import {KeyboardType} from 'react-native';
import {LevelPassword} from '../model/base-input-model';

function getKeyboardType(option: string | undefined): KeyboardType {
  if (option === 'number') {
    return 'numeric';
  } else if (option === 'phone') {
    return 'phone-pad';
  } else if (option === 'email') {
    return 'email-address';
  } else if (option === 'price') {
    return 'number-pad';
  } else {
    return 'default';
  }
}

function isErrorVietnamesePhoneNumber(number: string) {
  if (/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(number)) {
    return false;
  }
  return true;
}

function isErrorValidateEmail(mail: string): boolean {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return false;
  }
  return true;
}

function getNumberOtherZero(number: string): boolean {
  if (number.replace(/[^1-9]/g, '')) {
    return true;
  }
  return false;
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

function isNotLengthPassword(password: string): boolean {
  return password.length < 6;
}

function isNotTextAndNumPass(password: string): boolean {
  if (password.replace(/[^0-9]/g, '')) {
    return false;
  }
  return true;
}

function isNotTextUpper(password: string): boolean {
  if (password.replace(/[^A-Z]/g, '')) {
    return false;
  }
  return true;
}

function isNotSpecialCharacters(password: string): boolean {
  if (password.replace(/[\w\s]/gi, '')) {
    return false;
  }
  return true;
}

function isErrorFormatType(
  text: string,
  option: string | undefined,
  level: number,
  comparePasswords: string | undefined,
): boolean {
  let isError: boolean = false;
  if (option === 'phone') {
    isError = isErrorVietnamesePhoneNumber(text);
  } else if (option === 'email') {
    isError = isErrorValidateEmail(text);
  } else if (option === 'password') {
    const level1 = isNotLengthPassword(text);
    const level2 = isNotTextAndNumPass(text);
    const level3 = isNotTextUpper(text);
    const level4 = isNotSpecialCharacters(text);
    if (level === 0) {
      isError = level1;
    } else if (level === 1) {
      isError = level1 || level2;
    } else if (level === 2) {
      isError = level1 || level2 || level3;
    } else if (level === 3) {
      isError = level1 || level2 || level3 || level4;
    }
  } else if (option === 'confirm') {
    isError = !getFormatConfirm(text, comparePasswords);
  }
  return isError;
}

function getFormatPassword(data: string): LevelPassword {
  let password: LevelPassword = {
    length: false,
    textAndNumber: false,
    textUpper: false,
    specialCharacters: false,
  };
  if (!isNotLengthPassword(data)) {
    password.length = true;
  }
  if (!isNotTextAndNumPass(data)) {
    password.textAndNumber = true;
  }
  if (!isNotTextUpper(data)) {
    password.textUpper = true;
  }
  if (!isNotSpecialCharacters(data)) {
    password.specialCharacters = true;
  }
  return password;
}

function getFormatConfirm(data: string, root: string | undefined): boolean {
  return data === root;
}

export {
  getKeyboardType,
  isErrorVietnamesePhoneNumber,
  isErrorValidateEmail,
  getFormatPrice,
  isErrorFormatType,
  getNumberOtherZero,
  getFormatPassword,
  getFormatConfirm,
};
