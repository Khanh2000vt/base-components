/* eslint-disable no-useless-escape */
import {KeyboardType} from 'react-native';

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

function isErrorFormatType(text: string, option: string | undefined): boolean {
  let isError: boolean = false;
  if (option === 'phone') {
    isError = isErrorVietnamesePhoneNumber(text);
    console.log('isError phone: ', isError);
  }
  if (option === 'email') {
    isError = isErrorValidateEmail(text);
    console.log('isError email: ', isError, text);
  }
  return isError;
}

export {
  getKeyboardType,
  isErrorVietnamesePhoneNumber,
  isErrorValidateEmail,
  getFormatPrice,
  isErrorFormatType,
  getNumberOtherZero,
};
