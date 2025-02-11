"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ContactUsSchema from "@/validations/ContactUsValidation";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";

export function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
  });
  const onSubmit = async (values: z.infer<typeof ContactUsSchema>) => {
    setIsLoading(true);
    console.log("form values date ==", values);
    const templateParams = {
      to_name: "Elabem Consultancy",
      from_name: values.fullname,
      phone: values.phoneNumber,
      email: values.email,
      message: values.message,
    };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      );
      toast.success(
        "Thank you for reaching out! We will get back to you soon."
      );
      console.log("Email sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Unable to send the mail. Please try again.");
      console.log("Failed to send email:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2  p-4 ">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter Full name"
                  className="placeholder:text-xs"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter your email"
                  className="placeholder:text-xs"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter phone number"
                  className="placeholder:text-xs"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  className="placeholder:text-xs"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isLoading ? "Loading ..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
