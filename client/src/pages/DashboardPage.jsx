import React, { useEffect, useState } from "react";
import DashboardSidebar from "../component/dashboard/DashboardSidebar";
import MobileAccount from "../component/dashboard/MobileAccount";
import DashboardOverview from "../component/dashboard/DashboardOverview";
import EditProfile from "../component/dashboard/EditProfile";
import WalletDetails from "../component/dashboard/WalletDetails";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import Loader from "../component/ui/Loader";
import CallLogs from "../component/dashboard/CallLogs";


const DashboardPage = () => {
  const [activeView, setActiveView] = useState("dashboard")
  const {token, logout} = useAuth()
  const[profile, setProfile] = useState(null)

  useEffect(() =>{
    const fetchProfile = async () =>{
      try{
        const response = await axios.get("http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        setProfile(response.data.user)
      }catch(error){
        console.error("Profile fetch error!", error)
        if(error.response?.status === 401){
          logout()
        }
      }
    }
    if(token){
      fetchProfile()
    }
  },[token, logout])

  if (!profile) {
    return <div className="flex min-h-[calc(100vh-160px)] items-center justify-center">
      <Loader size="lg" />
    </div>
  }

  const handleViewChange = (view) => { setActiveView(view)}

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f7f9fc] text-[#1f2937] dark:bg-dark-alternate dark:text-white">
      {/* Aurora glow - left */}
      <div className="absolute left-80 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-[100px] dark:bg-blue-500/15" />
      {/* Aurora glow - right */}
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-500/15" />

      <div className="flex z-20">

        <DashboardSidebar user={profile} activeView={activeView} onViewChange={handleViewChange} 
        onLogout={logout}/>

        <main className="min-w-0 flex-1 p-4 md:p-6 lg:p-8">
          <MobileAccount user={profile} onViewChange={handleViewChange} onLogout={logout}/>
          {activeView === "dashboard" && (
            <DashboardOverview user={profile} onWallet={() => setActiveView("wallet")}/>
          )}
          {activeView === "profile" && (
            <EditProfile user={profile} onBack={() => setActiveView("dashboard")} onProfileUpdate={setProfile}/>
          )}
          {activeView === "wallet" && (
            <WalletDetails onBack={() => setActiveView("dashboard")}/>
          )}
          {activeView === "callLogs" && (
            <CallLogs />
          )}
        </main>
      </div>
    </div>
  )
}
export default DashboardPage;