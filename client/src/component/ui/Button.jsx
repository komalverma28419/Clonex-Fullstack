import React from "react";
import { Link} from "react-router-dom";

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  size = "sm",
  shine = false,
  className = "",
  children,
  icon,
  iconPosition = "right",
  to,
  replace = false,
  ...props
}) => {
  const baseStyle = ` relative overflow-hidden rounded-md inline-flex items-center justify-center gap-2
    cursor-pointer transition-all duration-300 group`

  const sizes = {
    sm: "px-5 py-2.5 text-sm xl:text-[15px]",
    md: "px-7 py-3 text-base",
    lg: "lg:px-12 px-8 lg:py-3.5 py-3 md:text-base text-sm",
  };

  const variants = {
    primary:`bg-primary  text-white font-medium hover:opacity-90 hover:-translate-y-[2px] hover:scale-[1.03]
      dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] dark:border-[#334155]`,

    secondary:`bg-white dark:bg-[#0F172A] text-dark dark:text-white border border-[#E5E7EB]
      dark:border-[#334155] font-semibold hover:-translate-y-[2px] hover:scale-[1.03] 
      dark:hover:border-blue-500 dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]`,
      
    tertiary:`bg-white text-primary hover:bg-secondary hover:text-white border border-[#66708533]
      dark:border-[#334155] font-medium hover:-translate-y-[2px] hover:scale-[1.03]
      dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]`,
  }

  const buttonContent = (
    <>
      {shine && (
        <span
          className="hidden dark:block absolute inset-0 overflow-hidden rounded-md pointer-events-none">
          <span
            className="absolute top-0 -left-[150%] h-full w-14 -skew-x-12 bg-gradient-to-r
            from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700
            group-hover:left-[150%] group-hover:opacity-20"/>
        </span>
      )}
      {iconPosition === "left" && icon}
      <span className="relative z-10">{children || text}</span>
      {iconPosition === "right" && icon}

    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        replace={replace}
        onClick={onClick}
        className={`${className} ${baseStyle} ${sizes[size]} ${variants[variant]}`}
        {...props}
      >
        {buttonContent}
      </Link>
    )}
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${baseStyle} ${sizes[size]} ${variants[variant]} `}
      {...props}
    >
      {buttonContent}
    </button>
  )}

export default Button;

