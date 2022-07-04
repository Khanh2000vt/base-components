/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef} from 'react';
import {
  PanResponder,
  View,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  getCloseThreshold,
  getHeightModal,
} from '../controller/modal-controller';
import {PropsHalfModal} from '../model/modal-model';

const MODAL_BG_OPEN_DURATION = 50;
const MODAL_BG_CLOSE_DURATION = 50;
const HEIGHT_SCREEN = Dimensions.get('window').height;
export default function HalfModal({
  data,
  onPressItem,
  ItemViewRender,
  heightContainerModal,
  heightItem = 50,
  maxElementsShow = 5,
  isVisible,
  onModalClose,
  styleModal,
  paddingView = {top: 25, bottom: 25},
  closeThreshold = 60,
}: PropsHalfModal) {
  const lengthData = data.length;

  const heightModalUpdate = getHeightModal(
    heightContainerModal,
    lengthData,
    maxElementsShow,
    heightItem,
    HEIGHT_SCREEN,
  );
  const closeThresholdUpdate = getCloseThreshold(
    heightModalUpdate,
    paddingView,
    closeThreshold,
  );
  const modalRef = useRef<View>(null);
  const modalPan = useRef(
    new Animated.ValueXY({x: 0, y: HEIGHT_SCREEN}),
  ).current;
  const modalBgPan = useRef(
    new Animated.ValueXY({x: 0, y: HEIGHT_SCREEN}),
  ).current;
  // const [modalHeight, setModalHeight] = useState<number>(0);
  // useEffect(() => {
  //   if (modalRef) {
  //     setTimeout(() => {
  //       modalRef.current?.measure((_x, _y, _width, height) => {
  //         setModalHeight(height);
  //       });
  //     }, 1000);
  //   }
  // }, []);

  useEffect(() => {
    if (isVisible) {
      modalOpenAnimation();
    } else {
      modalCloseAnimation();
    }
  }, [isVisible]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_evt, _gestureState) => true,
    onMoveShouldSetPanResponderCapture: (_evt, gestureState) => {
      return gestureState.dy !== 0;
    },
    onPanResponderGrant: (_e, _gestureState) => {
      modalPan.setOffset({
        x: 0,
        y: 0,
      });
    },
    onPanResponderMove: (_e, gestureState) => {
      // chưa xử lý đc đoạn này
      // if (gestureState.dy < 0 && disableTopScroll) {
      //   return;
      // }
      if (gestureState.dy < 0) {
        return;
      }
      modalPan.setValue({x: 0, y: gestureState.dy});
    },

    onPanResponderRelease: (_e, gestureState) => {
      if (gestureState.moveY - gestureState.y0 > closeThresholdUpdate) {
        onModalClose();
      } else {
        modalOpenAnimation();
      }
    },
  });

  const modalOpenAnimation = () => {
    Animated.parallel([
      Animated.spring(modalPan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: true,
      }),
      Animated.timing(modalBgPan, {
        toValue: {x: 0, y: 0},
        duration: MODAL_BG_OPEN_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const modalCloseAnimation = () => {
    Animated.parallel([
      Animated.spring(modalPan, {
        toValue: {x: 0, y: HEIGHT_SCREEN},
        useNativeDriver: true,
      }),
      Animated.timing(modalBgPan, {
        toValue: {x: 0, y: HEIGHT_SCREEN},
        duration: MODAL_BG_CLOSE_DURATION,
        useNativeDriver: true,
        delay: 150,
      }),
    ]).start(() => {});
  };

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({item, index}: {item: any; index: number}) => (
    <ItemViewRender
      item={item}
      key={index}
      index={index}
      onPress={onPressItem}
    />
  );
  return (
    <Animated.View
      style={[
        styles.modalBackground,
        {transform: modalBgPan.getTranslateTransform()},
        {
          justifyContent: 'flex-end',
          elevation: isVisible ? 1 : -1,
          zIndex: isVisible ? 1 : -1,
        },
      ]}>
      <TouchableWithoutFeedback
        style={[styles.modalBackground]}
        onPress={() => onModalClose()}>
        <View style={{height: HEIGHT_SCREEN}} />
      </TouchableWithoutFeedback>
      <Animated.View
        ref={modalRef}
        style={[
          styles.modal,
          {
            transform: modalPan.getTranslateTransform(),
            paddingBottom: paddingView.bottom,
          },
          styleModal,
        ]}
        {...panResponder.panHandlers}>
        <View>
          <View style={styles.modalInner}>
            <View style={[styles.bar, styles.leftBar]} />
            <View style={[styles.bar, styles.rightBar]} />
          </View>
          <View
            style={{
              paddingTop: paddingView.top - 8,
              height: heightModalUpdate,
            }}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 8,
    backgroundColor: '#fff',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  body: {},
  modalInner: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'center',
  },
  bar: {
    width: 16,
    borderBottomWidth: 4,
    borderColor: 'gray',
    opacity: 0.4,
  },
  leftBar: {
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightBar: {
    borderRadius: 16,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
