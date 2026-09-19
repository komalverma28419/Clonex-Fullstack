import React, { useEffect, useState } from "react";
import axios from "axios";
import { Phone, CheckCircle2, XCircle, Clock3, Search, Filter } from "lucide-react";



const CallLogs = () => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedCall, setSelectedCall] = useState(null);

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
        console.error("Call logs fetch error:", error);
        setCalls([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCalls();
  }, []);

  const getStatusIcon = (status) => {
    if (status === "connected") {
      return <CheckCircle2 size={18} className="text-green-500" />;
    }

    if (status === "missed") {
      return <Clock3 size={18} className="text-yellow-500" />;
    }

    return <XCircle size={18} className="text-red-500" />;
  };

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    return `${minutes}m ${seconds}s`;
  };

    const formatDate = (date) => {
        return new Date(date).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        });
    }

    const getStatusBadge = (status) => {
    switch (status) {
        case "connected":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

        case "missed":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

        case "failed":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

        default:
        return "bg-gray-100 text-gray-600";
    }
    }

    const filteredCalls = calls.filter((call) => {
        const matchesSearch =
            call.callerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            call.phoneNumber.includes(searchTerm);

        const matchesStatus =
            statusFilter === "all" || call.status === statusFilter;

        return matchesSearch && matchesStatus;
        });

    return (
    <section>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">Call Logs</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          View and manage your calling activity.
        </p>
      </div>

      {/* Call Logs Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-dark-border dark:bg-dark-background">

        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-5 dark:border-dark-border">
            {/* Search & Filter */}
            <div className="flex flex-col gap-3 border-b border-gray-200 p-5 dark:border-dark-border sm:flex-row">
            
            {/* Search */}
            <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="text" placeholder="Search caller or phone number..." value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary dark:border-dark-border dark:bg-dark-background"/>
            </div>

            {/* Status Filter */}
            <div className="relative">
                <Filter size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-8 text-sm outline-none transition focus:border-primary dark:border-dark-border dark:bg-dark-background sm:w-48">
                <option value="all">All Status</option>
                <option value="connected">Connected</option>
                <option value="missed">Missed</option>
                <option value="failed">Failed</option>
                </select>
            </div>
            </div>
          <div>
            <h2 className="font-semibold">All Calls</h2>
            <p className="mt-1 text-sm text-gray-500">
              {isLoading ? "Loading..." : `${filteredCalls.length} calls`}
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Phone size={19} className="text-primary" />
          </div>
        </div>

        {/* Loading */}
        {isLoading ? (
          <div className="p-8 text-center text-sm text-gray-500">
            Loading call logs...
          </div>
        ) : filteredCalls.length === 0 ? (
          /* Empty State */
          <div className="p-10 text-center">
            <Phone size={35} className="mx-auto text-gray-400" />
            <h3 className="mt-3 font-semibold">No calls yet</h3>
            <p className="mt-1 text-sm text-gray-500">Your calling activity will appear here.</p>
          </div>
        ) : (
          /* Calls */
          <div className="divide-y divide-gray-100 dark:divide-dark-border">
            {filteredCalls.map((call) => (
                <div key={call._id} onClick={() => setSelectedCall(call)}
                className="flex cursor-pointer flex-col gap-4 rounded-xl p-5 transition hover:bg-blue-50 dark:hover:bg-slate-800 md:flex-row md:items-center md:justify-between">
                {/* Caller */}
                    <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                        <p className="font-semibold">{call.callerName}</p>
                        <p className="mt-1 text-sm text-gray-500"> {call.phoneNumber}</p>
                    </div>
                    </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                    {getStatusIcon(call.status)}
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusBadge(call.status )}`}>
                        {call.status}
                    </span>
                </div>

                {/* Duration */}
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-sm font-medium">{formatDuration(Number(call.duration || 0))}</p>
                </div>

                {/* Date */}
                <div className="md:text-right">
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="mt-1 text-sm font-medium"> {formatDate(call.createdAt)} </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* -------------------- Call Details Drawer -------------------- */}
        {selectedCall && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 shadow-2xl dark:bg-dark-background">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-dark-border">
                <h2 className="text-xl font-bold">Call Details</h2>

                <button
                onClick={() => setSelectedCall(null)}
                className="rounded-lg px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-dark-alternate"
                >
                Close
                </button>
            </div>

            {/* Caller Avatar */}
            <div className="mt-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                {selectedCall.callerName.charAt(0).toUpperCase()}
                </div>

                <div>
                <h3 className="text-lg font-semibold">
                    {selectedCall.callerName}
                </h3>

                <p className="text-sm text-gray-500">
                    {selectedCall.phoneNumber}
                </p>
                </div>
            </div>

            {/* Status */}
            <div className="mt-8 space-y-5">
                <InfoRow
                label="Call Status"
                value={selectedCall.status}
                badge={getStatusBadge(selectedCall.status)}
                />

                <InfoRow
                label="Duration"
                value={formatDuration(Number(selectedCall.duration))}
                />

                <InfoRow
                label="Date & Time"
                value={formatDate(selectedCall.createdAt)}
                />
            </div>

            {/* Future Section */}
            <div className="mt-8 rounded-xl bg-gray-50 p-4 dark:bg-dark-alternate">
                <p className="text-sm font-medium">Call Notes</p>

                <p className="mt-2 text-sm text-gray-500">
                Notes feature will be available soon.
                </p>
            </div>
            </div>
        </div>
        )}
    </section>
  );
};


const InfoRow = ({ label, value, badge }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">{label}</p>

      {badge ? (
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${badge}`}
        >
          {value}
        </span>
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  );
};
export default CallLogs;