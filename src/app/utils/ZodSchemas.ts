import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Please enter your email.",
      invalid_type_error: "This is not an email.",
    })
    .email({ message: "This is not an email." })
    .trim(),
  password: z.string({ required_error: "Please enter your password." }),
});

export const SignupSchema = z
  .object({
    email: z
      .string({
        required_error: "Please enter your email.",
        invalid_type_error: "This is not an email.",
      })
      .trim()
      .min(1, { message: "Email is required." })
      .email({ message: "This is not an email." }),

    password: z
      .string({ required_error: "Please enter your password." })
      .min(6, { message: "Password should be at least 6 chars." })
      .max(50, { message: "Password too long." }),

    confirmPassword: z.string({
      required_error: "Please confirm your password.",
    }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// FOR EDIT PROFILE PAGE
export const UserInfoSchema = z.object({
  username: z.union([
    z.literal(""),
    z
      .string({ invalid_type_error: "Username must be a string." })
      .min(5, "Username too short")
      .max(20, "Username too long")
      .regex(/^[a-zA-Z0-9\-_&]*$/, "Unvalid username")
      .optional(),
  ]),

  fullname: z.union([
    z.literal(""),
    z
      .string({ invalid_type_error: "Fullname must be a string." })
      .min(2, "Full name too short")
      .max(60, "Full name too long")
      .regex(/^[a-zA-Z]*$/, "Unvalid full name")
      .optional(),
  ]),
  bio: z
    .union([
      z.literal(""),
      z.string().min(1, "Bio too short").max(150, "Bio too long"),
    ])
    .optional(),
  website: z
    .union([
      z.literal(""),
      z
        .string()
        // .min(12, "Website too short")
        .max(150, "Website too long")
        .regex(/^https?:\/\/(www\.)?/),
    ])
    .optional(),
});
