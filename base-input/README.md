# Props của Base Popup
| STT | Props | Kiểu | Bắt buộc | Mô tả | Giá trị mặc định
| :----:|:-------------:|:---------:|:-----------:|:------------------:|:------------------:|
| 1 | option | Options | false | options TextInput | text |
| 2 | title | string, undefined | false | title above TextInput | undefined |
| 3 | placeholder | string, undefined | false | placeholder TextInput | undefined |
| 4 | onChangeText | (text: string) => void, undefined | false | onChangeText TextInput | undefined |
| 5 | defaultValue | string, undefined | false | defaultValue TextInput | undefined |
| 6 | onEndEditing | (nativeEvent: any, isErrorInput: boolean) => void, undefined | false | onEndEditing TextInput | undefined |
| 7 | onRef | any, undefined, null | false | ref TextInput | |
| 8 | multiline | boolean, undefined | false | multiline TextInput | undefined |
| 9 | secureTextEntry | boolean, undefined | false | secureTextEntry TextInput | undefined |
| 10 | autoCapitalize | autoCapitalize | false | autoCapitalize | undefined |
| 11 | propsOther | React.Component<TextInputProps> | false | Props other TextInput | undefined |
| 12 | style | StyleProp<ViewStyle>, undefined | false |  style TextInput | undefined |
| 13 | styleTitle | StyleProp<TextStyle>, undefined | false | style title TextInput | undefined |
| 14 | styleViewSuggestion | StyleProp<ViewStyle>, undefined | false | style view suggestion | undefined |
| 15 | styleOptionsSuggestion | StyleProp<ViewStyle>, undefined | false | style options suggestion | undefined |
| 16 | styleTextSuggestion | StyleProp<TextStyle>, undefined | false | style text suggestion | undefined |
| 17 | styleViewInput | StyleProp<ViewStyle>, undefined | false | style view cover TextInput | undefined |
| 18 | offsetMarginSuggestion | number | false | sum margin vertical of styleViewSuggestion | 0 |
| 18 | suggestion | boolean | undefined | false | show options suggestion if true. Only used when `option = price` | false |
| 19 | backgroundColor | ColorValue, undefined | false | background color of screen | #f0f0f0 |
# Note
## option
> Options: 'text' | 'number' | 'phone' | 'email' | 'price' | undefined;
## onEndEditing
### isErrorInput
- Dùng để kiểm tra xem giá trị nhập vào có đúng định dạng không mỗi khi onEndEditing hay không.
- Nếu là `true` thì giá trị nhập vào không đúng định dạng với option.
## propsOther
- Các Props khác của TextInput nếu cần thêm.
- Vì có các loại Props đã được sử dụng ngay bên ngoài. Nên là không sử dụng lại các Props này trong propsOther.
- Các loại Props không nên thêm là: `placeholder, onChangeText, defaultValue, onSubmitEditing, multiline, secureTextEntry, autoCapitalize, style`
## styleViewSuggestion
- Giá trị mặc định của `height` là `30`.
- Không nên đặt giá trị height theo kiểu phần trăm vì có thể gây lỗi không đáng có.
## offsetMarginSuggestion
- Tổng hần bù margin vertical của styleViewSuggestion.
- Để tránh sự biến đổi giao diện của màn hình thì nên tính toán đúng.
## backgroundColor
- Nên chuyển props này để không bị lỗi view

