import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutCard = ({ imageSrc, category, title, onArrowClick, linkTo }) => {
  const navigate =  useNavigate()
  const handleNavigation = () =>{
    if(linkTo){
      navigate(linkTo)
    }
  }
  return (
    <div className="group relative max-w-[230px] sm:max-w-none w-full aspect-[2/3] rounded-xl overflow-hidden cursor-pointer">
      {/* Waveform Border - Dark mode only */}
      <div className="hidden dark:block absolute inset-0 rounded-xl overflow-hidden opacity-100 md:opacity-0
       md:group-hover:opacity-100 transition-opacity duration-300">
        <div className="wave-border" />
      </div>

      {/* Card */}
      <div className="absolute inset-[2px] rounded-[10px] overflow-hidden bg-white dark:bg-dark-card">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#133FE3]/50 
        to-transparent text-white px-6 py-5 flex flex-col justify-between transition-transform
        duration-500 ease-out translate-y-0 md:-translate-y-full md:group-hover:translate-y-0">
          <div className="mt-20 space-y-5">
            <span className="text-sm font-light">{category}</span>
            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              {title}
            </h3>
          </div>

          <button
            onClick={handleNavigation}
            aria-label="View Project"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center 
            justify-center transition-all duration-300 hover:border-[#F2055C] hover:text-[#F2055C]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;