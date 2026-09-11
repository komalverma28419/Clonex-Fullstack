import React from "react";

const ProfileInput = ({label, name, type = "text", value, onChange,}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input id={name} name={name} type={type} value={value} onChange={onChange}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"/>
    </div>
  )
}
export default ProfileInput;