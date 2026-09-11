import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProfileInput from "./ProfileInput";
import Button from "../ui/Button";
import axios from "axios"
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";

const EditProfile = ({ user, onBack, onProfileUpdate }) => {
  const {token} = useAuth()
  const {showToast} = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: user.Username || "",
    email: user.email || "",
    phone: user.phone || "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      setLoading(true)
      const response = await axios.put("http://localhost:5000/api/auth/profile",
        formData,
        {
          headers: {
            Authorization : `Bearer ${token}`
          }
        }
      )
      onProfileUpdate(response.data.user)
      showToast("success", "Profile updated successfully")
    }catch(error){
      console.error("Profile update error", error)
      showToast("error", "Failed to update profile")
    }finally{
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-7xl">

      <div className="mb-7 flex items-center gap-3">
        <button type="button" onClick={onBack} className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <ArrowLeft size={21} />
        </button>
        <div>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <p className="text-sm text-gray-500">Update your account information.</p>
        </div>
      </div>

      {/* -------------------------------------Profile Card-------------------------------------- */}
      <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-dark-card md:p-8 dark:border dark:border-dark-border">
        {/*-------------------------------- Avatar------------------------- */}
        <div className="text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary text-4xl font-bold text-white">
            {user.Username.charAt(0).toUpperCase()}
          </div>

          <div className="mt-5 flex justify-center gap-3">
            <Button text="Choose Photo" variant="secondary" className="border border-primary text-primary hover:bg-primary "/>
            <Button text="Delete" variant="secondary" className="border border-red-500 hover:bg-red-500 text-red-500 hover:text-white"/>
          </div>
        </div>

        {/*------------------------------------------- Form------------------------------------- */}
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-3xl">
          <div className="grid gap-5 md:grid-cols-2">
            <ProfileInput label="Full Name" name="Username" value={formData.Username} onChange={handleChange}/>
            <ProfileInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange}/>
            <ProfileInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange}/>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>

      </div>

    </section>
  )
}
export default EditProfile;