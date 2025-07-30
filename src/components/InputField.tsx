
type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default InputField;

