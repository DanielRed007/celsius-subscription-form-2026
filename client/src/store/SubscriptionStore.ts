import { plans } from "@/lib/data/plans";
import { SubscriptionPlan } from "@/lib/interfaces/subscription-plan";
import { create } from "zustand";

interface SubscriptionState {
  subscriptions: SubscriptionPlan[] | null;
  currentSubscription: SubscriptionPlan | null;
  setCurrentPlan(plan: SubscriptionPlan): void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  currentSubscription: null,
  subscriptions: plans,
  setCurrentPlan: (plan) =>
    set(() => ({
      currentSubscription: plan,
    })),
}));
