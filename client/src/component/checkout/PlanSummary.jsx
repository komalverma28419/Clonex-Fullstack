import React from "react";
import { Check, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const PlanSummary = ({ plan, billing }) => {
  const navigate = useNavigate()
  if (!plan) {
    return null
  }

  const price = billing === "monthly" ? Number(plan.price.monthly) : Number(plan.price.annually)
  const billingLabel = billing === "monthly" ? "Monthly" : "Yearly"

  const handleChangePlan = () => {
    navigate("/pricing")
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm dark:border-dark-border dark:bg-dark-alternate">

      <h2 className="text-xl font-bold text-dark dark:text-dark-text">Subscription Plan</h2>

      <div className="mt-4 flex items-center justify-between rounded-md border border-primary bg-primary/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-4 w-4 items-center justify-center rounded-full border-4 border-primary bg-white">
          </span>
          <span className="text-base font-semibold text-dark dark:text-dark-text">{plan.title}</span>
        </div>
        <span className="text-sm font-bold text-dark dark:text-dark-text">
          ₹{price.toLocaleString("en-IN")}
        </span>
      </div>

      <p className="mt-3 text-xs text-font dark:text-dark-muted"> {billingLabel} billing</p>

      {/* Features */}
      <div className="mt-5">
        <ul className="space-y-2">
          {plan.features?.map((feature, index) => {
            const featureName = typeof feature === "string" ? feature : feature.name;
            const isAvailable = typeof feature === "string" ? true : feature.available;

            return (
              <li
                key={index}
                className={`flex items-start gap-3 text-sm ${
                  isAvailable ? "text-font dark:text-dark-muted" : "text-gray-400" }`}>
                <Check size={15} className={`mt-0.5 shrink-0 ${ isAvailable ? "text-primary" : "text-gray-400"}`}/>
                <span className={ !isAvailable  ? "line-through"  : ""}>{featureName} </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Change Plan */}
      <div className="mt-5 rounded-md bg-red-50 px-5 py-4 dark:bg-red-100">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-font dark:text-dark-muted">If you want to change your plan. </p>
          <button type="button" onClick={handleChangePlan} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            Change Plan
            <ArrowRight size={15} />
          </button>

        </div>
      </div>

    </div>
  )
}
export default PlanSummary;