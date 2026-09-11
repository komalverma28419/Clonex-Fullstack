import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import darkLogo from '../assets/images/darkLogo.png'
import { featureItems, navItems } from '../data/navbardata'
import Button from './ui/Button'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { ChevronDown } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useLogin } from '../context/LoginContext'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [featureOpen, setFeatureOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const menuRef = useRef(null)
  const location = useLocation()
  const {isAuthenticated, user, logout} = useAuth()
  const { openLogin } = useLogin();
  const navigate  =  useNavigate()


  const handleClose = () =>{
    setIsOpen(false)
  }

  useEffect(() =>{
    setIsOpen(false)
    setFeatureOpen(false)
  },[location.pathname])

  useEffect(() =>{
    const handleClick = (e) => {
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setIsOpen(false)
        setFeatureOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  },[])


 const {theme} = useTheme()
  return (
      <header className='sticky top-0 z-50 h-20 w-full shadow bg-white dark:bg-[#202738]'>
        <div ref={menuRef} className='max-w-7xl w-full h-full mx-auto  px-7 lg:px-12 xl:px-14 py-2 flex items-center justify-between'>
          <NavLink to='/'>
            <img src={theme ==="dark"? darkLogo : logo} alt="logo" className=' h-10 lg:h-14 '/>
          </NavLink>

          <nav className='hidden min-[900px]:flex items-center gap-4 xl:gap-6'>
            
            <ul className='flex items-center gap-4 xl:gap-6'>
              {navItems.map((item) =>(
              <li key={item.name} className={item.type === "feature" ? "relative" : ""}>
                {item.type === "feature" ? (
                  <>
                    <button onClick={() =>
                      setFeatureOpen((open) => !open)
                    } className="flex gap-2 items-center font-medium text-sm lg:text-base text-gray-900 dark:text-white">
                      {item.name}
                      <ChevronDown size={18} className={`transition-transform duration-200 ${featureOpen ? "rotate-180": ""}`}/>
                    </button>
                    <div className={`absolute left-0 top-full pt-7 z-50 ${featureOpen ? "block": "hidden"}`}>
                      <div className='w-60 rounded-md bg-white dark:bg-[#202738] border border-gray-200 dark:border-gray-700 py-3'>
                        {featureItems.map((feature) =>(
                          <Link
                          onClick={() => setFeatureOpen(false)}
                          key={feature.name} to={feature.path} className='block px-4 py-1.5 text-[15px] text-gray-700 dark:text-dark-muted hover:bg-primary hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-muted'>{feature.name}</Link>
                        ))}
                      </div>
                    </div>
                  </>
                ): 
                  (
                    <NavLink  to={item.path} className={({isActive}) => ` font-medium text-sm 
                  lg:text-base ${isActive ? "text-primary" :"text-gray-900 dark:text-white"}`}>
                    {item.name}
                  </NavLink>
                  )
                }
                
              </li>
            ))}
          
            </ul>

            <div className='flex gap-4'>
              <ThemeToggle/>
              <div className='flex gap-4'>
                {!isAuthenticated ? (
                  <>
                    <Button text="Login" variant='secondary' className='border border-[#E0E0E0]'shine 
                    onClick={openLogin}/>
                    <Button text="Request Demo" className='font-bold ' shine to="/request-demo"/>
                  </>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <button onClick={() => navigate("/dashboard")}
                        type="button"
                        className="h-12 w-12 rounded-full bg-gray-300 text-3xl text-primary flex items-center justify-center font-semibold uppercase cursor-pointer"
                      >
                        {user?.Username?.charAt(0) || "U"}
                      </button>
                    </div>

                    <Button text="Request Demo" className="font-bold" shine to="/request-demo"/>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/*--------------------------------- mobile-menu ----------------------------------*/}

          <div className="block min-[900px]:hidden" ref={menuRef}>
            <div className="flex items-center gap-4">
              <ThemeToggle onToggle={handleClose} />
              {isAuthenticated && (
                <button type="button" onClick={() => navigate("/dashboard")}
                  className="h-10 w-10 rounded-full bg-gray-300 text-primary flex items-center justify-center font-semibold uppercase cursor-pointer">
                  {user?.Username?.charAt(0) || "U"}
                </button>
              )}
              <button type="button" className="cursor-pointer" onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div
              className={`absolute top-full left-0 w-full bg-white dark:bg-[#0B0F19] border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out overflow-hidden
                ${
                  isOpen ? "max-h-125 opacity-100 py-5" : "max-h-0 opacity-0 py-0"
                }`}>

              <nav className="flex flex-col gap-5 px-6">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.name}>

                      {item.type === "feature" ? (
                        <div>
                          <button type="button" onClick={() =>
                              setFeatureOpen((open) => !open)
                            }
                            className="w-full flex items-center justify-between font-medium text-sm
                              text-gray-900 dark:text-white">
                            <span>{item.name}</span>
                            <ChevronDown size={18} className={`transition-transform duration-200 ${
                                featureOpen ? "rotate-180" : "" }`}
                            />
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300
                              ${featureOpen ? "max-h-60 mt-3 opacity-100" : "max-h-0 mt-0 opacity-0"}`}>
                            <div
                              className="ml-3 border-l-2 border-primary flex flex-col">
                              {featureItems.map((feature) => (
                                <Link key={feature.name} to={feature.path} onClick={() => {
                                    setFeatureOpen(false)
                                    setIsOpen(false)
                                  }}
                                  className="px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                                  {feature.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <NavLink to={item.path} onClick={() => setIsOpen(false)} className={({ isActive }) =>
                            `font-medium text-sm ${ isActive ? "text-primary" : "text-gray-900 dark:text-white"}`
                          }>
                          {item.name}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>

                <div className='flex flex-col pt-2 gap-4'>
                  <Button text="Login" variant='secondary' className='border border-[#E0E0E0]'shine 
                      onClick={() => { 
                        openLogin()
                        setIsOpen(false) 
                      }}/>
                  <Button text="Request Demo" className='font-bold ' shine to="/request-demo"/>
                </div>
              </nav>
            </div>
          </div>
        </div>   
      </header>
      
)}

export default Navbar
