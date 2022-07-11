/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import StepItem from './components/step-item';
import {getPaddingHorizontal} from './controller/step-handle';
import {PropsStepOrder} from './model/step-model';
import {WIDTH_STEP} from './utils';
const windowWidth = Dimensions.get('window').width;
function StepOrder({
  data,
  pageCurrent,
  onPress,
  indexDisabled,
  style,
  position,
}: PropsStepOrder) {
  const length = data.length;
  const flatRef = useRef<FlatList>(null);
  useEffect(() => {
    handleMoveViewer(position);
  }, [position]);
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({item, index}: any) => {
    return (
      <StepItem
        item={item}
        index={index}
        onPress={onPress}
        pageCurrent={pageCurrent}
        indexDisabled={indexDisabled}
        length={length}
        position={position}
      />
    );
  };

  function handleMoveViewer(i: number) {
    let viewPos = 0.5;
    if (i === 0) {
      viewPos = 0;
    } else if (i === length - 1) {
      viewPos = 1;
    }
    flatRef.current?.scrollToIndex({
      animated: true,
      index: i,
      viewPosition: viewPos,
    });
  }

  return (
    <View
      style={[
        styles.view,
        style,
        {paddingHorizontal: getPaddingHorizontal(length, windowWidth, 20)},
      ]}>
      <FlatList
        ref={flatRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        getItemLayout={(_, index) => ({
          length: WIDTH_STEP,
          offset: WIDTH_STEP * index,
          index,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default StepOrder;
