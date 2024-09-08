// import ProgressBar from "../components/ProgressBar";
import { useFormContextData } from "../context/FormContext";

const MyDetails = () => {
  const { formData } = useFormContextData();

  return (
    <>
      {/* <ProgressBar steps={[1, 2, 3, 4]} currentStep={4} /> */}
      <div className="glassmorphism h-[768px]">
        <h1 className="text-3xl font-bold mb-6 text-center">My Details</h1>
        <div className="flex justify-center mt-10">
          {formData.profilePicture ? (
            <img
              src={URL.createObjectURL(formData.profilePicture)}
              alt="Profile"
              className="w-[265px] h-[265px] rounded-[20%] border border-slate-400"
            />
          ) : (
            <div className="w-[265px] h-[265px] rounded-[20%] border border-slate-400 text-center">
              No image selected
            </div>
          )}
        </div>
        <div className="mt-10 ml-5">
          <h2 className="text-2xl font-semibold mb-5 underline">
            Personal Details
          </h2>
          <div className="flex gap-10 align-center  mb-3 text-xl">
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
          <div className="flex gap-10 align-center  mb-3 text-xl">
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
      </div>
    </>
  );
};

export default MyDetails;
