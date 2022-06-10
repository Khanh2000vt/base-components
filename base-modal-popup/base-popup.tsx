/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {memo, useEffect, useMemo, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  getHeightPopup,
  getWidthPopup,
  onSelectOption,
} from './controller/handle-options';
import {BasePopupProps, Layout} from './model/base-popup-model';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function BasePopup({
  data,
  onPressItem,
  ItemViewRender,
  option,
  heightPopup,
  widthPopup = 120,
  refLayout,
  heightItem = 50,
  maxElementsShow = 5,
  isShowPopup,
  onPressCenteredView,
  offsetScroll = 0,
  flag,
}: BasePopupProps): JSX.Element {
  console.log('Da render base popup');

  // fix data size
  const lengthData = data.length;
  const heightPopupUpdate = getHeightPopup(
    heightPopup,
    lengthData,
    maxElementsShow,
    heightItem,
    windowHeight,
  );
  widthPopup = getWidthPopup(widthPopup, windowWidth);

  //state
  const [layout, setLayout] = useState<Layout>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (refLayout?.current) {
      setTimeout(() => createLocationPopup(), 50);
    } else {
      const temp = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      setLayout(temp);
    }
  }, [refLayout?.current, offsetScroll, flag]);

  function createLocationPopup() {
    if (refLayout.current) {
      refLayout.current.measure(
        (width: any, height: any, px: any, py: any, fx: any, fy: any) => {
          const temp = {
            x: fx,
            y: fy,
            width: px,
            height: py,
          };
          console.log('temp-popup: ', temp);
          setLayout(temp);
        },
      );
    }
  }

  const locationPopup = useMemo(
    () =>
      onSelectOption(
        option,
        layout,
        windowWidth,
        windowHeight,
        widthPopup,
        heightPopupUpdate,
      ),
    [layout],
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isShowPopup}
      onRequestClose={onPressCenteredView}>
      <View style={styles.centeredView}>
        <Pressable
          style={[
            StyleSheet.absoluteFill,
            {backgroundColor: 'rgba(0, 0, 0, 0.4)'},
          ]}
          onPress={onPressCenteredView}
        />
        <View
          style={[
            styles.modalView,
            locationPopup,
            {width: widthPopup, height: heightPopupUpdate},
          ]}>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <ItemViewRender
                item={item}
                onPress={(itemPress: any) => {
                  onPressItem(itemPress, refLayout);
                }}
                sizeItem={{height: heightItem, width: widthPopup}}
                index={index}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </Modal>
  );
}

export default memo(BasePopup);
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
  },
});
