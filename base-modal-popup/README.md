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

# Giải thích chi tiết các Props
## data
* Gồm 1 mảng gồm các phần tử có dạng như sau:
```js
    {
        id: number;
        title: string;
        isSelected: boolean;
    }
```
* Xử lý khi hiện thị ở popup như sau (Đây là ví dụ). Hàm callBack sự kiện ấn của layout
- Nên để `isSelected` của tất cả phần tử là `false`
- item: là phần tử đã chọn lúc trước.
- data: là mảng data dữ liệu gốc.
- Làm như vậy thì sẽ có dấu tích ở cạnh item đã chọn khi bật popup mà không làm thay đổi cấu trúc data

> Có nhiều cách xử lý.
```js
//item: là phần tử
function handleSelectPopup(item: any, data: any) {
  let index = data.indexOf(item);
  console.log('index: ', index);
  let popup = [
    ...data.slice(0, index),
    {
      ...item,
      isSelected: true,
    },
    ...data.slice(index + 1),
  ];
  return popup;
}
```

## onPressItem
* item: là phần tử đã chọn trong popup
* refLayout: là ref của Layout muốn hiện popup.
  - Thường sẽ dùng biến này khi sử dụng 1 popup cho nhiều Layout.

## ItemViewRender
* Function component nên có props sau để có được hiệu quả tốt, không bị lỗi.
```js
{
    item: any;
    onPress: (item: any) => void;
    sizeItem: {
        height: number;
        width: number;
    };
    index: number;
}
```

## option
```js
type Options =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
  | 'center-left'
  | 'center-right'
  | 'center-bottom'
  | 'center-top';
```
## heightPopup
* Nếu không truyền giá trị cho `heightPopup` thì nó sẽ hiện thị theo `maxElementsShow`

## offsetScroll
* Chỉ sử dụng khi sử dụng popup ở PagerView (dạng màn hình vuốt) - là số pager đang hiện thị.
