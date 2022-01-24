/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  item: any;
  onPress: any;
}
export default function TestViewRender({item, onPress}: Props) {
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => onPress(item)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});
