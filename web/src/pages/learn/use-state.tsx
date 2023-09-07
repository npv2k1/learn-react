import React, { useEffect, useState } from 'react';

const LearnUseStatePage = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(2);
  console.log('render');

  const onChange = () => {
    setState1((prev) => prev + 1);
    setState2((prev) => prev + 1);
    setState3((prev) => prev + 1);
  };

  useEffect(() => {
    console.log('render', state1, state2, state3);
  }, [state1, state2, state3]);

  return (
    <div>
      <div>State1: {state1}</div>
      <div>State2: {state2}</div>
      <div>State3: {state3}</div>
      <button onClick={onChange} className="btn">
        Change
      </button>
    </div>
  );
};

export default LearnUseStatePage;
