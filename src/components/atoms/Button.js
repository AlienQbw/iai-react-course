const Button = ({ action, props, type = 'button', value = 'click me', clsNme }) => {
  const doAction = (e) => {
    props ? action(props, e) : action(e);
  };
  return (
    <input
      type={type}
      onClick={(e) => (action ? doAction(e) : console.log('Define action'))}
      value={value}
      className={clsNme}
    />
  );
};
export default Button;
