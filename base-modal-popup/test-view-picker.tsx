/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface PropsPicker {
  title: string;
}
export default function TestViewPicker({title}: PropsPicker) {
  return (
    <View style={styles.view}>
        <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});
