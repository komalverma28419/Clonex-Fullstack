import React from "react";
import { ArrowRight, ShoppingCart, LayoutDashboard} from "lucide-react";
import DashboardCard from "./DashboardCard";
import Button from "../ui/Button";


const planCards = [
  {
    title: "Current Plan",
    badge: "Active",
    heading: "Don't have Plan",
    description: "Choose a plan to start calling.",
  },
  {
    title: "Upcoming Plan",
    badge: "0",
    heading: "Don't have plan",
    description: "No upcoming subscription.",
  },
]
const WalletData = [
    {label:"Total Am", value:"₹ 0"},
    {label:"Used Amt", value:"₹ 0"},
    {label:"Available Amt", value:"₹ 0"}
]

const DashboardOverview = ({ user, onWallet }) => {
  return (
    <section className="">

      <div className="mx-auto max-w-7xl ">
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back</p>
          <h1 className="mt-1 text-2xl font-bold md:text-3xl"> Hello, {user.Username} 👋 </h1>
        </div>

        {/* Top Cards */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {planCards.map((card) => (
              <DashboardCard key={card.title} title={card.title} badge={card.badge}>
              <p className="mt-8 text-lg font-semibold">{card.heading}</p>
              <p className="mt-1 text-sm text-gray-500">{card.description}</p>
              </DashboardCard>
          ))}
          {/*---------------------------------------- Wallet---------------------------------------- */}
          <button type="button" onClick={onWallet}
            className="rounded-2xl border border-green-100 bg-green-50 p-6 text-left shadow-md transition hover:shadow-lg dark:border-green-900 dark:bg-green-950/30">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-green-700 dark:text-green-400">Wallet</h3>
              <ArrowRight size={19} className="text-green-600"/>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              {WalletData.map((data) =>(
                  <WalletMetric label={data.label} value={data.value}/>
              ))}
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
        <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center dark:border-gray-700 dark:bg-dark-background">
          <LayoutDashboard size={34} className="mx-auto text-gray-400"/>
          <h3 className="mt-3 font-semibold">Your calling dashboard</h3>
          <p className="mx-auto mt-1 max-w-md text-sm text-gray-500">Once your calling activity starts, your performance, call insights and analytics will appear here.
          </p>
        </div>
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