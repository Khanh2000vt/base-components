import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BaseInput from '../components/base-input/base-input';

function TestInputScreen() {
  const [number, onChangeNumber] = useState<string>();
  return (
    <View style={styles.view}>
      <BaseInput
        value={number}
        title="Number"
        placeholder="Enter Number"
        onChangeText={onChangeNumber}
        option="decimal"
        minValue={1.0}
        maxValue={1000.0}
        messageError={messageError}
      />
    </View>
  );
}
const messageError = ['Giá trị tối thiểu là 1.0', 'Giá trị tối đa là 1000.0'];

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
});

export default TestInputScreen;
