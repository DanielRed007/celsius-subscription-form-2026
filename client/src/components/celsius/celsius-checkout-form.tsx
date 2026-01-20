"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  paymentMethod: z.enum(["card", "crypto", "bank"], {
    required_error: "Please select a payment method",
  }),
  cardNumber: z.string().optional(),
  expiry: z.string().optional(),
  cvc: z.string().optional(),
  walletAddress: z.string().optional(),
  saveInfo: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

export default function CelsiusCheckoutForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "colonel.fedhamkassad@proton.me",
      paymentMethod: undefined,
      saveInfo: false,
    },
  });

  const paymentMethod = form.watch("paymentMethod");

  async function onSubmit(data: FormValues) {
    console.log("Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Processing subscription... (demo)");
  }

  return (
    <div className="mx-auto w-full max-w-[70%] rounded-none bg-black text-white overflow-hidden border border-neutral-800">
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-2xl font-bold">Subscribe to Celsius</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="px-6 pb-6">
            <div className="flex items-baseline gap-1">
              <div className="text-md text-neutral-400">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="px-6 pb-0">
            <div className="flex items-baseline gap-1">
              <div className="text-xl text-neutral-400">
                <span>Payment Method</span>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                <Accordion
                  type="single"
                  collapsible
                  value={paymentMethod}
                  onValueChange={(value) =>
                    form.setValue(
                      "paymentMethod",
                      value as FormValues["paymentMethod"],
                      {
                        shouldValidate: true,
                      },
                    )
                  }
                  className="w-full"
                >
                  <AccordionItem value="card">
                    <AccordionTrigger>Card</AccordionTrigger>
                    <AccordionContent className="pt-4 px-1">
                      <div className="space-y-4 text-sm">
                        <div className="grid grid-cols-1 gap-3">
                          <FormField
                            control={form.control}
                            name="cardNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-neutral-300 text-sm">
                                  Card number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="1234 5678 9012 3456"
                                    className="bg-neutral-900 border-neutral-700"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          {/* You can add expiry + cvc here similarly */}
                        </div>
                        <p className="text-neutral-400 text-xs">
                          We accept major credit/debit cards.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="crypto">
                    <AccordionTrigger>Crypto</AccordionTrigger>
                    <AccordionContent className="pt-4 px-1">
                      <div className="space-y-4 text-sm">
                        <FormField
                          control={form.control}
                          name="walletAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neutral-300 text-sm">
                                Wallet address / Memo (if needed)
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="0x... or destination tag"
                                  className="bg-neutral-900 border-neutral-700"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <p className="text-neutral-400 text-xs">
                          Supported: BTC, ETH, USDT, etc. Exact amount required.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="bank">
                    <AccordionTrigger>Bank Account</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-neutral-400 text-sm pt-2">
                        ACH / SEPA / Faster Payments — coming soon or region
                        dependent.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <FormField
                control={form.control}
                name="saveInfo"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-neutral-300">
                        Save my information for faster checkout
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex justify-between py-1 items-center">
                <div className="flex items-center gap-1">
                  <p>
                    <small className="text-neutral-400">
                      All payments for Paid Services are final and not
                      refundable or exchangeable, except as required by
                      applicable law. Misuse of Celsius such as fraud, spam,
                      etc., will result in your account’s off-boarding from the
                      program, suspension from Celsius, or other action as
                      Celsius may deem appropriate.
                    </small>
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-neutral-700 font-medium text-lg">
                <Button
                  type="submit"
                  className="w-full"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Processing..." : "Subscribe"}
                </Button>
              </div>

              <div className="flex justify-between py-1 items-center">
                <div className="flex items-center gap-1">
                  <p>
                    <small className="text-neutral-500">
                      By subscribing, you authorize Celsius to charge you
                      according to the terms until you cancel.
                    </small>
                  </p>
                </div>
              </div>

              {/* Optional: show validation error for payment method */}
              {form.formState.errors.paymentMethod && (
                <p className="text-red-400 text-sm text-center mt-2">
                  {form.formState.errors.paymentMethod.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
