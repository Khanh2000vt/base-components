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
| 9 | suggestion | boolean, undefined | false | if true, suggest table price is show | undefined |
| 10 | autoCapitalize | autoCapitalize | false | autoCapitalize | undefined |
| 11 | propsOther | React.Component<TextInputProps> | false | Props other TextInput | undefined |
| 12 | style | StyleProp<ViewStyle>, undefined | false |  style TextInput | undefined |
| 13 | styleTitle | StyleProp<TextStyle>, undefined | false | style title TextInput | undefined |
| 14 | styleViewSuggestion | StyleProp<ViewStyle>, undefined | false | style view suggestion | undefined |
| 15 | styleOptionsSuggestion | StyleProp<ViewStyle>, undefined | false | style options suggestion | undefined |
| 16 | styleTextSuggestion | StyleProp<TextStyle>, undefined | false | style text suggestion | undefined |
| 17 | styleViewInput | StyleProp<ViewStyle>, undefined | false | style view cover TextInput | undefined |
| 18 | levelPasswords | 0,1,2,3 | false | The level security of password. Only use when `option = 'password'` | 0 |
| 18 | suggestion | boolean | undefined | false | show options suggestion if true. Only used when `option = price'` | false |
| 19 | backgroundColor | ColorValue, undefined | false | background color of screen | #f0f0f0 |
| 20 | value | string, undefined | true | value TextInput | undefined |
| 21 | comparePasswords | string, undefined | false | value comparePasswords will compare with value input. Only use when `option = 'confirm'`. | undefined |
| 22 | autoFocus | boolean, undefined | false | autoFocus TextInput | undefined |
# Note
## option
> Options: 'text' | 'number' | 'phone' | 'email' | 'price' | 'password'| 'confirm' | undefined;
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
## levelPasswords
- `0`: Độ dài mật khẩu phải lớn hơn 6.
- `1`: Và mật khẩu gồm thêm chữ và số.
- `2`: Và mật khẩu gồm thêm chữ cái chữ hoa.
- `3`: Và mật khẩu gồm thêm ký tự đặc biệt.
## backgroundColor
- Nên truyền props này để không bị lỗi view


