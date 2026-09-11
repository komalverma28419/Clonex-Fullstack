import React from "react";

const DashboardCard = ({ title, badge, children }) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md dark:border-dark-border dark:bg-dark-background">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500 dark:bg-gray-700">
          {badge}
        </span>
      </div>
      {children}
    </div>
  )
}
export default DashboardCard;