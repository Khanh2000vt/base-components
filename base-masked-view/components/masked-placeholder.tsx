import MaskedView from '@react-native-masked-view/masked-view';
import React, {useEffect} from 'react';
import {
  Dimensions,
  LayoutRectangle,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {getDestination} from '../controller/masked-placeholder-handle';
import {MaskedPlaceholderProps} from '../model/masked-view-model';
const SCREEN_WIDTH = Dimensions.get('window').width;
function MaskedPlaceholder({
  children,
  backgroundColor,
  highlightColor,
  speed,
  direction,
}: MaskedPlaceholderProps) {
  const [LOCATION, DESTINATION] = getDestination(direction, SCREEN_WIDTH);
  const [layout, setLayout] = React.useState<LayoutRectangle>();
  const offset = useSharedValue(LOCATION);
  const defaultTimingStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });
  useEffect(() => {
    offset.value = withRepeat(
      withTiming(DESTINATION, {
        duration: speed,
      }),
      0,
      false,
      finished => {
        const resultStr = finished
          ? 'All repeats are completed'
          : 'withRepeat cancelled';
        console.log(resultStr);
      },
    );
  }, [DESTINATION, offset, speed]);
  const viewStyle = React.useMemo<ViewStyle>(
    () => ({backgroundColor, overflow: 'hidden'}),
    [backgroundColor],
  );
  const getChildren = React.useCallback(
    (element: JSX.Element | JSX.Element[]) => {
      return React.Children.map(
        element,
        (child: JSX.Element, index: number) => {
          let style: ViewStyle;
          style = child.props.style;
          if (child.props.children) {
            return (
              <View key={index} style={style}>
                {getChildren(child.props.children)}
              </View>
            );
          } else {
            return (
              <View key={index} style={styles.childContainer}>
                <View style={[style, viewStyle]} />
              </View>
            );
          }
        },
      );
    },
    [viewStyle],
  );
  return layout?.width && layout?.height ? (
    <MaskedView
      style={{height: layout.height, width: layout.width}}
      maskElement={
        <View style={styles.maskedView}>{getChildren(children)}</View>
      }>
      <View style={[styles.view, {backgroundColor}]} />
      {speed > 0 && (
        <Animated.View
          style={[
            styles.animated,
            defaultTimingStyles,
            StyleSheet.absoluteFill,
          ]}>
          <MaskedView
            style={StyleSheet.absoluteFill}
            maskElement={
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[StyleSheet.absoluteFill]}
                colors={['transparent', 'black', 'transparent']}
              />
            }>
            <View
              style={[
                StyleSheet.absoluteFill,
                {backgroundColor: highlightColor},
              ]}
            />
          </MaskedView>
        </Animated.View>
      )}
    </MaskedView>
  ) : (
    <View
      onLayout={event => {
        setLayout(event.nativeEvent.layout);
      }}>
      {getChildren(children)}
    </View>
  );
}

const styles = StyleSheet.create({
  maskedView: {
    backgroundColor: 'transparent',
  },
  view: {
    flexGrow: 1,
  },
  childContainer: {
    position: 'relative',
  },
  animated: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default MaskedPlaceholder;
