import React, { useState } from "react";
import { ShieldCheck, LockKeyhole } from "lucide-react"
import { FaCcVisa, FaCcApplePay, FaAmazonPay } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import axios from "axios"
import {useAuth} from "../../context/AuthContext"
import{useToast} from "../../context/ToastContext"

const PaymentSummary = ({ plan, billing }) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [isPaymentLoading, setIsPaymentLoading] = useState(false); 
  const [sameAddress, setSameAddress] = useState(true)
  if (!plan) {
    return null
  }

  const subtotal = billing === "monthly" ? Number(plan.price.monthly) : Number(plan.price.annually)
  const discount = 0
  const gst = Number((subtotal * 0.12).toFixed(2))
  const servicesTax = 0;
  const grandTotal = Number(
    (subtotal - discount + gst + servicesTax).toFixed(2)
  )

  const formatPrice = (amount) => {
    return `₹${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`
  }

 const handlePayment = async () => {
  try {
    setIsPaymentLoading(true);

    const response = await axios.post(
      "http://localhost:5000/api/payment/create-order",
      {
        amount: grandTotal,
        planId: plan.id,
        billing,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const { order } = response.data;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,

      amount: order.amount,
      currency: order.currency,
      name: "Clonex",
      description: `${plan.title} - ${billing} subscription`,
      order_id: order.id,

      prefill: {
        name: user?.name || user?.username || "",
        email: user?.email || "",
        contact: user?.phone || "",
      },

      theme: {
        color: "#your-primary-color",
      },

      handler: function (paymentResponse) {
        console.log("Payment successful:", paymentResponse);

        showToast("success", "Payment completed successfully!");
      },

      modal: {
        ondismiss: function () {
          setIsPaymentLoading(false);
        },
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();

    setIsPaymentLoading(false);
  } catch (error) {
    console.error("Payment error:", error);

    showToast(
      "error",
      error.response?.data?.message || "Unable to start payment"
    );

    setIsPaymentLoading(false);
  }
}
  const billingData = [
    {
      label: plan.title,
      value: formatPrice(subtotal),
    },
    {
      label: "Discount",
      value: `-${formatPrice(discount)}`,
    },
    {
      label: "GST",
      value: formatPrice(gst),
    },
    {
      label: "Services Tax",
      value: formatPrice(servicesTax),
    },
  ]
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm dark:border-dark-border dark:bg-dark-alternate">

      <h2 className="text-xl font-bold text-dark dark:text-dark-text"> Billing Summary </h2>

      <div className="mt-5 space-y-2">
        {billingData.map((item, index) =>(
            <div key={index} className="flex items-center justify-between gap-4" > 
            <span className="text-sm text-font dark:text-dark-muted"> {item.label} </span>
            <span className="text-sm font-semibold text-dark dark:text-dark-text"> {item.value}</span>
            </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200 dark:border-dark-border" />

      {/* Grand Total */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-bold text-dark dark:text-dark-text">Grand Total</span>
        <span className="text-base font-bold text-dark dark:text-dark-text">
          {formatPrice(grandTotal)}
        </span>
      </div>

      {/* Address Checkbox */}
      <label className="mt-4 flex cursor-pointer items-start gap-3">
        <input type="checkbox" checked={sameAddress} onChange={(e) => setSameAddress(e.target.checked)}
          className="mt-0.5 h-4 w-4 cursor-pointer accent-primary"/>
        <span className="text-sm leading-5 text-font dark:text-dark-muted">
          My billing and shipping address are the same
        </span>
      </label>

      <button type="button" disabled={isPaymentLoading} onClick={handlePayment} className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]">
        <LockKeyhole size={17} />
        {isPaymentLoading ? "Processing..." : "Pay Now"}
      </button>

      {/* Security */}
      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-font dark:text-dark-muted">
        <ShieldCheck size={16} />
        <span>Secure & encrypted payment</span>
      </div>

      {/* Payment Methods */}
       <div className="mt-4 flex items-center justify-center gap-2">
        
            <div className="flex h-8 w-10 items-center justify-center rounded-sm border border-gray-200 bg-white">
                <FaCcVisa size={28} style={{ color: "#1A1F71" }} />
            </div>
            <div className="flex h-8 w-10 items-center justify-center rounded-sm border border-gray-200 bg-white">
                <FaCcApplePay size={28} style={{color: "#006FCF" }}  />
            </div><div className="flex h-8 w-10 items-center justify-center rounded-sm border border-gray-200 bg-white">
                <FaAmazonPay size={28} style={{ color: "#006FCF" }} />
            </div><div className="flex h-8 w-10 items-center justify-center rounded-sm border border-gray-200 bg-white">
                <FcGoogle size={28} />
            </div>
        </div>

    </div>
  )
}

export default PaymentSummary;