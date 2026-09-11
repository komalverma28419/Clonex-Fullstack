import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import about_HeroImg from "../../assets/images/about_Hero.png"
import Button from "../ui/Button";

const AboutHero = () => {
  return (
    <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-background">

      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          <div>
            <h1 className="text-dark dark:text-dark-text md:leading-9 lg:leading-10 font-bold text-2xl md:text-3xl lg:text-4xl">
              Empowering Businesses Through Intelligent Call Solutions
            </h1>

            <p className="mt-6 text-base text-font dark:text-dark-muted leading-8">
              We help businesses connect with customers more efficiently using
              AI-powered calling, real-time analytics, and seamless automation.
              Every conversation becomes an opportunity to grow.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button text="Get Started" size="md" icon={<ArrowRight size={18} />}
                 className="w-full sm:w-auto" to="/pricing"/>
              </Link>
              <Link to="/demo" >
                <Button text="Watch Demo" variant="tertiary" size="md" icon={<PlayCircle size={18}/>} 
                className="w-full sm:w-auto" to="/pricing"/>
              </Link>
            </div>
          </div>

          <div>
            <img src={about_HeroImg} alt="About Clonex" className="w-full"/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;