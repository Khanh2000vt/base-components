import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PropsPage} from '../model/step-model';

function ScreenSecond({onPressNextPage}: PropsPage) {
  return (
    <View style={styles.view}>
      <Text>Screen 2</Text>
      <Button title="Next" onPress={onPressNextPage} />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenSecond;
