"use client"

const TextInput = ({
  labelText,
  inputId,
  defaultValue, 
  onChange
}: {
  labelText: string;
  inputId: string;
  defaultValue?: string;
  onChange?: any;
}) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <label>{labelText}</label>
      <input id={inputId} defaultValue={defaultValue} onChange={onChange} />
    </div>
  );
};
export default TextInput;
