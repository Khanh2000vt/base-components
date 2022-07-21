import React from 'react';
import {StyleSheet, View} from 'react-native';
import BaseStatus from '../components/base-status/status-screen';

function TestStatusScreen() {
  return (
    <View style={styles.view}>
      <BaseStatus data={testAPI} />
    </View>
  );
}

const testAPI = [
  {
    title: 'Đã giao thành công',
    time: '17:30 08/07/2022',
    note: 'Đã giao thành công',
  },
  {
    title: 'Đang giao hàng',
    time: '17:25 08/07/2022',
    note: 'Dự kiến đến nơi vào lúc 17h30',
  },
  {
    title: 'Giao không thành công',
    time: '16:05 08/07/2022',
    note: 'Gọi điện khách hàng không trả lời',
  },
  {
    title: 'Đang giao hàng',
    time: '14:25 08/07/2022',
    note: 'Dự kiến đến nơi vào lúc 16h00. Vui lòng chú ý điện thoại',
  },
  {
    title: 'Đã lấy hàng',
    time: '14:25 08/07/2022',
    note: `Tài xế đã nhận được hàng của bạn. Kiện hàng của bạn sẽ được giao sớm. Bạn sẽ nhận được cuộc gọi từ:
Tài xế: Nguyễn Ngọc Khánh
Tel: 0983752000`,
  },
  {
    title: 'Đang lấy hàng',
    time: '14:00 08/07/2022',
    note: 'Dự kiến đến nơi vào lúc 14h30',
  },
  {
    title: 'Đã xác nhận',
    time: '13:00 08/07/2022',
    note: undefined,
  },
];

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default TestStatusScreen;
