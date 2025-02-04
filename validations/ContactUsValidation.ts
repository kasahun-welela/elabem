import * as z from "zod";

 const ContactUsSchema = z.object({
  fullname: z
    .string({
      required_error: "Full name is required!",
    })
    .min(4, "Full name must be at least 7 characters"),
  email: z.string({
      required_error: "Email is required!",
    }).email(),
  phoneNumber: z.string({
      required_error: "Phone number is required!",
    }).min(10),
  message: z.string({
      required_error: "Message is required!",
    }).max(200).min(5),

 
});
export default ContactUsSchema;