# React `lazy` API

`lazy` cho phép bạn tải component theo cách lười biếng (lazy way). Nó sẽ chỉ tải component khi nó được sử dụng.

## Cách sử dụng `lazy`

Để sử dụng `lazy`, bạn cần nhập nó từ thư viện React:

```js

import React, { lazy } from 'react';
```

Sau đó, bạn có thể gọi `lazy` trong component của mình:

```js

const OtherComponent = lazy(() => import('./OtherComponent'));
```

VD:

```js
import { useState, Suspense, lazy } from 'react';
import Loading from './Loading.js';

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));

export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('Hello, **world**!');
  return (
    <>
      <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
      <label>
        <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
```