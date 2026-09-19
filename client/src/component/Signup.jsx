import React, { useState } from "react";
import SignupImage from "../assets/images/signup-image.webp";
import Button from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useToast } from "../context/ToastContext";
import { useLogin } from "../context/LoginContext";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()
  const {showToast} = useToast()
  const {openLogin} = useLogin()

  const [formData, setFormData] = useState({
    companyName: "",
    Username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const inputClass =
    "w-full rounded px-4 py-3 outline-none placeholder:text-[#555555] dark:placeholder:text-[#B5B5B5] transition-all bg-white dark:bg-[#1F2937] text-[#222222] dark:text-white border border-[#E2E2E2] dark:border-[#374151] shadow-[0px_0px_2px_0_#0000001F]";

  const getInputClass = (value) => {
    if (submitted && !value.trim()) {
      return `${inputClass} !bg-red-50 !border-red-500 dark:!bg-red-950/30 dark:!border-red-500`;
    }
    return `${inputClass} focus:border-primary dark:focus:border-blue-400`;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSubmitted(true);

    // Required fields validation
    if (
      !formData.companyName.trim() ||
      !formData.Username.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim() ||
      !formData.terms
    ) {
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          companyName: formData.companyName,
          Username: formData.Username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          terms: formData.terms
        }
      )
      console.log("signup successful:", response.data);

      showToast("success","Account created successfully. OTP sent to your email.")

      navigate("/verify-email", {
        state: {
          email: formData.email,
        },
      })
      
    } catch (error) {
      console.error("Signup error", error)
       if (error.response) {
          showToast("error",error.response.data.message || "Signup failed")
        } else {
          showToast("error","Unable to connect to server. Please try again")
        }
    }
  }

  const passwordMismatch =
    submitted &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword;

  return (
    <section className="relative py-6 md:py-10 xl:py-14 dark:bg-dark-background overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/*-------------------------------------- Form----------------------------- */}
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2 text-dark dark:text-dark-text font-bold">
              Create an Account
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Create your Clonex account to get started.
            </p>

            <form className="space-y-4 mt-8" onSubmit={handleSubmit} noValidate>
              <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className={getInputClass(formData.companyName)}/>
              <input type="text" name="Username" placeholder="Full Name" value={formData.Username}
                onChange={handleChange} className={getInputClass(formData.Username)}/>
              <input type="email" name="email" placeholder="Email Address" value={formData.email}
                onChange={handleChange} className={getInputClass(formData.email)}/>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
                onChange={handleChange} className={getInputClass(formData.phone)}/>
              <input type="password" name="password" placeholder="Password" value={formData.password}
                onChange={handleChange} className={getInputClass(formData.password)}/>
              <div>
                <input type="password" name="confirmPassword" placeholder="Confirm Password"
                  value={formData.confirmPassword} onChange={handleChange} className={
                     passwordMismatch
                      ? `${inputClass} !border-red-500 !bg-red-50 dark:!bg-red-950/30`
                      : getInputClass(formData.confirmPassword)}/>
                {passwordMismatch && (
                  <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
                )}
              </div>

              {/*------------------------------------------ Terms--------------------------- */}
              <div className="flex items-start gap-2">
                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-primary cursor-pointer"/>
                <p className={`text-sm ${ submitted && !formData.terms
                      ? "text-red-500"
                      : "text-gray-600 dark:text-gray-300"
                  }`}>
                  I agree to the{" "}
                  <Link to="/terms-conditions" className="text-primary hover:underline">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <Button text="Create Account" type="submit" size="md"
                className="w-full mt-4 shadow-[0px_2px_4px_0_#60606038]"/>
            </form>

            {/* Login Link */}
            <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <button type="button" onClick={openLogin} className="text-primary hover:underline font-medium">
                  Login
              </button>
            </p>
          </div>

          {/*------------------------------------ Image -----------------------------------*/}
          <div className="relative z-10 lg:block hidden">
            <img src={SignupImage} alt="Create an account" />
          </div>

        </div>
      </div>
    </section>
  )
}
export default Signup;