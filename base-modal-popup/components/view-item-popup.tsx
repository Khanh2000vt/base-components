/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PropsViewItemPopup} from '../model/base-popup-model';

export default function ViewItemPopup({
  item,
  onPress,
  sizeItem,
  index,
}: PropsViewItemPopup) {
  return (
    <View
      style={[
        styles.view,
        {
          backgroundColor: item.isSelected
            ? '#dce3f2'
            : index % 2
            ? '#F5F5F5'
            : '#fff',
          height: sizeItem.height,
          width: sizeItem.width,
        },
      ]}>
      <TouchableOpacity onPress={() => onPress(item)} style={styles.container}>
        <Text
          style={[
            styles.text,
            {fontWeight: item.isSelected ? 'bold' : 'normal'},
          ]}
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
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
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
