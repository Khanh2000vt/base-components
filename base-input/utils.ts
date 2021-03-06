enum OPTION {
  FIRST,
  SECOND,
  THIRD,
}

enum ERROR {
  NOT_ERROR,
  PASSWORD_LENGTH_LESS_6,
  PASSWORD_NOT_CONTAIN_NUMBER,
  PASSWORD_NOT_CONTAIN_UPPER_CHAR,
  PASSWORD_NOT_CONTAIN_SPECIAL_CHAR,
  CONFIRM_PASSWORD_INCORRECT,
  GMAIL_INCORRECT,
  PHONE_INCORRECT,
  PRICE_LESS_MIN_VALUE,
  PRICE_BIGGER_MAX_VALUE,
  TEXT_LESS_MIN_LENGTH,
}

export {OPTION, ERROR};
