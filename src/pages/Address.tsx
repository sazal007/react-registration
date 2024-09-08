import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { addressSchema } from "../utils/validation";
import Dropdown from "../components/Dropdown";
import { useFormContextData } from "../context/FormContext";

const Address = () => {
  const { formData, setFormData } = useFormContextData();
  const methods = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: formData.personalDetails,
  });

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    setFormData((prev) => ({
      ...prev,
      addressDetails: data,
    }));
    navigate("/profile-picture");
  };

  return (
    <>
      <ProgressBar steps={[1, 2, 3, 4]} currentStep={2} />
      <div className="glassmorphism h-[426px]">
        <h1 className="text-3xl font-bold mb-6">Address</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex justify-evenly align-center gap-6 mt-10">
              <Dropdown
                name="country"
                label="Country"
                placeholder="Eg : Nepal"
                options={["Nepal", "India", "USA", "UK", "Canada"]}
              />
              <Dropdown
                name="district"
                label="District"
                placeholder="Eg : Kathmandu"
                options={["Kathmandu", "Lalitpur", "Pokhara", "Bhaktapur"]}
              />
              <Dropdown
                name="municipality"
                label="Municipality/Local"
                placeholder="Eg : Lalitpur"
                options={["Kathmandu", "Lalitpur", "Pokhara", "Bhaktapur"]}
              />
            </div>
            <div className="flex gap-6 align-center mt-3">
              <Input
                name="city"
                label="City"
                placeholder="Eg : Kathmandu"
                type="text"
              />

              <Input name="ward" label="Ward" placeholder="Eg : 4" />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="bg-[#688968] p-3 rounded-md w-28 text-white"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#4DAF4E] p-3 rounded-md w-28 text-white"
              >
                Next
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Address;
