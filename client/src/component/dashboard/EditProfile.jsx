import React, {useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProfileInput from "./ProfileInput";
import Button from "../ui/Button";
import axios from "axios"
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";

const EditProfile = ({ user, onBack, onProfileUpdate }) => {
  const {token, setUser} = useAuth()
  const {showToast} = useToast()
  const [isPhotoLoading, setIsPhotoLoading] = useState(false);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    Username: user.Username || "",
    email: user.email || "",
    phone: user.phone || "",
  })
  const getInitials = (name) => {
    if (!name) return "U";

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  }

  const handlePhotoSelect = async (e) => {
    const file = e.target.files[0];

    if (!file) return
    if (!file.type.startsWith("image/")) {
      showToast("error", "Please select an image");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast("error", "Image size should be less than 5MB");
      return;
    }

    try {
      setIsPhotoLoading(true);
      const data = new FormData();
      data.append("profilePhoto", file);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/profile-photo`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data.user);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      )
      onProfileUpdate(response.data.user);
      showToast("success", "Profile photo updated successfully");
    } catch (error) {
      console.error("Photo upload error:", error);

      showToast(
        "error",
        error.response?.data?.message || "Failed to upload photo"
      );
    } finally {
      setIsPhotoLoading(false);
    }
  }

  const handleDeletePhoto = async () => {
    if (!user?.profilePhoto) {
      showToast("error", "No profile photo to delete");
      return false;
    }

    try {
      setIsPhotoLoading(true)

      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/auth/profile-photo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(response.data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      onProfileUpdate(response.data.user);

      showToast("success", "Profile photo deleted successfully");

      return true;
    } catch (error) {
      console.error("Delete photo error:", error);

      showToast(
        "error",
        error.response?.data?.message || "Failed to delete photo"
      );

      return false;
    } finally {
      setIsPhotoLoading(false)
    }
  }


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
      setIsProfileLoading(true)
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/auth/profile`,
        formData,
        {
          headers: {
            Authorization : `Bearer ${token}`
          }
        }
      )
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      onProfileUpdate(response.data.user);
      showToast("success", "Profile updated successfully");
          }catch(error){
      console.error("Profile update error", error)
      showToast("error", "Failed to update profile")
    }finally{
      setIsProfileLoading(false)
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
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-primary">
            {user.profilePhoto ? (
              <img
                src={user.profilePhoto}
                alt={user.Username}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
                {getInitials(user.Username)}
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoSelect}
            className="hidden"
          />


          <div className="mt-5 flex justify-center gap-3">
            <Button
              text={isPhotoLoading ? "Uploading..." : "Choose Photo"}
              variant="secondary"
              onClick={() => fileInputRef.current?.click()}
              disabled={isPhotoLoading}
              className="border border-primary text-primary hover:bg-primary hover:text-white"
            />
            {user?.profilePhoto && (
              <Button text="Delete" variant="secondary" onClick={() => setShowDeleteModal(true)}
                className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              />
            )}
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
              disabled={isProfileLoading}
              className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProfileLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>

      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-[#1F2937]">

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Delete Profile Photo?
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Are you sure you want to remove your profile photo? You can upload a new one anytime.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <Button text="Cancel" variant="secondary" onClick={() => setShowDeleteModal(false)}
                className="border border-gray-300"/>
              <Button
                text={isPhotoLoading ? "Deleting..." : "Delete"}
                onClick={async () => {
                  const success = await handleDeletePhoto();

                  if (success) {
                    setShowDeleteModal(false);
                  }
                }}
                disabled={isPhotoLoading}
                className="bg-red-500 hover:bg-red-600 text-white"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
export default EditProfile;