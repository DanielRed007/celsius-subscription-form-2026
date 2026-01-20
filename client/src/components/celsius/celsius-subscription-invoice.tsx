import { SubscriptionPlan } from "@/lib/interfaces/subscription-plan";

interface CelsiusSubscriptionInvoiceProps {
  plan: SubscriptionPlan | null;
}

export default function CelsiusSubscriptionInvoice({
  plan,
}: CelsiusSubscriptionInvoiceProps) {
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl bg-black text-white overflow-hidden border border-neutral-800">
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-lg font-bold">Subscribe to Celsius {plan?.name}</h2>
      </div>

      <div className="px-6 pb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{plan?.price}</span>
          <div className="text-sm text-neutral-400">
            <span>per {plan?.interval?.slice(1)}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-neutral-800">
            <div>
              <div className="font-medium">Celsius {plan?.name}</div>
              <div className="text-sm text-neutral-400">
                Celsius {plan?.name}
              </div>
            </div>
            <div className="text-right">
              <div className="text-md">{plan?.price}</div>
              <div className="text-sm text-neutral-400">Billed monthly</div>
            </div>
          </div>

          <div className="text-sm text-neutral-400 pb-2">
            {plan?.price} per period
          </div>

          <div className="text-sm flex justify-between py-1">
            <span>Subtotal</span>
            <span>{plan?.price}</span>
          </div>

          <div className="flex justify-between py-1 items-center">
            <div className="text-sm flex items-center gap-1">
              <span>Tax</span>
              <span className="text-neutral-500 cursor-help">©</span>
            </div>
            <span>$0.00</span>
          </div>

          <div className="flex justify-between pt-4 border-t border-neutral-700 font-medium text-lg">
            <span>Total due today</span>
            <span>{plan?.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
