
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-dggreen/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dgblue/10 rounded-full z-0"></div>
              <div className="relative z-10 bg-gray-100 p-1 rounded-xl shadow-md overflow-hidden">
                <div className="relative pt-[56.25%] bg-white rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dgblue/5 to-dggreen/5">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                        <span className="font-montserrat font-bold text-4xl text-dgblue">DG</span>
                      </div>
                      <h3 className="text-xl font-bold text-dgblue mb-2">Founded 2022</h3>
                      <p className="text-gray-600">Raleigh, North Carolina</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-dgblue/10 text-dgblue font-medium px-4 py-1 rounded-full text-sm">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dgblue animate-fade-in">
                Revolutionizing Energy Infrastructure
              </h2>
              <p className="text-gray-600 animate-fade-in animate-delay-100">
                DG Matrix was founded in 2022 with a bold mission: to transform how the world generates, stores, and uses electricity. Headquartered in Raleigh, North Carolina, our team of engineers and energy experts are dedicated to creating power electronics solutions that enable a cleaner, more reliable future.
              </p>
              <p className="text-gray-600 animate-fade-in animate-delay-200">
                Our innovation focuses on bridging the gap between renewable energy sources and modern power needs, creating infrastructure that's ready for tomorrow's challenges while solving today's problems.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 animate-fade-in animate-delay-300">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="font-bold text-2xl text-dgblue mb-2">50+</div>
                  <div className="text-gray-600">Energy experts and engineers</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="font-bold text-2xl text-dggreen mb-2">15+</div>
                  <div className="text-gray-600">Patents in power electronics</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="font-bold text-2xl text-dgorange mb-2">24/7</div>
                  <div className="text-gray-600">Customer support availability</div>
                </div>
              </div>
              
              <div className="pt-4 animate-fade-in animate-delay-400">
                <Button className="bg-dgblue hover:bg-dgblue-dark text-white">
                  Learn More About Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
