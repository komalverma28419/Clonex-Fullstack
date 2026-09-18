import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import CheckoutHeader from "../component/checkout/CheckoutHeader";
import PlanSummary from "../component/checkout/PlanSummary";
import PaymentSummary from "../component/checkout/PaymentSummary";
import { pricingDetail } from "../data/pricingData"



const Checkout = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const planId = searchParams.get("pid")
  const billingParam = searchParams.get("billing")
  const billing = billingParam === "annually" ? "annually" : "monthly"

  // Find selected plan
  const selectedPlan = pricingDetail.find(
    (plan) => String(plan.id) === String(planId)
  )

  // If plan is not found
  if (!selectedPlan) {
    return (
      <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-background">
        <div className="max-w-xl mx-auto px-7 lg:px-12 xl:px-14">
          <button type="button"onClick={() => navigate("/pricing")}
            className="text-sm text-primary hover:underline">
            ← Back to Pricing
          </button>

          <div className="mt-8">
            <h1 className="text-2xl font-bold text-dark dark:text-dark-text">Plan not found</h1>
            <p className="mt-2 text-sm text-font dark:text-dark-muted">
              The selected pricing plan could not be found.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-background">
      <div className="max-w-5xl mx-auto px-7 lg:px-12 xl:px-14">
        <CheckoutHeader />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1.1fr]">
          <PlanSummary plan={selectedPlan} billing={billing}/>
          <PaymentSummary plan={selectedPlan} billing={billing}/>
        </div>
      </div>
    </section>
  )
}
export default Checkout