import { useFormContext } from "react-hook-form";

interface DateInputProps {
  name: string;
  label: string;
}

const Date: React.FC<DateInputProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="date" {...register(name)} />
      {errors[name] && (
        <span className="error">{errors[name]?.message as string}</span>
      )}
    </div>
  );
};

export default Date;
