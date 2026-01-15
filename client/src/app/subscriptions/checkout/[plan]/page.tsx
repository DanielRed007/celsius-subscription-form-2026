// app/subscriptions/checkout/[plan]/page.tsx
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CheckoutPageProps {
  params: Promise<{ plan: string }>;
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { plan } = await params;

  const validPlans = ["starter", "pro", "enterprise"];
  if (!validPlans.includes(plan)) {
    notFound();
  }

  const planName = plan.charAt(0).toUpperCase() + plan.slice(1);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Complete Your {planName} Subscription</CardTitle>
            <CardDescription className="mt-2 text-lg">
              You're about to subscribe to the <strong>{planName}</strong> plan.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>

              <Button size="lg" className="w-full text-lg">
                Proceed to Payment – {planName} Plan
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Secure payment processed by Stripe. Cancel anytime.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}