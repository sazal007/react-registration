import { useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {errors[name] && (
        <span className="error">{errors[name]?.message as string}</span>
      )}
    </div>
  );
};

export default Input;
