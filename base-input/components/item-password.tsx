import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PropsPress} from '../model/base-input-model';

function ItemPassword({onPress}: PropsPress) {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  function handleToggleShowPass() {
    setHidePassword(!hidePassword);
    onPress();
  }
  return (
    <TouchableOpacity onPress={handleToggleShowPass} style={styles.eyeButton}>
      <Ionicons
        name={hidePassword ? 'eye-off' : 'eye'}
        size={15}
        color="black"
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  eyeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    // backgroundColor: 'blue',
    opacity: 0.38,
  },
});

export default ItemPassword;
