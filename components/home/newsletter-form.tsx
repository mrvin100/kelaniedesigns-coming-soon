"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const FormSchema = z.object({
  email: z.string().email({
    message: "email must be a valid eamil address.",
  }),
});

export function NewsletterForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });
    // const YOUR_GOOGLE_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz39Wly5b8rUUi-55PIkYHu99WsZEhKKryLJ6TcHkg/dev"

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast.success("",{ description: `Thanks you ${JSON.stringify(data.email, null, 2).toString()} for subscribing to our newslletter`});
//   }

async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbw0O1iWTDlUFRFn6AR95_xzYKoz2VqNeCT1tlSPjsrwCnsg8sLvKb0GeXKalIbNDqOM/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();
      if (result.status === "success") {
        toast.success("", {
          description: `Thank you ${data.email} for subscribing to our newsletter!`,
        });
      } else {
        throw new Error("Failed to save your subscription.");
      }
    } catch (error) {
      toast.error("", {description : (error as Error).message || "Something went wrong. Please try again."});
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="mrvin100@gmail.com" className="py-6" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="absolute top-0 right-0 py-6 border border-primary" size={'icon'}><Send className="h-8 w-8" /></Button>
      </form>
    </Form>
  );
}
