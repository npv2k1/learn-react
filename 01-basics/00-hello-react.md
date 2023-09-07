# Giới thiệu react

## React là gì?

**React** là frontend framework đôi khi là một thư viện JavaScript mã nguồn mở cho việc xây dựng các giao diện người dùng (UI). Nó được phát triển bởi Facebook và được sử dụng bởi nhiều công ty công nghệ hàng đầu thế giới.

## Cách react hoạt động

React tạo một DOM VIRTUAL trong bộ nhớ. Nó sẽ cập nhật DOM thực tế chỉ khi cần thiết. Điều này giúp tăng hiệu suất ứng dụng.

## React DOM

React DOM là một thư viện JavaScript độc lập để hiển thị các thành phần React với DOM thực tế.

React DOM sử dụng phương thức `render()` của nó để hiển thị các thành phần React.

```js

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));

```

## JSX

JSX Là viết tắt của JavaScript XML. Nó là một phần mở rộng cú pháp cho JavaScript. Nó cho phép chúng ta viết HTML trong JavaScript.

```jsx

const element = <h1>Hello, world!</h1>;

```

Nếu không muốn sử dụng cú pháp JSX, chúng ta có thể sử dụng phương thức `React.createElement()` để tạo các thành phần React.

```js

const element = React.createElement('h1', {}, 'Hello, world!');

```

Trong JSX bạn có thể viết biểu thức bên trong `{}`.

```jsx

const name = 'John Doe';
const element = <h1>Hello, {name}</h1>;

```

Các phần tử JSX luôn được bao bọc bởi một phần tử cha. Nếu bạn không muốn sử dụng phần tử cha, bạn có thể sử dụng `React.Fragment` hoặc sử dụng `<></>`.

```jsx

const element = (
  <React.Fragment>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </React.Fragment>
);

```

Các thẻ của JSX phải được đóng.

```jsx

const element = <img src={user.avatarUrl} />;

```

Cách khai báo thuộc tính trong JSX.

```jsx

const element = <img src={user.avatarUrl} alt="User Avatar" />;

```

> Lưu ý: Vì JSX tương đối giống với HTML, vì vậy React DOM sử dụng thuộc tính **camelCase** thay vì tên thuộc tính HTML. vd: onclick -> onClick, tabindex -> tabIndex

> Ví dụ: `class` trở thành `className` trong JSX

Xử lý điều kiện trong JSX

```jsx

const element = <h1>{user.isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>;

```

## React component

React component là một phần của giao diện người dùng. Nó có thể được hiểu như một hàm JavaScript. Nó có thể nhận đầu vào là các thuộc tính (props) và trả về các thành phần React để hiển thị.

```jsx

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

```


## React props

React props là các thuộc tính của một thành phần React. Nó được sử dụng để truyền dữ liệu giữa các thành phần React.

```jsx

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="John Doe" />;

```

## React state

React state là một đối tượng JavaScript chứa các thuộc tính của một thành phần React. Nó được sử dụng để lưu trữ các giá trị có thể thay đổi của một thành phần React.

```jsx

export function Counter(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

```

> Ở trên chúng ta sử dụng `useState` để khởi tạo state. `useState` là một hook của React.