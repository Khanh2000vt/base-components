/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useRef, useCallback} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BasePopup from '../base-popup';
import ViewItemPopup from '../components/view-item-popup';

export default function PopupScreen() {
  const ref_first = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [flag, setFlag] = useState(true);
  const [titleFirst, setTitleFirst] = useState('---Select---');

  const handlePressItem = useCallback((item: any) => {
    setIsShow(false);
    setTitleFirst(item.title);
  }, []);

  function handlePressButton() {
    setIsShow(true);
  }

  function handlePress() {
    setFlag(!flag);
  }

  const handlePressCenteredView = useCallback(() => {
    setIsShow(false);
  }, []);
  return (
    <View style={styles.popup}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => handlePressButton()}
        ref={ref_first}>
        <Text style={{color: '#fff'}}>{titleFirst}</Text>
      </TouchableOpacity>
      <Button title="Click" onPress={handlePress} />
      <BasePopup
        data={data}
        onPressItem={handlePressItem}
        ItemViewRender={ViewItemPopup}
        onPressCenteredView={handlePressCenteredView}
        option="center-right"
        // heightPopup={150}
        widthPopup={600}
        isShowPopup={isShow}
        refLayout={ref_first}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  popup: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touch: {
    backgroundColor: 'green',
    position: 'absolute',
    width: 100,
    height: 50,
    top: 440,
    left: 50,
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
