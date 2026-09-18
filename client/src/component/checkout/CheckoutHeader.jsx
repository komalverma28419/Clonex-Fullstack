import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckoutHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pricing");
  };

  return (
    <div className="mb-8">
      {/* Back Button */}
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-font dark:text-dark-muted hover:text-primary dark:hover:text-primary transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Pricing
      </button>

      {/* Heading */}
      <div className="mt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-dark-text">
          Checkout
        </h1>

        <p className="mt-2 text-sm md:text-base text-font dark:text-dark-muted">
          Review your plan and complete your Clonex subscription.
        </p>
      </div>
    </div>
  );
};

export default CheckoutHeader;