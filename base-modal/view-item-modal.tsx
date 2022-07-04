/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PropsItemModal} from './model/modal-model';
const windowWidth = Dimensions.get('window').width;

export default function ViewItemModal({item, onPress, index}: PropsItemModal) {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        styles.view,
        {
          backgroundColor: item.isSelected
            ? '#dce3f2'
            : index % 2
            ? '#fff'
            : '#F5F5F5',
          height: 50,
          width: windowWidth,
        },
      ]}>
      <Text
        style={[styles.text, {fontWeight: item.isSelected ? 'bold' : 'normal'}]}
        numberOfLines={2}>
        {item.title}
      </Text>
      {item.isSelected ? (
        <Ionicons
          name="checkmark-outline"
          size={20}
          color="black"
          style={styles.checkmark}
        />
      ) : (
        <View style={styles.uncheck} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkmark: {
    alignSelf: 'center',
    width: 20,
    height: 20,
    marginLeft: 2,
  },
  text: {
    flex: 1,
  },
  uncheck: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 2,
  },
});
