import React, { useEffect, useState } from "react";
import { ArrowRight, ShoppingCart} from "lucide-react";
import DashboardCard from "./DashboardCard";
import Button from "../ui/Button"
import axios from "axios"
import CallingDashboard from "./CallingDashboard";


const DashboardOverview = ({ user, onWallet }) => {
  const [subscription, setSubscription] = useState(null);
  const [isLoadingSubscription, setIsLoadingSubscription] = useState(true)
  const [wallet, setWallet] = useState(null)
  const [isLoadingWallet, setIsLoadingWallet] = useState(null)

  useEffect(() => {
    const fetchCurrentSubscription = async () =>{
      try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/subscription/current`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        )
        setSubscription(response.data.subscription)
      }catch(error){
        if(error.response?.status !== 400){
          console.error("Subscription fetch error:", error)
        }
        setSubscription(null)
      }finally{
        setIsLoadingSubscription(false)
      }
    }
    fetchCurrentSubscription()
  }, [])

  useEffect(() =>{
    const fetchWallet = async () =>{
      try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/wallet`,
          {
            headers:{
              Authorization: `Bearer ${localStorage.getItem("token")}`
            } 
          }
        )
        setWallet(response.data.wallet)


      }catch(error){
        console.error("Wallet fetch error:", error)
        setWallet(null)
      }finally{
        setIsLoadingWallet(false)
      }
    }
    fetchWallet()
  }, [])
  
  return (
    <section className="">

      <div className="mx-auto max-w-7xl ">
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back</p>
          <h1 className="mt-1 text-2xl font-bold md:text-3xl"> Hello, {user.Username} 👋 </h1>
        </div>

        {/* Top Cards */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <DashboardCard
              title="Current Plan"
              badge={
                isLoadingSubscription ? (
                  "Loading..."
                ) : !subscription ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-400"></span>
                    No Plan
                  </span>
                ) : subscription.status === "active" ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-1 py-0.5 text-xs font-semibold text-green-600 dark:bg-green-500/10 dark:text-green-400">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                    </span>
                    Active
                  </span>
                ) : subscription.status === "created" ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-1 py-0.5 text-xs font-semibold text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                    Payment Pending
                  </span>
                ) : subscription.status === "failed" ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-1 py-0.5 text-xs font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                    Payment Failed
                  </span>
                ) : subscription.status === "cancelled" ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-1 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-500"></span>
                    Cancelled
                  </span>
                ) : subscription.status === "expired" ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-1 py-0.5 text-xs font-semibold text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                    Expired
                  </span>
                ) : null
              }
            >
              {isLoadingSubscription ? (
                <p className="mt-8 text-sm text-gray-500"> Loading subscription...</p>
              ) : subscription ? (
                <>
                  <p className="mt-8 text-lg font-semibold">{subscription.planName}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {subscription.billing === "monthly" ? "Monthly billing" : "Annual billing"}
                  </p>
                  <p className="mt-3 text-sm font-medium">
                    ₹{Number(subscription.amount).toLocaleString("en-IN")}
                  </p>
                </>
              ) : (
                <>
                  <p className="mt-8 text-lg font-semibold">Don't have Plan</p>
                  <p className="mt-1 text-sm text-gray-500">Choose a plan to start calling.</p>
                </>
              )
              }
            </DashboardCard>
            <DashboardCard title="Upcoming Plan" badge="0">
              <p className="mt-8 text-lg font-semibold">Don't have plan</p>
              <p className="mt-1 text-sm text-gray-500">No upcoming subscription.</p>
            </DashboardCard>
          {/*---------------------------------------- Wallet---------------------------------------- */}
          <button type="button" onClick={onWallet}
            className="rounded-2xl border border-green-100 bg-green-50 p-6 text-left shadow-md transition hover:shadow-lg dark:border-green-900 dark:bg-green-950/30">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-green-700 dark:text-green-400">Wallet</h3>
              <ArrowRight size={19} className="text-green-600"/>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              {isLoadingWallet ? (
                <p className="text-font">Loading wallet...</p>
              ): wallet ? (
                <>
                  <WalletMetric label="Total Amount" 
                    value={`₹ ${Number(wallet.totalAmount || 0).toLocaleString("en-IN")}`}/>
                  <WalletMetric label="Used Amount"
                    value={`₹ ${Number(wallet.usedAmount || 0).toLocaleString("en-IN")}`}
                  />
                  <WalletMetric label="Available Amount"
                    value={`₹ ${Number(wallet.availableAmount || 0).toLocaleString("en-IN")}`}
                  />
                </>
              ) : (
                <p className="text-gray-500">Unable to load wallet.</p>
              )}
            </div>
          </button>
      </div>    

        {/*------------------------------/* Subscription Banner------------------------------ */}
        <div className="mt-6 flex flex-col gap-5 rounded-2xl bg-red-50 p-5 shadow-sm dark:bg-red-950/20 md:flex-row md:items-center md:justify-between md:p-6 dark:border dark:border-dark-border">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-red-500 shadow-sm dark:bg-gray-800">
              <ShoppingCart size={21} />
            </div>
            <div>
              <h3 className="font-semibold">Start your subscription plan</h3>
              <p className="text-sm text-gray-500">Choose a plan based on your business requirements.</p>
            </div>
          </div>
          <Button text="Buy Now" className="bg-red-500 hover:bg-red-600"/>
        </div>

        {/*------------------------------------------ Empty State---------------------------- */}
        <CallingDashboard/>
        
      </div>

    </section>
  )
}

/* ========================================= WALLET METRIC ================================== */
const WalletMetric = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}

export default DashboardOverview;