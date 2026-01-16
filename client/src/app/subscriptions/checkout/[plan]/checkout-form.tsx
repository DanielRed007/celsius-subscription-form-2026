// app/subscriptions/checkout/[plan]/CheckoutForm.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { checkoutEmailSchema } from '@/lib/schemas/subscription';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CircleDollarSign } from 'lucide-react';

type FormValues = z.infer<typeof checkoutEmailSchema>;

interface CheckoutFormProps {
  plan: string;
  planName: string;
}

export default function CheckoutForm({ plan, planName }: CheckoutFormProps) {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(checkoutEmailSchema),
    defaultValues: { email: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    // create Stripe session via server action here
    router.push(
      `/subscriptions/checkout/${plan}/payment?email=${encodeURIComponent(data.email)}`
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your mail" {...field} className="rounded-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full text-lg gap-3 rounded-none bg-golden-orange hover:bg-golden-orange/90"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          <CircleDollarSign className="h-5 w-5 shrink-0" />
          Proceed to Payment – {planName} Plan
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Secure payment processed by Stripe. Cancel anytime.
        </p>
      </form>
    </Form>
  );
}