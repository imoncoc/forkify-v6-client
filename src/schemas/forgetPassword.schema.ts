import { z } from "zod";

const forgetPasswordValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
});

export default forgetPasswordValidationSchema;
