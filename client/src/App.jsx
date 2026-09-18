import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CallTrackingPage from './pages/CallTrackingPage'
import AiInsightPage from './pages/AiInsightPage'
import AutomationPage from './pages/AutomationPage'
import PricingPage from './pages/PricingPage'

import Footer from './component/Footer'
import BlogPage from './pages/BlogPage'
import BlogDetail from './component/blog/BlogDetail'
import RequestDemoForm from './component/requestDemo/RequestDemoForm'
import ThankYou from './component/requestDemo/Thankyou'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import TermsConditionsPage from './pages/TermsConditionsPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './component/auth/ProtectedRoute'
import VerifyEmail from './component/VerifyEmail'
import Checkout from './pages/Checkout'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
         <Route path="/features/call-tracking" element={<CallTrackingPage/>}/>
         <Route path="/features/ai-insights" element={<AiInsightPage/>}/>
         <Route path="/features/automation" element={<AutomationPage/>}/>
         <Route path="/blogs" element={<BlogPage/>}/>
         <Route path="/blog/:id" element={<BlogDetail/>}/>
         <Route path='/request-demo' element={<RequestDemoForm/>}/>
         <Route path='/thankyou' element={<ThankYou/>}/>
         <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
         <Route path='/refund-policy' element={<RefundPolicyPage/>}/>
         <Route path='/terms-conditions' element={<TermsConditionsPage/>}/>
         <Route path='/signup' element={<SignupPage/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/dashboard' element={
          <ProtectedRoute>
            <DashboardPage/>
          </ProtectedRoute>
         }/>
         <Route path="/checkout" element={<Checkout/>}/>
         <Route path='/verify-email' element={<VerifyEmail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
