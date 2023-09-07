# React `useReducer` Hook

`useReducer` tương tự `useState` nhưng nó cho phép bạn quản lý nhiều state với trạng thái phức tạp.


## Cách sử dụng `useReducer`

`useReducer` nhận vào 2 tham số là reducer và initialState.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

`reducer` là một hàm nhận vào 2 tham số là state và action và trả về state mới.

```js

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
};

```
