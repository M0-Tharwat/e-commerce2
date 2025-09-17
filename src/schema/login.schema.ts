import * as z from "zod";

export const loginSchema = z.object({
     
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().nonempty("Password is required").min(6, "Password must be at least 6 characters").max(20 , "Password must be at most 20 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"), 
    
});

export type loginSchemaForm = z.infer<typeof loginSchema>; 