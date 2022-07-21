/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {handleTimeToNow} from './controller/time-handle';

function TestTime() {
  const [time, onChangeTime] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [press, setPress] = useState<boolean>(false);
  useEffect(() => {
    const long = handleTimeToNow(time);
    setStatus(long);
  }, [press]);

  function handlePress() {
    setPress(!press);
  }
  //2022-07-06T10:43:37Z
  //2015-03-25T12:00:00Z
  console.log('status: ', status);
  return (
    <View style={styles.view}>
      <Text>YYYY-MM-DDTHH:MM:SSZ</Text>
      <Text>2022-07-06T10:43:37Z</Text>
      <TextInput
        placeholder="YYYY-MM-DDTHH:MM:SSZ"
        onChangeText={onChangeTime}
        style={styles.input}
        // defaultValue=""
      />
      <Button title="Press" onPress={handlePress} />
      <Text>Hiện time: {status} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default TestTime;
