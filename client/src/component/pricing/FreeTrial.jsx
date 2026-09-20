// import React from 'react'
// import Button from '../ui/Button'

// const FreeTrial = () => {
//   return (
//     <section className='py-10 lg:py-14'>
//       <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
//         <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 dark:bg-dark-alternate rounded-2xl p-10'>
//             <div>
//                 <h3 className='font-bold text-2xl lg:text-3xl text-dark dark:text-dark-text'>Free Trial</h3>
//                 <p className='text-font dark:text-dark-muted text-sm lg:text-base mt-3'>Experience all features for free.</p>
//             </div>
//             <Button text="Get Start For Free" size='lg' className='mt-6 sm:mt-0'/>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FreeTrial


import React, { useState } from "react";
import Button from "../ui/Button";
import { X } from "lucide-react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

const FreeTrial = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const { token, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleOpenTrial = () => {
    if (!isAuthenticated) {
      setShowLogin(true);
      return;
    }
    setOpenModal(true);
  };

  const startFreeTrial = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/subscription/free-trial`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      showToast("success", response.data.message);

      setOpenModal(false);

      navigate("/dashboard");
    } catch (error) {
      showToast(
        "error",
        error.response?.data?.message || "Unable to start free trial."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 dark:bg-dark-alternate rounded-2xl p-10">
            <div>
              <h3 className="font-bold text-2xl lg:text-3xl text-dark dark:text-dark-text">
                Free Trial
              </h3>

              <p className="text-font dark:text-dark-muted text-sm lg:text-base mt-3">
                Experience all CloneX premium features free for 7 days.
              </p>
            </div>

            <Button
              text="Get Started For Free"
              size="lg"
              className="mt-6 sm:mt-0"
              onClick={handleOpenTrial}
            />
          </div>
        </div>
      </section>

      {/* ---------- Modal ---------- */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center px-4">
          <div className="bg-white dark:bg-dark-background rounded-2xl w-full max-w-md p-6 relative">

            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={22} />
            </button>

            <h3 className="text-2xl font-bold text-center dark:text-white">
              🎉 Start Your Free Trial
            </h3>

            <div className="my-6 text-center">
              <p className="text-gray-500 dark:text-dark-muted">
                Premium Plan
              </p>

              <h1 className="text-5xl font-bold text-primary mt-2">
                ₹0
              </h1>

              <p className="mt-3 text-sm text-gray-600 dark:text-dark-muted">
                Unlimited access for **7 Days**
              </p>
            </div>

            <ul className="space-y-2 text-sm text-gray-700 dark:text-dark-muted mb-6">
              <li>✅ Unlimited AI Call Tracking</li>
              <li>✅ Team Dashboard</li>
              <li>✅ Wallet & Analytics</li>
              <li>✅ Priority Support</li>
            </ul>

            <Button
              text={loading ? "Starting Trial..." : "Start Free Trial"}
              className="w-full"
              onClick={startFreeTrial}
            />
          </div>
        </div>
      )}

      {/* ---------- Login Popup ---------- */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          redirectTo="/pricing"
        />
      )}
    </>
  );
};

export default FreeTrial;