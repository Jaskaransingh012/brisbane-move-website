
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Clock, Shield, Star, Truck } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "David Mitchell",
      role: "Founder & Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      bio: "With over 15 years in the removalist industry, David founded Brisbane Removalists to provide reliable, affordable moving services to Brisbane families and businesses."
    },
    {
      name: "Sarah Thompson",
      role: "Customer Service Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0e1?q=80&w=400&auto=format&fit=crop",
      bio: "Sarah ensures every customer receives exceptional service from initial quote to move completion. She coordinates our team to deliver seamless moving experiences."
    },
    {
      name: "Mark Johnson",
      role: "Lead Removalist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      bio: "Mark leads our experienced moving team with a focus on careful handling and efficient service. He's been with us for 8 years and knows Brisbane like the back of his hand."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      location: "New Farm",
      text: "Brisbane Removalists made our house move incredibly smooth. The team was professional, punctual, and took great care of our furniture. Highly recommended!",
      rating: 5
    },
    {
      name: "Robert Chen",
      location: "Brisbane City",
      text: "Used them for our office relocation from the CBD to South Brisbane. They handled everything efficiently and our business was back up and running the next day.",
      rating: 5
    },
    {
      name: "Lisa Williams",
      location: "Fortitude Valley",
      text: "Excellent packing service! They carefully packed all our belongings and everything arrived at our new home in perfect condition. Great value for money.",
      rating: 5
    },
    {
      name: "Tom Parker",
      location: "West End",
      text: "Same day service was a lifesaver when our plans changed last minute. The team was accommodating and professional throughout the entire process.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      location: "Kangaroo Point",
      text: "Outstanding customer service from start to finish. Sarah kept us informed throughout the move and the team exceeded our expectations.",
      rating: 5
    },
    {
      name: "James Wilson",
      location: "Teneriffe",
      text: "Professional, reliable, and affordable. Brisbane Removalists delivered exactly what they promised. Will definitely use them again for our next move.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Truck, value: "10+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Satisfaction Rate" },
    { icon: Clock, value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Brisbane Removalists</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Founded with a commitment to excellence, we've been helping Brisbane families and businesses 
                move with confidence for over a decade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2014, Brisbane Removalists has been helping families and businesses move 
                    for over 10 years. What started as a small local moving service has grown into 
                    Brisbane's most trusted removalist company.
                  </p>
                  <p>
                    Our founder, David Mitchell, recognized the need for reliable, affordable moving 
                    services in Brisbane after experiencing poor service during his own family move. 
                    He assembled a team of experienced professionals who share his commitment to 
                    exceptional customer service.
                  </p>
                  <p>
                    Today, we serve all areas of Brisbane including Brisbane City, South Brisbane, 
                    the CBD, and all Inner Suburbs. Our team of licensed and insured removalists 
                    continues to set the standard for professional moving services in Queensland.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                  alt="Brisbane Removalists team"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-yellow-500 text-black p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold">2014</div>
                  <div className="text-sm font-semibold">Founded</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and customer satisfaction.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="fade-in-up" className={`delay-${index * 100}`}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced team of professionals is dedicated to making your move 
                as smooth and stress-free as possible.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} animation="fade-in-up" className={`delay-${index * 100}`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what Brisbane residents say about our moving services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-in-up" className={`delay-${index * 100}`}>
                <div className="bg-gray-50 rounded-lg p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-primary text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and ensure we deliver the best possible service to our customers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p className="text-gray-300">We show up on time, every time, and deliver on our promises.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-100">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Professionalism</h3>
                <p className="text-gray-300">Our team maintains the highest standards of conduct and service.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-200">
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-300">We strive for excellence in every aspect of our service delivery.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-300">
              <div className="text-center">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-gray-300">Your satisfaction is our top priority in everything we do.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Difference</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to see why Brisbane chooses us for their moving needs? 
              Contact us today for your free quote and experience our exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <a href="tel:+61712345678">(07) 1234 5678</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
