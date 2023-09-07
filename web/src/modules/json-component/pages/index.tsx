import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';

function App() {
  const [iconComponents, setIconComponents] = useState<any>([]);

  const Icon = ({ data }: any) => {
    const d = JSON.parse(data);
    if (!d.props.children.type) return null;
    return React.createElement(
      d.type,
      { width: 60, height: 60, viewBox: '0 0 20 20', align: 'center' },
      React.createElement(d.props.children.type, {
        fill: d.props.children.props?.fill,
        d: d.props.children.props?.d,
      }),
    );
  };

  const createReactElement = (jsonObject: any): JSX.Element => {
    const { type, props } = jsonObject;

    let children = null;
    if (props.children) {
      if (Array.isArray(props.children)) {
        // If children is an array, recursively create React elements for each child.
        children = props.children.map((child: any) =>
          child.$$typeof === '$$Symbol:react.element' ? createReactElement(child) : child,
        );
      } else if (typeof props.children === 'object') {
        // If children is an object, recursively create React elements for the single child.
        children =
          props.children.$$typeof === '$$Symbol:react.element'
            ? createReactElement(props.children)
            : props.children;
      }
    }

    return React.createElement(type, { ...props, children });
  };

  useEffect(() => {
    (async () => {
      const _listIcons = await fetch('/modules/json-component/assets/icons.json').then((res) =>
        res.json(),
      );

      const icons = _listIcons.pageProps.icons.slice(0, 20).map((icon: any) => {
        // return createIcon(icon);
        return {
          name: icon.name,
          category: icon.category,
          item: createReactElement(JSON.parse(icon.item)),
        };
      });
      setIconComponents(icons);
    })();
  }, []);
  return (
    <div className="App">
      <div className="grid grid-cols-10 gap-3">
        {iconComponents &&
          iconComponents.map((item: any) => (
            <div className="border-1 flex flex-col items-center justify-center rounded-lg border p-3">
              {item.item}
              <div>{item.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
