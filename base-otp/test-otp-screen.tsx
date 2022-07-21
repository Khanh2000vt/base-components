import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BaseOTP from '../components/base-otp/base-otp';

export default function TestOTPScreen() {
  function handleCodeFilledOTP(code: string) {
    console.log('code-otp-input: ', code);
  }
  function handleCodeFilledPassword(code: string) {
    console.log('code-password-input: ', code);
  }
  return (
    <View style={styles.view}>
      <Text>Type OTP</Text>
      <BaseOTP
        pinCount={6} // Số lượng mã otp
        onCodeFilled={handleCodeFilledOTP} // Gọi lại khi nhập xong
        clearInputs={false} // Nếu true thì Xoá hết code đã nhập khi focus lại
        type="otp" // Loại nhập
        styleViewOTP={styles.styleViewOTP}
        styleInputOTP={styles.styleInputOTP} // Chỉnh styles của OTP ở đây
        // styleInputHighlight={styles.styleInputHighlight}
        backgroundColor="red"
      />
      <Text>Type Password</Text>
      <BaseOTP
        pinCount={6}
        onCodeFilled={handleCodeFilledPassword}
        clearInputs={true} // Nếu true thì Xoá hết code đã nhập khi focus lại
        type="password" // Với loại password thì sẽ hiện hình tròn
        styleViewOTP={styles.styleViewOTP}
        styleInputOTP={styles.styleInputPassword} // Chỉnh styles của OTP ở đây
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  styleViewOTP: {
    backgroundColor: 'red',
    width: '80%',
  },
  styleInputOTP: {
    borderWidth: 0,
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 15,
    // height: 150,
  },
  styleInputPassword: {
    borderWidth: 0,
  },
});
