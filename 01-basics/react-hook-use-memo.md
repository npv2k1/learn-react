# React `useMemo` Hook

`useMemo` cho phép bạn nhớ lại giá trị của một biến sau mỗi lần render. Nếu không có `useMemo`, thì mỗi khi component được render lại thì giá trị của biến sẽ được tính lại.

## Cách sử dụng `useMemo`

`useMemo` nhận vào 2 tham số là callback và dependencies.

```js

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

`useMemo` sẽ trả về một giá trị được nhớ lại. Nếu dependencies thay đổi thì giá trị sẽ được tính lại.