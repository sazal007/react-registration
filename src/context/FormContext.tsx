import React, { createContext, useContext, useState, ReactNode } from "react";

interface PersonalDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
}

interface AddressDetails {
  country: string;
  district: string;
  municipality: string;
  city: string;
  ward: string;
}

interface FormData {
  personalDetails: PersonalDetails;
  addressDetails: AddressDetails;
  profilePicture: File | null;
}

interface FormContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    personalDetails: {
      firstName: "",
      middleName: "",
      lastName: "",
      phoneNumber: "",
      dateOfBirth: "",
      gender: "",
    },
    addressDetails: {
      country: "",
      district: "",
      municipality: "",
      city: "",
      ward: "",
    },
    profilePicture: null,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContextData = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContextData must be used within a FormProvider");
  }
  return context;
};
