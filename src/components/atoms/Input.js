import Label from "./Label";

const Input = ({ name, behavior, value, type = "text" }) => {
  return (
    <>
      <input value={value} onChange={(e) => behavior(e)} name={name} type={type} />
    </>
  );
};
export default Input;
