
export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  interval: string;
  description: string;
  features: string[];
  popular: boolean;
}