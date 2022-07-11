import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PropsPage} from '../model/step-model';

function ScreenThird({onPressNextPage}: PropsPage) {
  return (
    <View style={styles.view}>
      <Text>Screen 3</Text>
      <Button title="Next" onPress={onPressNextPage} />
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
