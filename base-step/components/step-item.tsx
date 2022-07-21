import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {getDisabled} from '../controller/step-handle';
import {PropsStepItem} from '../model/step-model';
import {WIDTH_STEP} from '../utils';
function StepItem({
  pageCurrent,
  onPress,
  indexDisabled,
  index,
  item,
  length,
  position,
}: PropsStepItem) {
  const lastIndex = length - 1;
  function handlePress() {
    console.log('item: ', item, index);
    if (onPress !== undefined) {
      onPress(item, index);
    }
  }
  return (
    <View style={[styles.itemProgress]}>
      <View style={styles.body}>
        {index !== 0 ? (
          <View
            style={[
              styles.rule,
              index <= pageCurrent ? styles.ruleWork : styles.ruleHide,
            ]}
          />
        ) : (
          <View style={styles.rule} />
        )}
        <TouchableOpacity
          disabled={getDisabled(index, pageCurrent, indexDisabled)}
          onPress={() => handlePress()}
          style={styles.node}>
          <View
            style={
              index > pageCurrent
                ? styles.nodeHide
                : [
                    styles.nodeWork,
                    {
                      backgroundColor:
                        index === position ? '#C15656' : '#13314F',
                    },
                  ]
            }
          />
        </TouchableOpacity>
        {index !== lastIndex ? (
          <View
            style={[
              styles.rule,
              index < pageCurrent ? styles.ruleWork : styles.ruleHide,
            ]}
          />
        ) : (
          <View style={styles.rule} />
        )}
      </View>
      <TouchableOpacity
        disabled={getDisabled(index, pageCurrent, indexDisabled)}
        style={styles.container}
        onPress={() => handlePress()}>
        <Text
          style={[
            styles.text,
            index > pageCurrent ? styles.textHide : undefined,
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
  },
  itemProgress: {
    width: WIDTH_STEP,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    paddingTop: 5,
  },
  rule: {
    marginTop: 8,
    flexGrow: 1,
    height: 2,
  },
  ruleWork: {
    backgroundColor: '#13314F',
  },
  ruleHide: {
    backgroundColor: '#a6a2a2',
    opacity: 0.35,
  },
  node: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  nodeWork: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  nodeHide: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#a6a2a2',
    opacity: 0.35,
  },
  touch: {
    borderWidth: 1,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
  textHide: {
    opacity: 0.35,
  },
});
export default StepItem;
