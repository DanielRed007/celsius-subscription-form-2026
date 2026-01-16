// app/subscriptions/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { plans } from "@/lib/data/plans";
import { SubscriptionPlan } from "@/lib/interfaces/subscription-plan";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";

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
          {plans.map((plan: SubscriptionPlan) => (
            <Card
              key={plan.id}
              className={`flex flex-col border-border/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] w-full ${
                plan.popular
                  ? "border-primary/60 bg-gradient-to-b from-primary/5 to-background shadow-2xl relative"
                  : "bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lipstick-red font-bold text-primary-foreground px-5 py-2 text-md font-sm rounded-full">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-3xl">{plan.name}</CardTitle>
                <CardDescription className="mt-1">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span
                    className={`text-5xl ${
                      plan.popular ? "text-lipstick-red" : "text-golden-orange"
                    } font-bold`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    {plan.interval}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1">
                      <Check className="h-5 w-5 text-gold flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6 flex h-full items-top justify-center">
                <Button
                  asChild
                  size="lg"
                  className={`text-sm ${
                    plan.popular ? "bg-lipstick-red" : "bg-golden-orange"
                  }`}
                >
                  <Link href={`/subscriptions/checkout/${plan.id}`}>
                    {plan.popular ? (
                      <Sparkles className="h-5 w-5" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
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