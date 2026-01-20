"use client";

import CelsiusCheckoutForm from "@/components/celsius/celsius-checkout-form";
import CelsiusSubscriptionInvoice from "@/components/celsius/celsius-subscription-invoice";
import { useSubscriptionStore } from "@/store/SubscriptionStore";

export default function Payment() {
  const { currentSubscription } = useSubscriptionStore();

  return (
    <main className="h-screen w-screen overflow-hidden">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        <div className="relative flex h-full flex-col items-center justify-center bg-black px-6 sm:px-10 lg:px-16 text-center lg:text-left">
          <div className="mt-12 sm:mt-16">
            <CelsiusSubscriptionInvoice plan={currentSubscription} />
          </div>
        </div>

        <div className="relative flex h-full flex-col items-center justify-center bg-white px-6 sm:px-10 lg:px-8 text-center lg:text-left">
          <CelsiusCheckoutForm />
        </div>
      </div>
    </main>
  );
}
