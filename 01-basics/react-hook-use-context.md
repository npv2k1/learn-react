# React `useContext` Hook

`useContext` là một trong những hook cơ bản nhất trong React. Nó cho phép bạn truy cập vào context trong các component chức năng (functional component).

## React Context

`React Context` cung cấp một cách để chia sẻ giá trị giữa các thành phần mà không cần truyền giá trị qua các thành phần con.

## Cách sử dụng `useContext`

Trước khi sử dụng hook này bạn cần khai báo một context bằng cách sử dụng phương thức `React.createContext()`.

```js

const MyContext = React.createContext(defaultValue);
```

Sau khi khai báo thì `MyContext` thì chúng ta sẽ tạo Provider

```js
<MyContext.Provider value={/* some value */}>
```

Và sử dụng `useContext` để truy cập vào giá trị của context.

```js
const value = useContext(MyContext);
```

> Lưu ý: Nếu bạn muốn sử dụng `useContext` thì bạn cần phải đặt `MyContext.Provider` ở component cha của nó.