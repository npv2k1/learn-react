# React `memo` API

`memo` cho phép bạn tạo ra một phiên bản được memoize của một component function. Nó sẽ chỉ render lại component nếu props của nó thay đổi.


## Cách sử dụng `memo`

`memo` nhận vào một component function và trả về một phiên bản được memoize của component đó.

```js

const MyComponent = memo(function MyComponent(props) {
  /* render using props */
});
```
