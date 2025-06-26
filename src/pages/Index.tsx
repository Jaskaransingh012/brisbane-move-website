
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Home, Building, Package, Archive, Star, CheckCircle, Phone } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Home,
      title: "House Moving",
      description: "Professional residential moves with careful handling of your belongings",
      features: ["Furniture disassembly/assembly", "Fragile item protection", "Same day service available"]
    },
    {
      icon: Building,
      title: "Office Moving",
      description: "Minimize business downtime with our efficient commercial relocation services",
      features: ["Weekend moves available", "IT equipment handling", "Document secure transport"]
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Professional packing with high-quality materials and expert techniques",
      features: ["Quality packing materials", "Unpacking services", "Fragile item specialists"]
    },
    {
      icon: Archive,
      title: "Storage Solutions",
      description: "Secure storage options for your short-term and long-term needs",
      features: ["Climate controlled", "24/7 security", "Flexible access times"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Brisbane City",
      text: "Outstanding service! The team was professional, careful with our furniture, and made our move stress-free.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "South Brisbane", 
      text: "Used them for our office relocation. Everything was handled efficiently with minimal disruption to our business.",
      rating: 5
    },
    {
      name: "Emma Williams",
      location: "CBD",
      text: "Excellent packing service! They took great care of our fragile items and everything arrived safely.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(21, 101, 192, 0.8)), url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="relative z-10 text-center container mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to<br />
              <span className="text-yellow-300">Brisbane Removalists</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional removalist company serving Brisbane City, South Brisbane, CBD and Inner Suburbs. 
              Reliable and affordable moving services for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <a href="tel:+61712345678">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive moving solutions for Brisbane residents and businesses. 
                We handle everything from small apartments to large office relocations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade-in-up" className={`delay-${index * 100}`}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose Brisbane Removalists?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                      <p className="text-gray-600">Fully licensed removalist company with comprehensive insurance coverage for your peace of mind.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Local Brisbane Experts</h3>
                      <p className="text-gray-600">Deep knowledge of Brisbane suburbs, traffic patterns, and building regulations ensures efficient moves.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                      <p className="text-gray-600">Transparent, affordable pricing with no hidden fees. We offer the best value for professional moving services.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
                      <p className="text-gray-600">Urgent move? We offer same day removalist services for those last-minute relocations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional removalists team loading truck"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what Brisbane residents say about our moving services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-in-up" className={`delay-${index * 100}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-100 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Move?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation quote today. Our team is ready to make your Brisbane move smooth and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 px-8 py-4 text-lg">
                <a href="tel:+61712345678">
                  <Phone className="mr-2" size={20} />
                  (07) 1234 5678
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
