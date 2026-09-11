import React from "react";
import { ArrowLeft, Wallet } from "lucide-react";

const WalletDetails = ({ onBack }) => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-7 flex items-center gap-3">
        <button type="button" onClick={onBack}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800">
          <ArrowLeft size={21} />
        </button>
        <div>
          <h1 className="text-2xl font-bold"> Wallet</h1>
          <p className="text-sm text-gray-500">Manage your wallet and transaction details.</p>
        </div>
      </div>
      {/*--------------------------------- Wallet Card--------------------------------- */}
      <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-dark-card dark:border dark:border-dark-border md:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
            <Wallet size={28} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Available Balance</p>
            <h2 className="mt-1 text-3xl font-bold">₹ 0</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <WalletStat label="Total Amount" amount="₹ 0"/> 
          <WalletStat label="Used Amount" amount="₹ 0"/> 
          <WalletStat label="Available Amount" amount="₹ 0" variant="success"/> 
        </div>
        {/*------------------------------------ Transactions--------------------------------------- */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-8 text-center dark:border-gray-700">
            <Wallet size={30} className="mx-auto text-gray-400"/>
            <p className="mt-3 text-sm text-gray-500"> No transactions yet.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

const WalletStat = ({ label, amount, variant = "default" }) => {
  const styles =
    variant === "success"
      ? "bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400"
      : "bg-gray-50 dark:bg-dark-alternate";
  return (
    <div className={`rounded-xl border border-gray-200 p-5 dark:border-dark-border ${styles}`}>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-xl font-bold">{amount}</p>
    </div>
  )
}

export default WalletDetails;