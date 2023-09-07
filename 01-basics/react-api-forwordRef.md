# React `forwardRef` API

`forwardRef` cho phép bạn truyền `ref` từ component cha xuống component con.

## Cách sử dụng `forwardRef`

`forwardRef` nhận vào 2 tham số là callback và options.

```js

const MyInput = forwardRef(function MyInput(props, ref) {
  // ...
});
```

