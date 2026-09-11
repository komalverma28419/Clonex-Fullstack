import React from "react";

const WalletMetric = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}
export default WalletMetric;