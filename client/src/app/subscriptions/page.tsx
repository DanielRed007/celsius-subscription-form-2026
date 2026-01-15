// app/subscriptions/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Choose Your Plan - Celsius",
  description: "Select the subscription that fits your needs",
};

export default function SubscriptionsPage() {
  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$9",
      interval: "/month",
      description: "Perfect for individuals and small projects",
      features: ["Up to 10 projects", "Basic analytics", "Email support", "Standard processing speed"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$29",
      interval: "/month",
      description: "Best for professionals and growing teams",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "Fast processing", "Custom integrations"],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$99",
      interval: "/month",
      description: "For large teams and high-volume usage",
      features: ["Everything in Pro", "Dedicated account manager", "SLA guarantees", "Custom onboarding", "Advanced security"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Monoton font – white for contrast */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-monoton tracking-tight text-white">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock powerful features tailored to your needs. Cancel anytime.
          </p>
        </div>

        {/* 3-column grid of paid plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col border-border/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                plan.popular
                  ? "border-primary/60 bg-gradient-to-b from-primary/5 to-background shadow-2xl relative"
                  : "bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-1">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl text-muted-foreground">{plan.interval}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full text-lg"
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href={`/subscriptions/checkout/${plan.id}`}>
                    Select {plan.name}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}