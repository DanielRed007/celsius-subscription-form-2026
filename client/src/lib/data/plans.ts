import { SubscriptionPlan } from "../interfaces/subscription-plan";

export const plans: SubscriptionPlan[] = [
    {
      id: "starter",
      name: "Starter",
      price: "$9",
      interval: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "Email support",
        "Standard processing speed",
      ],
      popular: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: "$29",
      interval: "/month",
      description: "Best for professionals and growing teams",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Fast processing",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$99",
      interval: "/month",
      description: "For large teams and high-volume usage",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom onboarding",
        "Advanced security",
      ],
      popular: false,
    },
  ];