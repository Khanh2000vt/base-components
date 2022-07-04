// export default function TestScreen() {
//   const [modalVisible, setModalVisible] = useState(false);
//   function handlePress() {
//     console.log('Da an');
//     setModalVisible(true);
//   }

//   function handlePressItem(item: any) {
//     // setModalVisible(false);
//     console.log('Da an item: ', item);
//   }
//   return (
//     <BaseModal
//       style={styles.view}
//       data={test}
//       isVisible={modalVisible}
//       onModalClose={() => setModalVisible(false)}
//       onPressItem={handlePressItem}
//       ItemViewRender={ViewItemModal}
//       maxElementsShow={2}>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={handlePress}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={handlePress}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={handlePress}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </BaseModal>
//   );
// }

// const test = [
//   {
//     title: 'modal 1',
//     isSelected: false,
//   },
//   {
//     title: 'modal 2',
//     isSelected: false,
//   },
//   {
//     title: 'modal 3',
//     isSelected: true,
//   },
//   // {
//   //   title: 'modal 1',
//   //   isSelected: false,
//   // },
// ];

// const styles = StyleSheet.create({
//   view: {
//     flex: 1,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//     height: 200,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
