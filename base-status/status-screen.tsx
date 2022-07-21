/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PropsStatus} from './model/status-model';

function BaseStatus({data}: PropsStatus) {
  const lastIndex = data.length - 1;
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {data.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.progress}>
              <View>
                {index !== 0 ? (
                  <View style={[styles.rule, styles.ruleShow]} />
                ) : (
                  <View style={styles.rule} />
                )}
                <View
                  style={[
                    styles.node,
                    {backgroundColor: index === 0 ? '#C15656' : '#a6a2a2'},
                  ]}
                />
                {index !== lastIndex ? (
                  <View style={[styles.rule, styles.ruleShow]} />
                ) : (
                  <View style={styles.rule} />
                )}
              </View>
              <View style={styles.textView}>
                <Text style={styles.textTitle}>{item.title}</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View>
                {index !== lastIndex ? (
                  <View style={[styles.rule, styles.ruleShow]} />
                ) : (
                  <View style={styles.rule} />
                )}
              </View>
              <View style={styles.textView}>
                <Text style={styles.textTime}>{item.time}</Text>
                <Text style={styles.textNote}>{item.note}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
  },
  progress: {
    alignItems: 'center',
    marginHorizontal: 20,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  textView: {
    paddingLeft: 20,
    flex: 1,
  },
  node: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  ruleShow: {
    backgroundColor: '#a6a2a2',
  },
  rule: {
    flexGrow: 1,
    marginLeft: 5,
    width: 2,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    textAlignVertical: 'center',
  },
  textTime: {
    fontSize: 8,
    fontStyle: 'italic',
    opacity: 0.5,
    marginLeft: 5,
  },
  textNote: {
    fontSize: 10,
    opacity: 0.8,
    paddingBottom: 20,
    marginLeft: 5,
  },
});

export default BaseStatus;
