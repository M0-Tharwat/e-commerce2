import * as z from "zod";

export const registerSchema = z.object({
    name: z.string().nonempty("Name is required").min(3, "Name must be at least 3 characters").max(10 , "Name must be at most 10 characters"), 
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().nonempty("Password is required").min(6, "Password must be at least 6 characters").max(20 , "Password must be at most 20 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"), 
    rePassword: z.string().nonempty("Re-enter Password is required"),
    phone: z.string().nonempty("Phone is required")
    .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
}).refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"]
}); 

export type registerSchemaForm = z.infer<typeof registerSchema>; 