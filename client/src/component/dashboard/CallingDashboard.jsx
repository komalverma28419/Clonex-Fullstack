import React, { useEffect, useState } from "react";
import {LayoutDashboard} from "lucide-react"
import axios from "axios";

const CallingDashboard = () => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const totalCalls = calls.length;
  const connectedCalls = calls.filter((call) => call.status === "connected").length;
  const missedCalls = calls.filter((call) => call.status === "missed").length
  const failedCalls = calls.filter((call) => call.status === "failed").length;
  const totalDuration = calls.reduce((total, call) => total + Number(call.duration || 0), 0);
    const averageDuration = totalCalls > 0 ? Math.round(totalDuration / totalCalls) : 0;

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/calls`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setCalls(response.data.calls);
        
      } catch (error) {
        console.error("Calls fetch error:", error);
        
        setCalls([]);
      

      } finally {
        setIsLoading(false);
      }
    };

    fetchCalls();
  }, []);

  return (
    <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center dark:border-gray-700 dark:bg-dark-background">
        <LayoutDashboard size={34} className="mx-auto text-gray-400"/>
        <h2 className="text-xl font-bold">Calling Dashboard</h2>

        <p className="text-sm text-gray-500">Your calling activity and performance will appear here</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Calls */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-dark-border dark:bg-dark-alternate">
                <p className="text-sm text-gray-500">Total Calls</p>
                <p className="mt-2 text-2xl font-bold">
                {isLoading ? "..." : totalCalls}
                </p>
            </div>

            {/* Connected Calls */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-dark-border dark:bg-dark-alternate">
                <p className="text-sm text-gray-500">Connected Calls</p>
                <p className="mt-2 text-2xl font-bold">
                {isLoading ? "..." : connectedCalls}
                </p>
            </div>

            {/* Missed Calls */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-dark-border dark:bg-dark-alternate">
                <p className="text-sm text-gray-500">Missed Calls</p>
                <p className="mt-2 text-2xl font-bold">
                {isLoading ? "..." : missedCalls}
                </p>
            </div>

            {/* Failed Calls */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-dark-border dark:bg-dark-alternate">
                <p className="text-sm text-gray-500">Failed Calls</p>
                <p className="mt-2 text-2xl font-bold">
                {isLoading ? "..." : failedCalls}
                </p>
            </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {/* Total Duration */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-dark-border dark:bg-dark-alternate">
                <p className="text-sm text-gray-500">Total Duration</p>
                <p className="mt-2 text-2xl font-bold">
                {isLoading
                    ? "..."
                    : `${Math.floor(totalDuration / 60)}m ${totalDuration % 60}s`}
                </p>
            </div>

            {/* Average Duration */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-dark-border dark:bg-dark-alternate">
                <p className="text-sm text-gray-500">Avg. Call Duration</p>
                <p className="mt-2 text-2xl font-bold">
                {isLoading
                    ? "..."
                    : `${Math.floor(averageDuration / 60)}m ${averageDuration % 60}s`}
                </p>
            </div>
            </div>
            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 text-left dark:border-dark-border dark:bg-dark-alternate">
            <div className="flex items-center justify-between">
                <div>
                <h3 className="font-semibold">Recent Calls</h3>
                <p className="mt-1 text-sm text-gray-500">
                    Your latest calling activity
                </p>
                </div>
            </div>

            <div className="mt-5 space-y-3">
                {isLoading ? (
                <p className="text-sm text-gray-500">Loading calls...</p>
                ) : calls.length === 0 ? (
                <p className="text-sm text-gray-500">No calls yet.</p>
                ) : (
                calls.slice(0, 5).map((call) => (
                    <div
                    key={call._id}
                    className="flex items-center justify-between rounded-lg border border-gray-100 p-4 dark:border-dark-border"
                    >
                    <div>
                        <p className="font-medium">{call.callerName}</p>
                        <p className="mt-1 text-xs text-gray-500">
                        {call.phoneNumber}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-sm font-medium capitalize">
                        {call.status}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                        {Math.floor(call.duration / 60)}m {call.duration % 60}s
                        </p>
                    </div>
                    </div>
                ))
                )}
            </div>
        </div>
    </div>
  )
};

export default CallingDashboard;