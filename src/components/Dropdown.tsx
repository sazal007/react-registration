import { useFormContext } from "react-hook-form";

interface DropdownProps {
  name: string;
  label: string;
  options: string[];
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  label,
  options,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="dropdown">
      <label>{label}</label>
      <select {...register(name)}>
        <option value="" className="text-gray-500">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[name] && (
        <span className="error">{errors[name]?.message as string}</span>
      )}
    </div>
  );
};

export default Dropdown;
