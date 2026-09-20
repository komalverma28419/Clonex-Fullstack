import React from "react";
import { User, Wallet, LogOut, Phone, CheckCircle2,} from "lucide-react";
import Button from "../ui/Button";

const DashboardSidebar = ({ user, activeView, onViewChange, onLogout,}) => {

  return (
    <aside
      className="hidden relative w-72 border-r border-gray-200 bg-white p-5 dark:border-dark-border
       dark:bg-dark-background lg:sticky lg:top-20 lg:block lg:min-h-[calc(100vh-5rem)]">

        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-cyan-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950"/>


      {/*-------------------------------- User------------------------------------------- */}
      <div className="relative z-10">
        <div className="border-b border-gray-100 pb-6 text-center dark:border-dark-border">
          <div className="relative mx-auto mb-3 h-24 w-24">
            <div className="h-full w-full overflow-hidden rounded-full bg-primary">
              {user?.profilePhoto ? (
                <img src={user.profilePhoto} alt={user.Username} 
                className="h-full w-full object-cover"/>
              ) : (
                <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-white">
                  {user?.Username
                    ? user.Username
                        .trim()
                        .split(/\s+/)
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()
                    : "U"}
                </div>
              )}
            </div>
            <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-dark-alternate">
              <CheckCircle2 size={20} className="fill-green-500 text-white"/>
            </span>
          </div>

          <h2 className="font-semibold">{user.Username}</h2>
          <p className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-500">
            <Phone size={13} />
            {user.phone}
          </p>
          <p className="mt-1 truncate text-xs text-gray-500">{user.email}</p>
      </div>

      {/* ----------------------------------Actions----------------------------------- */}
      <div className="mt-12 space-y-3">
        <Button icon={<User size={17} />} onClick={() => onViewChange("profile")} iconPosition="left" variant="none" className={`w-full ${activeView === "profile" ? "bg-primary" : "bg-primary/70 hover:opacity-90"}`}>
          Manage Profile
        </Button>

        {/* <Button icon={<Phone size={17} />} onClick={() => onViewChange("callLogs")} iconPosition="left"
         variant="none" className={`w-full ${activeView === "callLogs" ? "bg-secondary" : "bg-secondary/80 hover:opacity-90"}`}>
         Call Logs
        </Button> */}

        <Button icon={<Wallet size={17} />} iconPosition="left" onClick={() => onViewChange("wallet")} variant="none" className="bg-green-500 hover:bg-green-600 w-full text-white">
          Wallet (₹ 0)
        </Button>

        <Button icon={<LogOut size={17} />} iconPosition="left" onClick={onLogout} className="w-full bg-red-500 hover:bg-red-600">
          Logout
        </Button>
      </div>

      </div>
    </aside>
  )
}
export default DashboardSidebar;