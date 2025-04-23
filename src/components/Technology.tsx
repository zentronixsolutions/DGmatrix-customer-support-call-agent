
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Technology = () => {
  return (
    <section id="technology" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-dgblue/5 rounded-bl-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-dggreen/5 rounded-tr-full z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative animate-fade-in">
              <div className="bg-gradient-to-br from-dgblue to-dggreen p-1 rounded-2xl shadow-xl">
                <div className="bg-white rounded-2xl p-6 md:p-8">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-dgblue/10 to-dggreen/10 p-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-dgblue mb-2">Power Router™</div>
                        <p className="text-gray-500">Next-generation bidirectional power conversion technology</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-bold text-dgblue">Compact Design</div>
                      <div className="text-sm text-gray-600">75% smaller than traditional solutions</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-bold text-dggreen">High Efficiency</div>
                      <div className="text-sm text-gray-600">Up to 99.5% energy conversion</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-bold text-dgorange">Scalability</div>
                      <div className="text-sm text-gray-600">Modular from 30kW to 1MW+</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-bold text-dgblue">Connectivity</div>
                      <div className="text-sm text-gray-600">Advanced IoT integration</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="bg-dgblue hover:bg-dgblue-dark text-white">
                      Download Tech Specs
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-dggreen/20 rounded-full z-0"></div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-dgblue/20 rounded-full z-0"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-dgorange/10 text-dgorange font-medium px-4 py-1 rounded-full text-sm">Technology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dgblue animate-fade-in">
                The Power Router Technology
              </h2>
              <p className="text-lg text-gray-600 animate-fade-in animate-delay-100">
                Our flagship Power Router technology represents a breakthrough in power electronics, enabling seamless integration and management of multiple energy sources and loads in a compact, efficient package.
              </p>
              
              <div className="space-y-4 animate-fade-in animate-delay-200">
                <div className="flex items-start">
                  <div className="bg-dgblue/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Check className="text-dgblue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Bidirectional Power Conversion</h3>
                    <p className="text-gray-600">Enables power flow in multiple directions, facilitating integration of renewable sources, storage, and loads.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dggreen/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Check className="text-dggreen" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Advanced Controls Platform</h3>
                    <p className="text-gray-600">Intelligent software optimizes power flow, provides predictive maintenance, and enables remote management.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dgorange/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Check className="text-dgorange" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Modular Architecture</h3>
                    <p className="text-gray-600">Scalable design allows for easy expansion and configuration to meet various application requirements.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 animate-fade-in animate-delay-300">
                <Button className="bg-dgblue hover:bg-dgblue-dark text-white">
                  Request Technical Demonstration
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
