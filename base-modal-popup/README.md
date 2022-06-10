# Props của Base Popup
| STT | Props | Kiểu | Bắt buộc | Mô tả | Giá trị mặc định
| :----:|:-------------:|:---------:|:-----------:|:------------------:|:------------------:|
| 1 | data | any[] | true | Là một mảng cho popup hiện thị | |
| 2 | onPressItem | (item: any, refLayout?: any) => void | true | Callback function khi ấn vào item trong popup | |
| 3 | ItemViewRender | any | true | Giao diện của item trong popup | |
| 4 | option | Options | true | Vị trí của popup hiện thị so với Layout | |
| 5 | heightPopup | number, undefined | false | Chiều cao của popup | (*) |
| 6 | widthPopup | number, undefined | false | Chiều rộng của popup | 120 |
| 7 | refLayout | any, undefined, null | true | ref của Layout | |
| 8 | heightItem | number, undefined | false | Chiều cao của 1 item trong popup | 50 |
| 9 | maxElementsShow | number, undefined | false | Số lượng item hiện thị của popup | 5 |
| 10 | isShowPopup | boolean | true | Khi đúng thì popup hiện thị | |
| 11 | onPressCenteredView | any | true | Callback khi ấn vào diện tích ngoài khác popup | |
| 12 | offsetScroll | number, undefined | false | Cờ để cho popup render lại  | 0 |
| 13 | flag | boolean, undefined | false | Cờ để cho popup render lại | |


Chỉ sử dụng khi sử dụng popup ở PagerView (dạng màn hình vuốt) - là số pager đang hiện thị