import * as z from "zod";

const genderEnum = z.enum(["Male", "Female", "Other"]);

export const personalDetailsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  gender: genderEnum,
  dateOfBirth: z.string().min(1, "Date of birth is required"),
});

export const addressSchema = z.object({
  country: z.string().nonempty("Country is required"),
  district: z.string().nonempty("District is required"),
  municipality: z.string().nonempty("Municipality is required"),
  city: z.string().min(1, "City is required"),
  ward: z.string().min(1, "Ward is required"),
});

export const imageSchema = z.object({
  profilePicture: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Profile picture is required",
    })
    .optional(),
});
