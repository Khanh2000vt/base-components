/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import BaseModalPicker from './base-popup';
import TestViewRender from './test-view-render';
import TestViewPicker from './test-view-picker';
import usePopup from './custom-use-popup';

export default function TestPopupScreen() {
  const [itemSelected, setItemSelected] = useState();
  const [sizeChild, onLayoutChild, sizeRoot, onLayoutRoot] = usePopup();
  console.log('checkRoot: ', sizeRoot);
  console.log('checkChild: ', sizeChild);
  function handlePress(item: any) {
    setItemSelected(item.title);
  }
  return (
    <View
      style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}} onLayout={onLayoutRoot}>
      <View style={styles.container} onLayout={onLayoutChild}>
        <BaseModalPicker
          OnViewPicker={TestViewPicker}
          data={data}
          ItemViewRender={TestViewRender}
          onPress={handlePress}
          option="bottom"
          heightPopup={150}
          widthPopup={100}
          optionSelected={itemSelected}
          // sizeRoot={{x: 0, y: 0, width: 360, height: 685.5}}
          // sizePopup={{x: 0, y: 0, width: 150, height: 50}}
          sizeRoot={sizeRoot}
          sizePopup={sizeChild}
          />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    // left: 200,
  },
});


const data = [
  {
    id: 1,
    title: 'test thu 1',
  },
  {
    id: 2,
    title: 'test thu 2',
  },
  {
    id: 3,
    title: 'test thu 3',
  },
  {
    id: 4,
    title: 'test thu 4',
  },
];
