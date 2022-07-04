/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text} from 'react-native';
import {PropsAnimatedTitle} from '../model/base-input-model';

function AnimatedTitle({
  isFocus,
  title,
  styleTitle,
  backgroundColor,
  isError,
  onPress,
}: PropsAnimatedTitle) {
  const animMove = useRef(new Animated.Value(0)).current;
  const animScale = useRef(new Animated.Value(1)).current;
  const animFade = useRef(new Animated.Value(0.4)).current;
  const TitleFocus = () => {
    Animated.parallel([
      Animated.timing(animMove, {
        toValue: -25,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animScale, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animFade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const TitleBlur = () => {
    Animated.parallel([
      Animated.timing(animMove, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animFade, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (isFocus) {
      TitleFocus();
    } else {
      TitleBlur();
    }
  }, [isFocus]);

  function handlePress() {
    if (!isFocus) {
      onPress();
    }
  }
  return (
    <Animated.View
      style={[
        styles.view,
        {
          transform: [
            {
              translateY: animMove,
            },
            {scale: animScale},
          ],
          opacity: animFade,
        },
      ]}>
      <Pressable onPress={handlePress}>
        <Text
          style={[
            styleTitle,
            {backgroundColor: backgroundColor},
            {color: isError && isFocus ? '#b00020' : '#000'},
            styles.text,
          ]}>
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  text: {
    paddingHorizontal: 5,
    fontWeight: 'normal',
  },
});
export default AnimatedTitle;
