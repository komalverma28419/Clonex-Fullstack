import React from "react";
import { User, Wallet, LogOut, Phone,} from "lucide-react";
import Button from "../ui/Button";

const MobileAccount = ({
  user,
  onViewChange,
  onLogout,
}) => {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-[#1f2937] lg:hidden">
      <div className="p-5">

        {/* User Info */}
        <div className="flex items-center gap-4">

          <div className="relative shrink-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
              {user.Username.charAt(0).toUpperCase()}
            </div>
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-[#1f2937]" />
          </div>
          {/* ---------------------User Details------------------------ */}
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400"> Welcome back</p>
            <h2 className="mt-0.5 truncate text-lg font-bold text-gray-900 dark:text-white">
              {user.Username}
            </h2>
            <p className="mt-1 truncate text-xs text-gray-500"> {user.email}</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-500">
              <Phone size={12} />
              {user.phone}
            </p>
          </div>

        </div>

        {/*---------------------------------- Mobile Actions---------------------------------- */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          <Button onClick={() => onViewChange("profile")} icon={<User size={18} />} iconPosition="left" 
          variant="secondary" className="hover:text-primary hover:bg-primary/10"> 
            Profile
          </Button>

          <Button icon={<Wallet size={16} />} iconPosition="left" variant="none" 
          onClick={() => onViewChange("wallet")} 
          className="border border-green-500 transition hover:bg-green-600">
             Wallet
          </Button>

          <Button icon={<LogOut size={18} />} iconPosition="left" onClick={onLogout} variant="none" className="text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/20 border border-red-600">
            Logout
          </Button>
        </div>

      </div>

    </div>
  )
}
export default MobileAccount;