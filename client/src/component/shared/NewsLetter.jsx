import React, { useState } from "react";
import Button from "../ui/Button"
import Toast from "../ui/Toast"

const NewsLetter = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

   const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Successful subscription
    setError("");

    setToast({ show: true, type: "success", message: "Subscription successful!"});
    setEmail("");

    // Automatically hide toast
    setTimeout(() => { setToast((prev) => ({ ...prev, show: false}))
    }, 3000)
  }

  const handleCloseToast = () => { setToast((prev) => ({ ...prev, show: false, })); }

  return (
    <>
    <section className="py-6 md:py-10 xl:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-cyan-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950"/>
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className="relative overflow-hidden rounded-xl bg-[#232E52]">
          <div className="absolute  -top-16 -left-20 w-34 h-34 sm:h-40 sm:w-40 rounded-full border-16 sm:border-20 border-[#F7DF61]" />
          <div className="relative z-10 px-6 py-14">

            <h3 className="text-center text-2xl lg:text-3xl font-bold text-white">
              Subscribe to my blog.
            </h3>
            <p className="mt-3 text-center text-white/80 dark:text-dark-muted lg:text-base text-sm">
                I post fresh content every week.
            </p>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md">
              <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row">

                <input id="email" type="email" placeholder="Email address" value={email} onChange={(e) => {
                 setEmail(e.target.value);
                 if (error) setError("")
                }}
                aria-invalid={!!error}
                aria-describedby="email-error"
                className={`h-12 flex-1 sm:rounded-l-lg border-2 px-4 outline-none py-2 transition-colors
                 text-gray-900 placeholder:text-gray-500 border-r-0 outline-0
                 dark:text-white dark:placeholder:text-slate-400 ${error ? "border-[1px] border-red-600/60 bg-red-950/50"
                 : "border-transparent focus:border-green-400 bg-white dark:bg-slate-800 "
                }
               `}
                />
                <Button text="SUBSCRIBE" type="submit" variant="" className="h-12  sm:rounded-l-none 
                font-medium transition-colors bg-green-400/70 text-font hover:bg-green-400/80"/>
              </div>
              {error && (<p id="email-error" className="mt-2 text-sm text-red-400">{error}</p>)}

            </form>
          </div>
        </div>
      </div>
    </section>
    <Toast
        toast={toast}
        onClose={handleCloseToast}
    />
    </>
  )}

export default NewsLetter;


