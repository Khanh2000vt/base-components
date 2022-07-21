import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PropsWarning} from '../model/base-input-model';
import {ERROR} from '../utils';

function ItemWarning({error, messageError, arrayError}: PropsWarning) {
  return (
    <View style={styles.view}>
      {error &&
        messageError &&
        arrayError.map((item, index) => {
          if (item !== ERROR.NOT_ERROR) {
            return (
              <View style={styles.container} key={index}>
                <View style={styles.circle} />
                <Text style={styles.textError}>{messageError[index]}</Text>
              </View>
            );
          }
        })}
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
