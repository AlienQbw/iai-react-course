import { forwardRef } from 'react';

const Input = ({ initValue, type = 'text', name = '', condition }, ref) => {
  return (
    <input
      onInput={() => (condition ? condition() : '')}
      defaultValue={initValue}
      name={name}
      type={type}
      ref={ref}
    />
  );
};

export const InputRef = forwardRef(Input);
