import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PropsPage} from '../model/step-model';

function ScreenFourth({onPressNextPage}: PropsPage) {
  return (
    <View style={styles.view}>
      <Text>Screen 4</Text>
      <Button title="Next" onPress={onPressNextPage} />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default ScreenFourth;
