
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    moveDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 1 hour with your free quote.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      moveDate: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Get your free quote today! Brisbane's most reliable removalist company 
                is ready to make your move smooth and stress-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+61712345678" className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                  <Phone className="mr-2" size={20} />
                  Call Now: (07) 1234 5678
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection animation="slide-in-left">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Get Your Free Quote</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 1 hour with a detailed quote 
                  for your Brisbane move.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service Required *</Label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="house-moving">House Moving</option>
                        <option value="office-moving">Office Moving</option>
                        <option value="packing-services">Packing Services</option>
                        <option value="storage-solutions">Storage Solutions</option>
                        <option value="same-day-removal">Same Day Removal</option>
                        <option value="man-with-van">Man with Van</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="moveDate">Preferred Move Date</Label>
                      <Input
                        id="moveDate"
                        name="moveDate"
                        type="date"
                        value={formData.moveDate}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Tell us about your move: number of rooms, special items, pickup/delivery addresses, etc."
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full py-3 text-lg">
                    Get My Free Quote
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="slide-in-right">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">(07) 1234 5678</p>
                        <p className="text-sm text-gray-500">Available 24/7 for quotes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">info@brisbaneremovalists.com.au</p>
                        <p className="text-sm text-gray-500">We respond within 1 hour</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">123 Brisbane Street<br />Brisbane City, QLD 4000</p>
                        <p className="text-sm text-gray-500">Visit us for in-person quotes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Business Hours</h4>
                        <p className="text-gray-600">Monday - Sunday: 6:00 AM - 8:00 PM</p>
                        <p className="text-sm text-gray-500">Emergency moves available after hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-primary text-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
                  <p className="text-blue-100 mb-4">
                    We provide removalist services throughout Brisbane and surrounding areas:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-1">
                      <li>• Brisbane City</li>
                      <li>• South Brisbane</li>
                      <li>• Fortitude Valley</li>
                      <li>• New Farm</li>
                      <li>• Teneriffe</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• West End</li>
                      <li>• Kangaroo Point</li>
                      <li>• Spring Hill</li>
                      <li>• CBD & Inner Suburbs</li>
                      <li>• All Brisbane Areas</li>
                    </ul>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-yellow-500 text-black rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Need Same Day Service?</h3>
                  <p className="mb-4">
                    For urgent moving requirements or same day removalist services in Brisbane, 
                    call us immediately:
                  </p>
                  <a 
                    href="tel:+61712345678" 
                    className="inline-flex items-center bg-black text-yellow-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="mr-2" size={20} />
                    Emergency Line: (07) 1234 5678
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Brisbane City, we're easily accessible for consultations and quotes.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  123 Brisbane Street, Brisbane City, QLD 4000
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Google Maps integration would be implemented here)
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
