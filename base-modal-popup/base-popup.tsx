/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import BaseFlatList from './base-flat-list';
import {KeyCase} from './case-option';

type Options = 'top' | 'bottom' | 'left' | 'right' | 'default';
interface Props {
  OnViewPicker: any;
  data: any;
  onPress?: any;
  ItemViewRender: any;
  option?: Options | undefined;
  heightPopup?: number | undefined;
  widthPopup?: number | undefined;
  optionSelected: string | undefined;
  sizeRoot: any;
  sizePopup: any;
}
export default function BaseModalPicker({
  OnViewPicker,
  data,
  onPress,
  ItemViewRender,
  option,
  heightPopup = 100,
  widthPopup = 100,
  optionSelected = 'Select',
  sizeRoot,
  sizePopup,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [layoutPopup, setLayoutPopup] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [viewRoot, setViewRoot] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  console.log('child: ', sizePopup.x);
  console.log('root: ', sizeRoot);
  useEffect(() => {
    setViewRoot(sizeRoot);
    setLayoutPopup(sizePopup);
  }, [sizeRoot, sizePopup]);

  //tính toán vị trí tương đối của layout popup.
  const distanceRight = viewRoot.width - (layoutPopup.x + layoutPopup.width);
  const distanceBottom = viewRoot.height - (layoutPopup.y + layoutPopup.height);
  const relativeWidth =
    layoutPopup.x + layoutPopup.width > viewRoot.width - layoutPopup.x;
  const relativeHeight =
    layoutPopup.y + layoutPopup.height > viewRoot.height - layoutPopup.y;

  //Lấy vị trí của view cha.
  // function onViewRoot(event: LayoutChangeEvent) {
  // const {x, y, height, width} = event.nativeEvent.layout;
  // const newStateRoot = {
  //   x: x,
  //   y: y,
  //   height: height,
  //   width: width,
  // };
  // setViewRoot(newStateRoot);
  // }

  // //Lấy vị trí của button popup.
  // function onLayoutPopup(event: LayoutChangeEvent) {
  // const {x, y, height, width} = event.nativeEvent.layout;
  // const newStateChild = {
  //   x: x,
  //   y: y,
  //   height: height,
  //   width: width,
  // };
  // setLayoutPopup(newStateChild);
  // }

  //Hàm sẽ được chạy nếu prop option không được khai báo.
  function handleOptionIsDefault() {
    const tempHeight = viewRoot.height / 2;
    const tempWidth = viewRoot.width / 2;
    if (layoutPopup.width > tempWidth) {
      if (layoutPopup.y < tempHeight) {
        if (relativeWidth) {
          return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
        } else {
          return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
        }
      } else {
        if (relativeWidth) {
          return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
        } else {
          return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
        }
      }
    } else {
      if (layoutPopup.x < tempWidth) {
        if (layoutPopup.y < tempHeight) {
          if (distanceRight < widthPopup) {
            return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
          } else {
            return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
          }
        } else {
          if (layoutPopup.x < widthPopup) {
            return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
          } else {
            return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
          }
        }
      } else {
        if (layoutPopup.y < tempHeight) {
          console.log('Da di vao day');
          if (distanceRight < widthPopup) {
            return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
          } else {
            return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
          }
        } else {
          if (distanceRight < widthPopup) {
            return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
          } else {
            return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
          }
        }
      }
    }
  }

  function handleRelativeWidth() {
    if (layoutPopup.y < heightPopup) {
      if (relativeWidth) {
        return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
      } else {
        return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
      }
    } else {
      if (relativeWidth) {
        return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
      } else {
        return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
      }
    }
  }

  function handleRelativeHeight() {
    if (layoutPopup.x < widthPopup) {
      if (relativeHeight) {
        return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
      } else {
        return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
      }
    } else {
      if (relativeHeight) {
        return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
      } else {
        return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
      }
    }
  }

  //Hàm sẽ được chạy nếu prop option được khai báo.
  function handleOptionIsProp() {
    if (option === 'left') {
      if (layoutPopup.x < widthPopup) {
        if (distanceRight < widthPopup) {
          return handleRelativeWidth();
        } else {
          if (layoutPopup.y + layoutPopup.height < heightPopup) {
            return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
          } else {
            return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
          }
        }
      } else {
        if (layoutPopup.y + layoutPopup.height < heightPopup) {
          return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
        } else {
          return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
        }
      }
    } else if (option === 'right') {
      if (distanceRight < widthPopup) {
        if (layoutPopup.x < widthPopup) {
          return handleRelativeWidth();
        } else {
          if (layoutPopup.y + layoutPopup.height < heightPopup) {
            return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
          } else {
            return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
          }
        }
      } else {
        if (layoutPopup.y + layoutPopup.height < heightPopup) {
          return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
        } else {
          return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
        }
      }
    } else if (option === 'top') {
      if (layoutPopup.y < heightPopup) {
        if (distanceBottom < heightPopup) {
          return handleRelativeHeight();
        } else {
          if (layoutPopup.x + layoutPopup.width < widthPopup) {
            return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
          } else {
            return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
          }
        }
      } else {
        if (layoutPopup.x + layoutPopup.width < widthPopup) {
          return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
        } else {
          return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
        }
      }
    } else if (option === 'bottom') {
      if (distanceBottom < heightPopup) {
        if (layoutPopup.y < heightPopup) {
          return handleRelativeHeight();
        } else {
          if (layoutPopup.x + layoutPopup.width < widthPopup) {
            return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
          } else {
            return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
          }
        }
      } else {
        if (layoutPopup.x + layoutPopup.width > widthPopup) {
          return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
        } else {
          return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
        }
      }
    }
  }

  //Hàm tính toán các thông số của popup theo từng trường hợp.
  function onSelectOption() {
    console.log('view: ', viewRoot);
    console.log('layout: ', layoutPopup);
    let value;
    if (option && option !== 'default') {
      value = handleOptionIsProp();
    } else {
      value = handleOptionIsDefault();
    }
    if (value === KeyCase.TOP_LEFT_OF_BOTTOM_LEFT) {
      console.log('option 1');
      return {
        top: layoutPopup.y,
        right: viewRoot.width - layoutPopup.x,
      };
    } else if (value === KeyCase.TOP_LEFT_OF_TOP_RIGHT) {
      console.log('option 2');
      return {
        bottom: viewRoot.height - layoutPopup.y,
        left: layoutPopup.x,
      };
    } else if (value === KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT) {
      console.log('option 3');
      return {
        top: layoutPopup.y,
        left: layoutPopup.x + layoutPopup.width,
      };
    } else if (value === KeyCase.TOP_RIGHT_OF_TOP_LEFT) {
      console.log('option 4');
      return {
        bottom: viewRoot.height - layoutPopup.y,
        right: distanceRight,
      };
    } else if (value === KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT) {
      console.log('option 5');
      return {
        top: layoutPopup.y + layoutPopup.height,
        left: layoutPopup.x,
      };
    } else if (value === KeyCase.BOTTOM_LEFT_OF_TOP_LEFT) {
      console.log('option 6');
      return {
        bottom: distanceBottom,
        right: viewRoot.width - layoutPopup.x,
      };
    } else if (value === KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT) {
      console.log('option 7');
      return {
        top: layoutPopup.y + layoutPopup.height,
        right: distanceRight,
      };
    } else if (value === KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT) {
      console.log('option 8');
      return {
        bottom: distanceBottom,
        left: layoutPopup.x + layoutPopup.width,
      };
    }
  }

  return (
    <View>
      <View>
        <Pressable
          style={styles.container}
          onPress={() => setModalVisible(true)}>
          <OnViewPicker title={optionSelected} />
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Pressable
            style={[
              StyleSheet.absoluteFill,
              {backgroundColor: 'rgba(0, 0, 0, 0.4)'},
            ]}
            onPress={() => setModalVisible(false)}
          />
          <View
            style={[
              styles.modalView,
              onSelectOption(),
              {width: widthPopup, height: heightPopup},
            ]}>
            <BaseFlatList
              data={data}
              ItemViewRender={ItemViewRender}
              onPress={(item: any) => {
                setModalVisible(false);
                onPress(item);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
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
