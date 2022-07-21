# BaseMaskedView

## Props

### children

- type: `React.ReactNode`
- Là view sẽ hiển thị khi `loading = false`.

### placeholderView

- type: `JSX.Element | JSX.Element[]`
- Là view sẽ hiển thị khi `loading = true`.

### loading

- type: `boolean` (bắt buộc)
- Khi `loading = true` thì hiển thị `placeholderView`. Khi `loading = false` thì hiển thị `children`.

### time

- type: `number | undefined`
- Giá trị mặc định: `undefined`.
- Khoảng thời gian hiển thị `placeholderView` trước khi hiển thị `children`.
- Nếu `time = undefined` thì `placeholderView` sẽ được hiển thị đến bao giờ `loading = false`.

### onTimeEnding

- type: `(flag: false) => void | undefined`
- Hàm gọi về có 1 biến mang giá trị false khi hết `time`.
- Thường được gán bằng setState cho loading.

### backgroundColor

- type: `ColorValue | undefined`
- Giá trị mặc định: `#E1E9EE`
- Giá trị màu của nền `placeholderView`.

### highlightColor

- type: `ColorValue | undefined`
- Giá trị mặc định: `#F2F8FC`
- Giá trị màu hiệu ứng của `placeholderView`.

### speed

- type: `number | undefined`
- Giá trị mặc định: `800`.
- Tốc của của hiệu ứng `highlightColor`.

### direction

- type: : `'left' | 'right'`
- Giá trị mặc định: `right`.
- Chiều chuyển động của `highlightColor`.

# MaskedPlaceholder

## Props

### children

- Type: `JSX.Element | JSX.Element[]`
- Là view hiển thị.

### backgroundColor

- type: `ColorValue | undefined`
- Giá trị mặc định: `#E1E9EE`
- Giá trị màu của nền `placeholderView`.

### highlightColor

- type: `ColorValue | undefined`
- Giá trị mặc định: `#F2F8FC`
- Giá trị màu hiệu ứng của `placeholderView`.

### speed

- type: `number | undefined`
- Giá trị mặc định: `800`.
- Tốc của của hiệu ứng `highlightColor`.

### direction

- type: : `'left' | 'right'`
- Giá trị mặc định: `right`.
- Chiều chuyển động của `highlightColor`.
