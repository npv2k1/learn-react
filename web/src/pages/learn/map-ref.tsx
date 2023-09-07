import React, { useMemo } from 'react';

const LearnMapRef = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [listInputComponent, listInputRef] = useMemo(() => {
    const _listInputRef: HTMLInputElement[] = [];
    const listInputComponent = Array(12)
      .fill(0)
      .map((item, index) => {
        return (
          <div>
            <input
              ref={(ref) => ref && (_listInputRef[index] = ref)}
              placeholder={`${index}`}
              className="input"
              key={index}
            />
          </div>
        );
      });
    return [listInputComponent, _listInputRef];
  }, [inputRef]);

  const handleClick = () => {
    const value = inputRef.current?.value;
    console.log('click', value);
    const _inputRef = listInputRef[Number(value)];
    console.log("🚀 ~ file: map-ref.tsx:28 ~ handleClick ~ _inputRef:", _inputRef)
    _inputRef?.focus();
  };

  return (
    <div>
      <div>
        <input ref={inputRef} placeholder="0" className="input" />
        <button onClick={handleClick}>Focus</button>
      </div>
      <div className="grid grid-cols-3 gap-2">{listInputComponent}</div>
    </div>
  );
};

export default LearnMapRef;
