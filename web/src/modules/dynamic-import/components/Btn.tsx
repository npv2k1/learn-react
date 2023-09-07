import React, { useEffect } from 'react'

export type BtnProps = {
  name: string
}

const Btn = ({name}: BtnProps) => {
  
  const [component, setComponent] = React.useState<any>(null);

  useEffect(() => {
    import(`./${name}`).then((module) => {
      setComponent(module.default);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  if (component) return component;
  return <div>loading...</div>;
}

export default Btn