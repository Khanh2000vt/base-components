import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PropsPage} from '../model/step-model';

function ScreenFourth({index, onPressNextPage}: PropsPage) {
  function handlePress() {
    if (onPressNextPage) {
      onPressNextPage(index);
    }
  }
  return (
    <View style={styles.view}>
      <Text>Screen 4</Text>
      <Button title="Next" onPress={handlePress} />
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
