/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Easing} from 'react-native';
import HalfModal from './components/half-modal';
import {PropsModal} from './model/modal-model';
function BaseModal({
  data,
  onPressItem,
  ItemViewRender,
  heightContainerModal,
  heightItem,
  maxElementsShow,
  isVisible,
  onModalClose,
  fadeAnimated = 0.5,
  timeAnimated = {display: 300, hide: 200},
  style,
  backgroundColorOtherView = '#000',
  styleModal,
  children,
  paddingView,
  closeThreshold,
}: PropsModal) {
  //animation
  const fadeAnim = useRef(new Animated.Value(0)).current;
  //props

  useEffect(() => {
    if (isVisible) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [isVisible]);
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: fadeAnimated,
      duration: timeAnimated.display,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: timeAnimated.hide,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={[styles.centeredView, {...style}]}>
      {children}
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
            elevation: isVisible ? 0 : -1,
            zIndex: isVisible ? 0 : -1,
            backgroundColor: backgroundColorOtherView
              ? backgroundColorOtherView
              : '#000',
          },
          styles.backgroundView,
        ]}
      />
      <HalfModal
        data={data}
        onPressItem={onPressItem}
        ItemViewRender={ItemViewRender}
        heightContainerModal={heightContainerModal}
        heightItem={heightItem}
        maxElementsShow={maxElementsShow}
        isVisible={isVisible}
        onModalClose={onModalClose}
        styleModal={styleModal}
        paddingView={paddingView}
        closeThreshold={closeThreshold}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  backgroundView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BaseModal;
