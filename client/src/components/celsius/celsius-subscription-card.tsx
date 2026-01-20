"use client";

import { SubscriptionPlan } from "@/lib/interfaces/subscription-plan";
import { useSubscriptionStore } from "@/store/SubscriptionStore";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface CelsiusSubscriptionCardProps {
  plan: SubscriptionPlan;
}

export default function CelsiusSubscriptionCard({
  plan,
}: CelsiusSubscriptionCardProps): React.ReactNode {
  const { setCurrentPlan, currentSubscription } = useSubscriptionStore();

  const setPlan = (plan: SubscriptionPlan) => {
    setCurrentPlan(plan.id);

    console.log(currentSubscription);
  };

  return (
    <Card
      key={plan.id}
      className={`flex flex-col border-border/50 rounded-none transition-all duration-300 hover:shadow-xl hover:scale-[1.02] w-full ${
        plan.popular
          ? "border-primary/60 bg-linear-to-b from-primary/5 to-background shadow-2xl relative"
          : "bg-card"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-lipstick-red font-bold text-primary-foreground px-5 py-2 text-md font-sm rounded-none">
          Most Popular
        </div>
      )}

      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl">{plan.name}</CardTitle>
        <CardDescription className="mt-1">{plan.description}</CardDescription>
        <div className="mt-6">
          <span
            className={`text-5xl ${
              plan.popular ? "text-lipstick-red" : "text-golden-orange"
            } font-bold`}
          >
            {plan.price}
          </span>
          <span className="text-lg text-muted-foreground">{plan.interval}</span>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-1">
              <Check className="h-5 w-5 text-gold shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-6 flex h-full items-top justify-center">
        <Button
          asChild
          size="sm"
          className={`text-sm rounded-none p-3 ${
            plan.popular ? "bg-lipstick-red" : "bg-golden-orange"
          }`}
          onClick={() => setPlan(plan)}
        >
          <Link href={`/subscriptions/checkout/${plan.id}`}>
            {plan && plan.popular ? (
              <Sparkles className="h-5 w-5" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
            Select {plan.name}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
