import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PropsPage} from '../model/step-model';

function ScreenThird({onPressNextPage, index}: PropsPage) {
  function handlePress() {
    if (onPressNextPage) {
      onPressNextPage(index);
    }
  }
  return (
    <View style={styles.view}>
      <Text>Screen 3</Text>
      <Button title="Next" onPress={handlePress} />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenThird;
