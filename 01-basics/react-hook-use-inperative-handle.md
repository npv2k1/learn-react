# React `useImperativeHandle` Hook

`useImperativeHandle` cho phép bạn tùy chỉnh các phần xử lý được export bằng `ref`

## Cách sử dụng `useImperativeHandle`

useImperativeHandle` nhận vào 3 tham số là ref, createHandle và dependencies.

```js
import { forwardRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      // ... your methods ...
    };
  }, []);
  // ...
```