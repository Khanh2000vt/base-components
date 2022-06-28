/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PropsWarning} from '../model/base-input-model';

function ItemWarning({error, option, password, isShow, level}: PropsWarning) {
  return (
    <View style={styles.view}>
      {error && (option === 'email' || option === 'phone') && (
        <View style={styles.container}>
          <View style={styles.circle} />
          <Text style={styles.textError}>Không đúng định dạng!</Text>
        </View>
      )}
      {isShow && option === 'confirm' && (
        <View style={styles.container}>
          <View
            style={[
              styles.circle,
              {backgroundColor: error ? '#b00020' : 'green'},
            ]}
          />
          <Text
            style={[styles.textError, {color: error ? '#b00020' : 'green'}]}>
            {error ? 'Mật khẩu không trùng khớp!' : 'Mật khẩu trùng khớp'}
          </Text>
        </View>
      )}
      {(isShow || error) && option === 'password' && (
        <View>
          <View style={styles.container}>
            <View
              style={[
                styles.circle,
                {backgroundColor: password.length ? 'green' : '#b00020'},
              ]}
            />
            <Text
              style={[
                styles.textError,
                {color: password.length ? 'green' : '#b00020'},
              ]}>
              Chứa ít nhất 6 ký tự
            </Text>
          </View>

          {(level === 1 || level === 2 || level === 3) && (
            <View style={styles.container}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: password.textAndNumber
                      ? 'green'
                      : '#b00020',
                  },
                ]}
              />
              <Text
                style={[
                  styles.textError,
                  {color: password.textAndNumber ? 'green' : '#b00020'},
                ]}>
                Chứa ít nhất 1 số
              </Text>
            </View>
          )}

          {(level === 2 || level === 3) && (
            <View style={styles.container}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: password.textUpper ? 'green' : '#b00020'},
                ]}
              />
              <Text
                style={[
                  styles.textError,
                  {color: password.textUpper ? 'green' : '#b00020'},
                ]}>
                Chứ ít nhất một ký tự viết hoa
              </Text>
            </View>
          )}

          {level === 3 && (
            <View style={styles.container}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: password.specialCharacters
                      ? 'green'
                      : '#b00020',
                  },
                ]}
              />
              <Text
                style={[
                  styles.textError,
                  {color: password.specialCharacters ? 'green' : '#b00020'},
                ]}>
                Chứa ít nhất một ký tự đặc biệt
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: 3,
    width: 3,
    backgroundColor: '#b00020',
    borderRadius: 3,
    marginHorizontal: 5,
  },
  textError: {
    fontSize: 8,
    color: '#b00020',
  },
});
export default ItemWarning;
