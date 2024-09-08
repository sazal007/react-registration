import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { imageSchema } from "../utils/validation";
import { useFormContextData } from "../context/FormContext";
import { useEffect, useState } from "react";

const Review = () => {
  const { formData } = useFormContextData();
  const methods = useForm({
    resolver: zodResolver(imageSchema),
  });

  const navigate = useNavigate();
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (formData.profilePicture && formData.profilePicture instanceof Blob) {
      const objectUrl = URL.createObjectURL(formData.profilePicture);
      setProfileImageUrl(objectUrl);

      // Cleanup function to revoke the object URL
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [formData.profilePicture]);

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/my-details");
  };

  return (
    <>
      <ProgressBar steps={[1, 2, 3, 4]} currentStep={4} />
      <div className="glassmorphism h-[768px] p-5">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Review Your Details
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="text-center mb-5">
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  className="w-[265px] h-[265px] rounded-[20%] border border-slate-400 mx-auto"
                  alt="Profile"
                />
              ) : (
                <div className="w-[265px] h-[265px] rounded-[20%] border border-slate-400 mx-auto flex items-center justify-center text-center">
                  No image selected
                </div>
              )}
            </div>
            <div className="mt-10 ml-5">
              <h2 className="text-2xl font-semibold mb-5 underline">
                Personal Details
              </h2>
              <div className="flex gap-10 align-center w-full mb-3 text-xl">
                <p>
                  <span className="font-bold">First Name :</span>{" "}
                  {formData.personalDetails.firstName}
                </p>
                <p>
                  <span className="font-bold">Middle Name :</span>{" "}
                  {formData.personalDetails.middleName}
                </p>
                <p>
                  <span className="font-bold">Last Name :</span>{" "}
                  {formData.personalDetails.lastName}
                </p>
              </div>
              <div className="flex gap-10 align-center w-full mb-3 text-xl">
                <p>
                  <span className="font-bold">Phone :</span>{" "}
                  {formData.personalDetails.phoneNumber}
                </p>
                <p>
                  <span className="font-bold">Date of Birth :</span>{" "}
                  {formData.personalDetails.dateOfBirth}
                </p>
                <p>
                  <span className="font-bold">Gender :</span>{" "}
                  {formData.personalDetails.gender}
                </p>
              </div>
            </div>
            <div className="mt-10 ml-5">
              <h2 className="text-2xl font-semibold mb-5 underline">
                Address Details
              </h2>
              <div className="flex gap-10 align-center mb-3 text-xl">
                <p>
                  <span className="font-bold">Country :</span>{" "}
                  {formData.addressDetails.country}
                </p>
                <p>
                  <span className="font-bold">District :</span>{" "}
                  {formData.addressDetails.district}
                </p>
                <p>
                  <span className="font-bold">Municipality :</span>{" "}
                  {formData.addressDetails.municipality}
                </p>
              </div>
              <div className="flex gap-10 align-center mb-3 text-xl">
                <p>
                  <span className="font-bold">City :</span>{" "}
                  {formData.addressDetails.city}
                </p>
                <p>
                  <span className="font-bold">Ward :</span>{" "}
                  {formData.addressDetails.ward}
                </p>
              </div>
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
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Review;
