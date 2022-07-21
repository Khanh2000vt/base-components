/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import StepOrder from '../components/base-step/step-order';
import ScreenSecond from '../components/base-step/test-screens/screen-second';
import ScreenFirst from '../components/base-step/test-screens/screen-first';
import ScreenFourth from '../components/base-step/test-screens/screen-fourth';
import ScreenThird from '../components/base-step/test-screens/screen-third';
function TestStepScreen() {
  const test = [
    {
      id: 0,
      title: 'Screen 1',
      view: <ScreenFirst index={0} onPressNextPage={handlePressNextPage} />,
    },
    {
      id: 1,
      title: 'Screen 2 dsad asdas asdasdvsdfsdsdfsdf',
      view: <ScreenSecond index={1} onPressNextPage={handlePressNextPage} />,
    },
    {
      id: 2,
      title: 'Screen 3',
      view: <ScreenThird index={2} onPressNextPage={handlePressNextPage} />,
    },
    {
      id: 3,
      title: 'Screen 4',
      view: <ScreenFourth index={3} onPressNextPage={handlePressNextPage} />,
    },
    {
      id: 4,
      title: 'Screen 1',
      view: <ScreenFirst index={4} onPressNextPage={handlePressNextPage} />,
    },
    {
      id: 5,
      title: 'Screen 2',
      view: <ScreenSecond index={5} onPressNextPage={handlePressNextPage} />,
    },
    {
      id: 6,
      title: 'Screen 3',
      view: <ScreenThird index={6} onPressNextPage={handlePressNextPage} />,
    },
    {
      id: 7,
      title: 'Screen 4',
      view: <ScreenFourth index={7} onPressNextPage={handlePressNextPage} />,
    },
  ];

  //state
  const [progress, setProgress] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);

  //function
  function handlePressStep(_item: any, index: number) {
    setPosition(index);
  }

  function handlePressNextPage(index: number) {
    if (position < test.length - 1) {
      setPosition(position + 1);
    }
    if (index + 1 > progress) {
      setProgress(index + 1);
    }
  }
  return (
    <View style={{flex: 1}}>
      <StepOrder
        data={test}
        pageCurrent={progress}
        onPress={handlePressStep}
        // indexDisabled={test.length - 1}
        style={styles.stepOrder}
        position={position}
      />
      <View style={{flex: 1}}>{test[position].view}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
    // paddingHorizontal: 20,
    flex: 1,
  },
  stepOrder: {
    marginVertical: 10,
  },
});
export default TestStepScreen;
