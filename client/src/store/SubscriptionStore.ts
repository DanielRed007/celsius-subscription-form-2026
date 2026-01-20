import { plans } from "@/lib/data/plans";
import { SubscriptionPlan } from "@/lib/interfaces/subscription-plan";
import { create } from "zustand";

interface SubscriptionState {
  subscriptions: SubscriptionPlan[] | null;
  currentSubscription: string | "";
  setCurrentPlan(plan: string): void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  currentSubscription: "",
  subscriptions: plans,
  setCurrentPlan: (plan) =>
    set(() => ({
      currentSubscription: plan,
    })),
}));
