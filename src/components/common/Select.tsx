type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  //value: string;
  onChange: (value: string) => void;
};

export const Select = ({ options, onChange }: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <select onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
