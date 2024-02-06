import { z } from "zod";
// unfinished schemas
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// unfinished schemas
export const SignupSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password too short." })
    .max(50, { message: "Password too long." }),
  confirmPassword: z.string(),
});

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
