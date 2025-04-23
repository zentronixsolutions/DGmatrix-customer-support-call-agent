
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutionsData = [
  {
    id: "vehicle",
    title: "Vehicle Electrification",
    description: "Advanced charging infrastructure and power management systems for electric vehicles, fleets, and charging stations.",
    benefits: [
      "Ultra-fast DC charging compatibility",
      "Smart load balancing and grid management",
      "Compact, efficient charging hardware",
      "Fleet management integration"
    ],
    color: "dgblue",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600&h=350"
  },
  {
    id: "building",
    title: "Building Electrification",
    description: "Integrated solutions for commercial and residential buildings, enabling energy independence and resilience.",
    benefits: [
      "Microgrid capabilities with islanding",
      "Solar and battery storage integration",
      "Peak shaving and demand response",
      "Energy monitoring and optimization"
    ],
    color: "dggreen",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600&h=350"
  },
  {
    id: "datacenter",
    title: "Datacenter Solutions",
    description: "High-density power distribution and management systems for AI and high-performance computing facilities.",
    benefits: [
      "High-density power distribution",
      "Uninterruptible power for critical workloads",
      "Heat recovery and energy efficiency",
      "Scalable modular design"
    ],
    color: "dgorange",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=350"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-dggreen/10 text-dggreen font-medium px-4 py-1 rounded-full text-sm">Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dgblue mb-6 animate-fade-in">
            Powering the Future with Advanced Technology
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in animate-delay-100">
            Our integrated power solutions address the most pressing energy challenges across multiple industries, providing clean, reliable, and efficient energy where it's needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => (
            <div 
              key={solution.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-${solution.color} animate-fade-in`}
              style={{animationDelay: `${(index + 1) * 100}ms`}}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold text-${solution.color} mb-3`}>{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className={`text-${solution.color} mr-2 mt-1 flex-shrink-0`} size={16} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className={`w-full border-${solution.color} text-${solution.color} hover:bg-${solution.color} hover:text-white`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
