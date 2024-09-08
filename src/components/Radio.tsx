import { useFormContext } from "react-hook-form";

interface RadioGroupProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

const Radio: React.FC<RadioGroupProps> = ({ name, label, options }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="radio-group mb-4">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>

      <div className="flex items-center space-x-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              defaultChecked={option.value === "Male"}
              className="form-radio text-[#4DAF4E] focus:ring-[#4DAF4E]"
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>

      {errors[name] && (
        <span className="text-red-500 text-sm mt-2">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Radio;
