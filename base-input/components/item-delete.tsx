import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PropsPress} from '../model/base-input-model';

function ItemDelete({onPress}: PropsPress) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.deleteButton}>
      <Ionicons name={'close-circle'} size={15} color="black" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    opacity: 0.38,
  },
});

export default ItemDelete;
