import React, { useEffect } from "react";
import thankyou from "../../assets/images/thankyou.jpeg";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() =>{
        navigate('/')
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-background">
     <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className=" rounded-lg px-6 flex flex-col items-center text-center">
          <img src={thankyou} alt="Thank You"className="w-56 md:w-72"/>
          <div className="bg-[#EAF8F0] rounded-md px-6 py-3 mt-6">
            <p className="font-semibold text-[#2E2E2E]">
              Your demo request has been submitted successfully.
            </p>
          </div>

          <p className="text-[#707070] mt-6 max-w-lg leading-7">
            Thank you for your interest. Our team will contact you shortly to
            schedule your demo.
          </p>
        </div>
     </div>
    </section>
  );
};

export default ThankYou;