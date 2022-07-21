/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {getWidth} from '../controller/masked-view-handle';
const SCREEN_WIDTH = Dimensions.get('window').width;
function getViewComment(height: number): JSX.Element | JSX.Element[] {
  return (
    <View style={styles.view}>
      <View style={styles.circle} />
      <View style={[styles.comment, {height}]} />
    </View>
  );
}

function getViewInformation(index: number): JSX.Element | JSX.Element[] {
  const array = new Array(index).fill('');
  return (
    <View style={[styles.view, {alignItems: 'center'}]}>
      <View style={styles.avt} />
      <View style={styles.container}>
        {array.map((_, i) => {
          return (
            <View
              style={[
                styles.item,
                i === 0 ? styles.itemFirst : styles.itemOther,
              ]}
              key={i}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  avt: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  comment: {
    width: getWidth(SCREEN_WIDTH, 20, 60),
    marginLeft: 20,
    borderRadius: 4,
  },
  container: {
    marginLeft: 20,
  },
  item: {
    height: 20,
    borderRadius: 4,
  },
  itemFirst: {
    width: 150,
  },
  itemOther: {
    marginTop: 6,
    width: getWidth(SCREEN_WIDTH, 20, 80),
  },
});
export {getViewComment, getViewInformation};
