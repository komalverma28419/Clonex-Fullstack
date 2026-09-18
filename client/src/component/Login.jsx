import React, { useState } from "react";
import { X } from "lucide-react";
import Button from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext"
import { useToast } from "../context/ToastContext";


const Login = ({onClose, redirectTo = "/dashboard" }) => {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: ""})
  const {login} = useAuth()
  const {showToast} = useToast()

  const inputClass =
    "w-full rounded px-4 py-3 outline-none placeholder:text-[#555555] dark:placeholder:text-[#B5B5B5] transition-all bg-white dark:bg-[#1F2937] text-[#222222] dark:text-white border border-[#E2E2E2] dark:border-[#374151] shadow-[0px_0px_2px_0_#0000001F]";

  const getInputClass = (value) => {
    if (submitted && !value.trim()) {
      return `${inputClass} !bg-red-50 !border-red-500 dark:!bg-red-950/30 dark:!border-red-500`;
    }
    return `${inputClass} focus:border-primary dark:focus:border-blue-400`;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSubmitted(true);

    //-------------------------------------required field check-------------------------------------
    if (!formData.email.trim() || !formData.password.trim()) {
      return
    }
    try{
      const response = await axios.post("http://localhost:5000/api/auth/login",{
        email: formData.email,
        password: formData.password
      })
      console.log("Login successful:", response.data)
      // -----------------------------------------save JWT token-----------------------------------
      login(response.data.token,
        response.data.user
      )
      showToast("success", "Login successful!")

      onClose()
      navigate(redirectTo)
    }catch(error){
      console.error("Login error:", error)
      if(error.response){
        showToast("error", error.response.data.message || "Login failed")
      }else{
        showToast("error", "Unable to connect to server. Please try again")
      }
    }
  }

  return (
      <div onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#202738] p-6 md:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          {/*---------------------------------------- Close Button -----------------------------------*/}
          <button type="button"  onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <X size={22} />
          </button>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Login to your Clonex account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Enter your email" className={getInputClass(formData.email)}/>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input type="password" name="password" value={formData.password} onChange={handleChange}
                placeholder="Enter your password" className={getInputClass(formData.password)}/>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button type="button" className="text-sm text-primary hover:underline">Forgot Password?</button>
            </div>
            {/* Login Button */}
            <Button text="Login" type="submit" size="lg" className="w-full justify-center"shine/>
          </form>

          {/* Signup */}
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" onClick={onClose} className="text-primary hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
  )
}
export default Login

