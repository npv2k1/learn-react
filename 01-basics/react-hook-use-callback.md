# React `useCallback` Hook

`useCallback` cho phép bạn khai báo hàm và nhớ lại hàm đó, nó sẽ trả về một phiên bản hàm được nhớ lại đó. Nếu không có `useCallback`, thì mỗi khi component được render lại thì hàm sẽ được tạo lại.

## Cách sử dụng `useCallback`

`useCallback` nhận vào 2 tham số là callback và dependencies.

```js

const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

`useCallback` sẽ trả về một phiên bản hàm được nhớ lại. Nếu dependencies thay đổi thì hàm sẽ được tạo lại.