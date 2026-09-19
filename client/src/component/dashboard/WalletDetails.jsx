import React from "react";
import { ArrowLeft, Wallet, Plus } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../ui/Button";

const WalletDetails = ({ onBack }) => {
const [wallet, setWallet] = useState(null);
const [isLoadingWallet, setIsLoadingWallet] = useState(true)
const [showAddMoney, setShowAddMoney] = useState(false);
const [amount, setAmount] = useState("")
const [transactions, setTransactions] = useState([]);
const [isLoadingTransactions, setIsLoadingTransactions] = useState(true)

 const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/wallet/transactions`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setTransactions(response.data.transactions);
      } catch (error) {
        console.error("Transactions fetch error:", error);
        setTransactions([]);
      } finally {
        setIsLoadingTransactions(false);
      }
    };
  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/wallet`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setWallet(response.data.wallet);
      } catch (error) {
        console.error("Wallet fetch error:", error);
        setWallet(null);
      } finally {
        setIsLoadingWallet(false);
      }
    }
    
    fetchWallet()
    fetchTransactions()
  }, []);

  const handleAddMoney = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/wallet/create-order`,
        {
          amount: Number(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const { order } = response.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Clonex",
        description: "Wallet Recharge",
        order_id: order.id,

        handler: async function (paymentResponse) {
          try {
            const verifyResponse = await axios.post(
              `${import.meta.env.VITE_API_URL}/api/wallet/verify-payment`,
              {
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
                amount: Number(amount),
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );

            console.log("Wallet payment verified:", verifyResponse.data);

            setWallet(verifyResponse.data.wallet);
            await fetchTransactions();
            setAmount("");
            setShowAddMoney(false);

          } catch (error) {
            console.error("Wallet payment verification error:", error);
          }
        },

        modal: {
          ondismiss: function () {
            console.log("Payment cancelled");
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.error("Wallet payment error:", error);
    }
  }


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
            <h2 className="mt-1 text-3xl font-bold">
                {isLoadingWallet? "Loading..." : 
                `₹ ${Number(wallet?.availableAmount || 0).toLocaleString("en-IN")}`}
            </h2>
          </div>
        </div>
        <div className="mt-6">
          <Button text="Add Money" onClick={() => setShowAddMoney(true)} icon={<Plus size={18}/>} iconPosition="left" variant="none" className="bg-green-600 text-white transition hover:bg-green-700 text-sm"/>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <WalletStat label="Total Amount" amount={ isLoadingWallet ? "Loading..."
              : `₹ ${Number(wallet?.totalAmount || 0).toLocaleString("en-IN")}`}/>
          <WalletStat label="Used Amount" amount={ isLoadingWallet ? "Loading..."
              : `₹ ${Number(wallet?.usedAmount || 0).toLocaleString("en-IN")}`}/>
          <WalletStat label="Available Amount" amount={  isLoadingWallet    ? "Loading..."
            : `₹ ${Number(wallet?.availableAmount || 0).toLocaleString("en-IN")}`}variant="success"/>
        </div>
        {/* .............................add money input.................................. */}

        {showAddMoney && (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-dark-border dark:bg-dark-alternate">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Add Money</h3>
                <p className="text-sm text-gray-500">Enter the amount you want to add to wallet.</p>
              </div>
              <Button text="Cancel" onClick={() =>{setShowAddMoney(false) 
                setAmount("")}}
                variant="none" className="bg-red-500 hover:bg-red-600 text-white"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium"> Amount </label>
              <div className="mt-2 flex items-center rounded-xl border border-gray-300 bg-white px-4 dark:border-gray-700 dark:bg-dark-card">
                <span className="text-gray-500">₹</span>
                <input type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount" className="w-full bg-transparent px-3 py-3 outline-none"/>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddMoney}
              disabled={!amount || Number(amount) <= 0}
              className="mt-5 rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue to Payment
            </button>
          </div>
        )}
        {/*------------------------------------ Transactions--------------------------------------- */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>

          {isLoadingTransactions ? (
            <div className="mt-4 rounded-xl border border-gray-200 p-6 text-center dark:border-dark-border">
              <p className="text-sm text-gray-500">Loading transactions...</p>
            </div>
          ) : transactions.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-8 text-center dark:border-gray-700">
              <Wallet size={30} className="mx-auto text-gray-400" />
              <p className="mt-3 text-sm text-gray-500">No transactions yet.</p>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction._id}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-dark-border dark:bg-dark-alternate">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      {new Date(transaction.createdAt).toLocaleString("en-IN")}
                    </p>
                  </div>

                  <p className={`font-semibold ${transaction.type === "credit" ? "text-green-600"
                        : "text-red-600"}`}>
                    {transaction.type === "credit" ? "+" : "-"}₹
                    {Number(transaction.amount).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>
          )}
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