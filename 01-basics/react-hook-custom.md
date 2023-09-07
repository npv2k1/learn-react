# Tự custom react hook

Bạn có thể tự xây dựng một hook riêng của mình bằng cách kết hợp các hook cơ bản và logic của bạn.

Ví dụ, bạn có thể tạo một hook để lấy dữ liệu từ API và lưu trữ nó trong state của component.

```js

import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;

    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};

const App = () => {
  const { data, loading } = useFetch('https://api.randomuser.me/');

  return (
    <div>
      {loading ? <div>loading...</div> : <div>{data.name.first}</div>}
    </div>
  );
};

export default App;
```

> Nó hưu ích khi bạn muốn sử dụng logic của mình trong nhiều component khác nhau.