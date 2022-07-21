/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import MaskedPlaceholder from './components/masked-placeholder';
import {getViewComment, getViewInformation} from './components/available-form';
import {BaseMaskedViewProps} from './model/masked-view-model';
import {isTimeStart} from './controller/masked-view-handle';

function BaseMaskedView({
  children,
  placeholderView,
  backgroundColor = '#E1E9EE',
  highlightColor = '#F2F8FC',
  speed = 800,
  direction = 'right',
  time,
  onTimeEnding,
  loading,
}: BaseMaskedViewProps) {
  useEffect(() => {
    if (isTimeStart(time, loading)) {
      if (onTimeEnding) {
        setTimeout(() => {
          onTimeEnding(false);
        }, time);
      }
    }
  }, [time, loading]);
  return loading ? (
    <MaskedPlaceholder
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      speed={speed}
      direction={direction}>
      {placeholderView}
    </MaskedPlaceholder>
  ) : (
    <View>{children}</View>
  );
}

const AvailableForm = {
  Comment: getViewComment,
  Information: getViewInformation,
};

export default BaseMaskedView;
export {AvailableForm};
