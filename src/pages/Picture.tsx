import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { imageSchema } from "../utils/validation";
import Image from "../components/Image";
import { useFormContextData } from "../context/FormContext";

const Picture = () => {
  const { formData, setFormData } = useFormContextData();
  const methods = useForm({
    resolver: zodResolver(imageSchema),
    defaultValues: formData.personalDetails,
  });

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
    setFormData((prev) => ({
      ...prev,
      profilePicture: data.profilePicture,
    }));
    navigate("/review");
  };

  return (
    <>
      <ProgressBar steps={[1, 2, 3, 4]} currentStep={3} />
      <div className="glassmorphism h-[514px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Set Your Profile Picture
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex justify-center mt-10">
              <Image />
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="bg-[#688968] p-3 rounded-md w-28 text-white"
                onClick={() => navigate(-1)}
                type="button"
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

export default Picture;
