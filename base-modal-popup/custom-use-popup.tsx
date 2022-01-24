/* eslint-disable prettier/prettier */
import {useState, useCallback} from 'react';
import {LayoutChangeEvent} from 'react-native';

export default function usePopup() {
  const [sizeChild, setSizeChild] = useState({
    x: 0, y: 0, height: 0, width: 0,
  });
  const [sizeRoot, setSizeRoot] = useState({
    x: 0, y: 0, height: 0, width: 0,
  });

  const onLayoutChild = useCallback((event: LayoutChangeEvent): void => {
    const {x, y, height, width} = event.nativeEvent.layout;
    const newStateChild = {
      x: x,
      y: y,
      width: width,
      height: height,

    };
    setSizeChild(newStateChild);
  }, []);

  const onLayoutRoot = useCallback((event: LayoutChangeEvent): void => {
    const {x, y, height, width} = event.nativeEvent.layout;
    const newStateRoot = {
      x: x,
      y: y,
      width: width,
      height: height,
    };
    setSizeRoot(newStateRoot);
  }, []);

  return [sizeChild, onLayoutChild, sizeRoot, onLayoutRoot];
}
