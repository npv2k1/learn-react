# React `useRef` Hook

`useRef` là một trong những hook cơ bản nhất trong React. Nó cho phép bạn lưu trữ và truy cập vào các tham chiếu (references) của các thành phần DOM trong các functional component. 

`useRef` cũng cho phép bạn lưu trữ các giá trị bên trong của một biến, mà giá trị đó không thay đổi sau mỗi lần render. Khi bạn thay đổi giá trị của biến, component sẽ không được render lại.

## Cách sử dụng `useRef`

Để sử dụng `useRef`, bạn cần nhập nó từ thư viện React:

```js

import React, { useRef } from 'react';
```

Sau đó, bạn có thể gọi `useRef` trong component của mình:

```js

const refContainer = useRef(initialValue);
```

> `useRef` luôn trả về một đối tượng ref. Đối tượng này có một thuộc tính `current` mà bạn có thể sử dụng để truy cập vào giá trị của biến.
