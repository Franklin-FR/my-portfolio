
type TextAreaFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextAreaField = ({ label, name, placeholder, value, onChange }: TextAreaFieldProps) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default TextAreaField;


