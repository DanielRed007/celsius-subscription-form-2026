// app/subscriptions/checkout/[plan]/page.tsx

import { notFound } from "next/navigation";
import { formatPlanName } from "@/lib/utils/format-utils";
import CheckoutForm from "./checkout-form"; // your client-side form child
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan } = await params;

  const validPlans = ["starter", "pro", "enterprise"] as const;

  if (!validPlans.includes(plan as any)) {
    notFound();
  }

  const planName = formatPlanName(plan);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">
              Complete Your {planName} Subscription
            </CardTitle>
            <CardDescription className="mt-2 text-lg">
              You're about to subscribe to the <strong>{planName}</strong> plan.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            <CheckoutForm plan={plan} planName={planName} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}