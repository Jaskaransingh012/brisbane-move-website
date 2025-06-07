
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Building, Package, Archive, Truck, Users, Clock, Shield } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: "House Moving & Residential Removals",
      description: "We specialize in residential moves, ensuring your belongings are handled with care and delivered safely to your new home. Our experienced team knows how to protect your furniture, artwork, and personal items during transit.",
      features: [
        "Professional furniture disassembly and reassembly",
        "Specialized handling of fragile items and artwork", 
        "Piano and heavy furniture moving",
        "Same day removalist service available",
        "Free quote and pre-move consultation"
      ]
    },
    {
      icon: Building,
      title: "Office Moving & Commercial Relocations",
      description: "Our team is experienced in office relocations, minimizing downtime and ensuring a smooth transition for your business. We understand the importance of getting your business back up and running quickly.",
      features: [
        "Weekend and after-hours moves to minimize disruption",
        "Secure IT equipment and server handling",
        "Document and filing system relocation",
        "Furniture installation and setup",
        "Project management and coordination"
      ]
    },
    {
      icon: Package,
      title: "Professional Packing Services",
      description: "Let us take care of the packing with our high-quality materials and professional packing techniques. Our team knows the best methods to protect your items during transport.",
      features: [
        "High-quality packing materials included",
        "Fragile item specialists and custom crating",
        "Unpacking services at your new location",
        "Wardrobe boxes for hanging clothes",
        "China and glassware protection systems"
      ]
    },
    {
      icon: Archive,
      title: "Storage Solutions",
      description: "Secure storage options for short-term or long-term needs. Whether you need storage during your move or for an extended period, we have flexible solutions.",
      features: [
        "Climate-controlled storage facilities",
        "24/7 security and surveillance",
        "Flexible access times and durations",
        "Insurance coverage available",
        "Inventory management and tracking"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: "Same Day Removalists Brisbane",
      description: "Urgent moving needs? Our same day removalist service can handle last-minute relocations across Brisbane and surrounding areas."
    },
    {
      icon: Users,
      title: "Man with Van Service",
      description: "For smaller moves, our man with van service provides an affordable solution for apartment moves and small loads."
    },
    {
      icon: Clock,
      title: "After Hours Moving",
      description: "We offer evening and weekend moving services to accommodate your busy schedule and minimize disruption."
    },
    {
      icon: Shield,
      title: "Furniture Removalists",
      description: "Specialized furniture moving service with proper equipment and techniques to protect your valuable pieces."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Moving Services</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Comprehensive removal services for Brisbane City, South Brisbane, CBD and all Inner Suburbs. 
                From house moving to office relocations, we've got you covered.
              </p>
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Moving Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As Brisbane's trusted removalist company, we offer a full range of moving services 
                designed to make your relocation smooth and stress-free.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <AnimatedSection key={index} animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="bg-white rounded-lg shadow-xl p-8">
                      <div className="flex items-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mr-4">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img 
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1600585154340-be6161a56a0c' : index === 1 ? '1497366216548-37526070297c' : index === 2 ? '1553062407-98eeb64c6a62' : '1586023492125-27b2c045efd7'}?q=80&w=800&auto=format&fit=crop`}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Additional Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized moving solutions to meet your unique requirements across Brisbane and surrounding areas.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} animation="fade-in-up" className={`delay-${index * 100}`}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Service Areas</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                We provide reliable removalist services throughout Brisbane and surrounding areas.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Brisbane City & CBD</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Brisbane City</li>
                    <li>• South Brisbane</li>
                    <li>• Fortitude Valley</li>
                    <li>• Spring Hill</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Inner Suburbs</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• New Farm</li>
                    <li>• Teneriffe</li>
                    <li>• West End</li>
                    <li>• Kangaroo Point</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Greater Brisbane</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• All Brisbane Suburbs</li>
                    <li>• Gold Coast</li>
                    <li>• Sunshine Coast</li>
                    <li>• Interstate Moves</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact Brisbane's most reliable removalist company for your free quote. 
              We're here to make your move seamless and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 px-8 py-4 text-lg">
                <a href="tel:+61712345678">(07) 1234 5678</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
