/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text, FlatList, Image, Button} from 'react-native';
import BaseMaskedView, {
  AvailableForm,
} from '../components/base-masked-view/base-masked-view';
import {getRandomNumber} from '../components/base-masked-view/controller/masked-view-handle';
function TestMaskedView() {
  // init
  const array = new Array(10).fill('');
  const avt = require('../assets/img/avt-test.png');
  //state
  const [loading, onChangeLoading] = useState<boolean>(true);
  // flat list
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({item, index}: {item: any; index: number}) => (
    <View style={styles.viewItem} key={index}>
      <Image source={avt} style={styles.image} />
      <View style={styles.body}>
        <Text numberOfLines={2}>{item.title}</Text>
        <Text numberOfLines={1}>{item.nameShipper}</Text>
        <Text numberOfLines={1}>{item.engine}</Text>
      </View>
    </View>
  );
  // view show when loading. JSX.Element | JSX.Element[];
  const placeholderView: JSX.Element | JSX.Element[] = (
    <View>
      {array.map((_, index) => {
        return (
          <View style={styles.viewTest} key={index}>
            <View style={{width: 60, height: 60, borderRadius: 50}} />
            <View style={styles.body}>
              <View style={{width: 140, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 100, height: 20, borderRadius: 4}}
              />
              <View
                style={{marginTop: 6, width: 180, height: 20, borderRadius: 4}}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
  return (
    <View style={styles.view}>
      <Button title="Press Loading" onPress={() => onChangeLoading(true)} />
      <BaseMaskedView
        placeholderView={placeholderView}
        loading={loading}
        time={3000}
        onTimeEnding={onChangeLoading}
        backgroundColor="blue">
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </BaseMaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  viewItem: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  viewTest: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  circleTest: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    marginRight: 20,
  },
  avtTest: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green',
    marginRight: 20,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  body: {
    marginLeft: 20,
  },
});

const data = [
  {
    id: 1,
    title: 'Máy tính',
    nameShipper: 'Khánh Macro',
    engine: '29V1-55822',
  },
  {
    id: 2,
    title: 'Quần áo',
    nameShipper: 'Jack Lục Quân',
    engine: '26S1-12423',
  },
  {
    id: 3,
    title: 'Hoa hồng',
    nameShipper: 'Dũng Hà Đông',
    engine: '29T1-56788',
  },
  {
    id: 4,
    title: 'Rau',
    nameShipper: 'Của Nợ',
    engine: '29B-31243',
  },
  {
    id: 5,
    title: 'Trà sữa',
    nameShipper: 'Khánh Sky',
    engine: '88A1-56429',
  },
  {
    id: 6,
    title: 'Cơm rang',
    nameShipper: 'Hải Bánh',
    engine: '24U1-96953',
  },
  {
    id: 7,
    title: 'Người yêu',
    nameShipper: 'Huấn Hoa Hồng',
    engine: '98Y1-34943',
  },
  {
    id: 8,
    title: 'Gì cũng được',
    nameShipper: 'Ngô Bá Khá',
    engine: '16E1-69584',
  },
  {
    id: 9,
    title: 'Máy tính',
    nameShipper: 'Khánh Macro',
    engine: '29V1-55822',
  },
  {
    id: 10,
    title: 'Quần áo',
    nameShipper: 'Jack Lục Quân',
    engine: '26S1-12423',
  },
  {
    id: 11,
    title: 'Hoa hồng',
    nameShipper: 'Dũng Hà Đông',
    engine: '29T1-56788',
  },
  {
    id: 12,
    title: 'Rau',
    nameShipper: 'Của Nợ',
    engine: '29B-31243',
  },
  {
    id: 13,
    title: 'Trà sữa',
    nameShipper: 'Khánh Sky',
    engine: '88A1-56429',
  },
  {
    id: 14,
    title: 'Cơm rang',
    nameShipper: 'Hải Bánh',
    engine: '24U1-96953',
  },
  {
    id: 15,
    title: 'Người yêu',
    nameShipper: 'Huấn Hoa Hồng',
    engine: '98Y1-34943',
  },
  {
    id: 16,
    title: 'Gì cũng được',
    nameShipper: 'Ngô Bá Khá',
    engine: '16E1-69584',
  },
  {
    id: 17,
    title: 'Máy tính',
    nameShipper: 'Khánh Macro',
    engine: '29V1-55822',
  },
  {
    id: 18,
    title: 'Quần áo',
    nameShipper: 'Jack Lục Quân',
    engine: '26S1-12423',
  },
  {
    id: 19,
    title: 'Hoa hồng',
    nameShipper: 'Dũng Hà Đông',
    engine: '29T1-56788',
  },
  {
    id: 20,
    title: 'Rau',
    nameShipper: 'Của Nợ',
    engine: '29B-31243',
  },
  {
    id: 21,
    title: 'Trà sữa',
    nameShipper: 'Khánh Sky',
    engine: '88A1-56429',
  },
  {
    id: 22,
    title: 'Cơm rang',
    nameShipper: 'Hải Bánh',
    engine: '24U1-96953',
  },
  {
    id: 23,
    title: 'Người yêu',
    nameShipper: 'Huấn Hoa Hồng',
    engine: '98Y1-34943',
  },
  {
    id: 24,
    title: 'Gì cũng được',
    nameShipper: 'Ngô Bá Khá',
    engine: '16E1-69584',
  },
];
export default TestMaskedView;

{
  /* {array.map((_, index) => {
        return (
          <View style={{paddingVertical: 10}} key={index}>
            <BaseMaskedView
              placeholderView={AvailableForm.Comment(getRandomNumber(100, 40))}
              loading={loading}
              onTimeEnding={onChangeLoading}>
              <View style={styles.viewTest}>
                <View style={styles.avtTest} />
                <Text>Test AvailableForm.Comment </Text>
              </View>
            </BaseMaskedView>
          </View>
        );
      })}
      {array.map((_, index) => {
        return (
          <View style={{paddingVertical: 10}} key={index}>
            <BaseMaskedView
              placeholderView={AvailableForm.Information(3)}
              onTimeEnding={onChangeLoading}
              loading={loading} // JSX.Element
              time={3000} // set time show data
              backgroundColor="blue"
              highlightColor="red">
              <View style={styles.viewTest}>
                <View style={styles.circleTest} />
                <View>
                  <Text>Test Title</Text>
                  <Text>Test AvailableForm.Information</Text>
                  <Text>Test AvailableForm.Information 2</Text>
                </View>
              </View>
            </BaseMaskedView>
          </View>
        );
      })} */
}
