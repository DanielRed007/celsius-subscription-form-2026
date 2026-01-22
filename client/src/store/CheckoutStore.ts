import { create } from "zustand";

interface CheckoutState {
  email: string | null;
  subscriptionPlan: string | null;
  setEmail: (email: string) => void;
  setSubscriptionPlan: (method: string | null) => void;
  resetCheckout: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  email: null,
  subscriptionPlan: null,

  setEmail: (email) => set({ email }),

  setSubscriptionPlan: (method) => set({ subscriptionPlan: method }),

  resetCheckout: () => set({ email: null, subscriptionPlan: null }),
}));
