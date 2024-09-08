import React, { useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";

const Image: React.FC = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file); // Debugging line
      setValue("profilePicture", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        console.log("Image preview set:", reader.result); // Debugging line
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const errorMessage =
    (errors.profilePicture as FieldError)?.message ||
    "Profile picture is required";

  return (
    <div className="image-upload">
      <div className="image-preview">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile Preview"
            className="profile-picture"
          />
        ) : (
          <div className="profile-picture text-center pt-[50%]">
            No image selected
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        {...register("profilePicture")}
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="imageUploadInput"
      />
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={() => document.getElementById("imageUploadInput")?.click()}
          className="bg-[#4DAF4E] p-3 rounded-md w-40 text-white"
        >
          Upload Image
        </button>
      </div>
      {errorMessage && <span className="error ml-11">{errorMessage}</span>}
    </div>
  );
};

export default Image;
