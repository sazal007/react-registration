import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Radio from "../components/Radio";
import { personalDetailsSchema } from "../utils/validation";
import { useFormContextData } from "../context/FormContext";

const PersonalDetails = () => {
  const { formData, setFormData } = useFormContextData();
  const methods = useForm({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: formData.personalDetails,
  });

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    setFormData((prev) => ({
      ...prev,
      personalDetails: data,
    }));
    navigate("/address-details");
  };

  return (
    <>
      <ProgressBar steps={[1, 2, 3, 4]} currentStep={1} />
      <div className="glassmorphism h-[450px]">
        <h1 className="text-3xl font-bold mb-6">Personal Details</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex justify-evenly align-center gap-6">
              <Input
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                type="text"
              />
              <Input
                name="middleName"
                label="Middle Name"
                placeholder="Enter your middle name"
                type="text"
              />
              <Input
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
              />
            </div>
            <div className="flex gap-6 align-center">
              <Input
                name="phoneNumber"
                label="Phone Number"
                placeholder="98xxxxxxx"
                type="text"
              />

              <Input
                name="dateOfBirth"
                label="Date of Birth"
                placeholder="DD/MM/YYYY"
                type="date"
              />
            </div>

            <Radio
              name="gender"
              label="Gender"
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" },
              ]}
            />

            <div className="flex justify-end">
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

export default PersonalDetails;
