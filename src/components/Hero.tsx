
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in">
            <span className="text-gradient">Clean, Secure & Reliable</span>
            <br />
            <span className="text-dgblue">Power Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl animate-fade-in animate-delay-100">
            DG Matrix is revolutionizing energy infrastructure with innovative power electronics solutions for EV charging, microgrids, and AI datacenters.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animate-delay-200">
            <Button
              size="lg"
              className="bg-dgblue hover:bg-dgblue-dark text-white font-medium px-8 py-3 rounded-md"
            >
              Explore Solutions
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-dgblue text-dgblue hover:bg-dgblue hover:text-white font-medium px-8 py-3 rounded-md flex items-center"
              asChild
            >
              <a href="#contact">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in animate-delay-300">
          <div className="relative w-full max-w-md">
            <div className="bg-white p-8 rounded-xl shadow-2xl transform rotate-3 absolute -top-4 -right-4 z-0 border-t-4 border-dggreen"></div>
            <div className="bg-white p-8 rounded-xl shadow-xl z-10 relative border-t-4 border-dgblue">
              <div className="font-montserrat font-bold text-3xl mb-4 text-dgblue">Power Router</div>
              <p className="text-gray-600 mb-6">Our flagship technology enabling the integration of multiple energy sources for optimal power distribution.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="text-dggreen font-bold">99.9%</div>
                  <div className="text-sm text-gray-500">Efficiency</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="text-dgorange font-bold">75%</div>
                  <div className="text-sm text-gray-500">Space Reduction</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="text-dgblue font-bold">250kW</div>
                  <div className="text-sm text-gray-500">Power Rating</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="text-dgorange font-bold">30%</div>
                  <div className="text-sm text-gray-500">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
