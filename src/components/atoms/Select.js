const Select = ({ action, options, value, children }) => {
  return (
    <select value={value} onChange={(e) => action(e)} name={children ? children : ''}>
      {options.map((option) => (
        <option key={Math.random() + option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
