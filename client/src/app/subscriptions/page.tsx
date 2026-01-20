// app/subscriptions/page.tsx

import CelsiusSubscriptionCard from "@/components/celsius/celsius-subscription-card";
import { plans } from "@/lib/data/plans";
import { SubscriptionPlan } from "@/lib/interfaces/subscription-plan";

export const metadata = {
  title: "Choose Your Plan - Celsius",
  description: "Select the subscription that fits your needs",
};

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-black text-foreground py-12 md:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-5xl font-monoton tracking-tight text-white">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-md text-muted-foreground max-w-2xl mx-auto">
            Unlock powerful features tailored to your needs. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 justify-items-center max-w-6xl mx-auto px-2">
          {plans &&
            plans.map((plan: SubscriptionPlan) => (
              <CelsiusSubscriptionCard key={plan.id} plan={plan} />
            ))}
        </div>
      </div>
    </div>
  );
}
