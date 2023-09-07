# React `useEffect` Hook

`useEffect` là một trong những hook cơ bản nhất trong React. Nó cho phép bạn thực hiện các tác vụ phụ (side effects) trong các component chức năng (functional component). Các tác vụ phụ có thể là các tác vụ như gọi API, đăng ký sự kiện, hoặc thay đổi DOM trực tiếp.

## Cách sử dụng `useEffect`

Để sử dụng `useEffect`, bạn cần nhập nó từ thư viện React:

```js

import React, { useEffect } from 'react';
```

Sau đó, bạn có thể gọi `useEffect` trong component của mình:

```js

useEffect(() => {
  // effect -> Nếu không có dependencies, thì nó chỉ thực hiện lần đầu tiên khi component được render; Khi có dependencies, nó sẽ thực hiện mỗi khi dependencies thay đổi
  return () => {
    // cleanup -> Hàm sẽ được thực thi trước khi chạy effect lần tiếp theo; Một số ví dụ: hủy đăng ký sự kiện, hủy đăng ký timeout, hủy đăng ký interval
  }
},[dependencies]);

```
