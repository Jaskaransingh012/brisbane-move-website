
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ZoomIn, Truck, Home, Building, Package } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop",
      title: "Professional Moving Truck",
      category: "equipment",
      description: "Our modern fleet of moving trucks equipped with the latest safety features"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      title: "House Moving in Progress",
      category: "house-moving",
      description: "Our team carefully loading furniture from a Brisbane home"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      title: "Professional Packing Service",
      category: "packing",
      description: "Expert packing techniques to protect your valuable items"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      title: "Office Relocation",
      category: "office-moving",
      description: "Efficient office move in Brisbane CBD with minimal downtime"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=800&auto=format&fit=crop",
      title: "Team in Action",
      category: "team",
      description: "Our experienced removalists team working together"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      title: "Storage Facility",
      category: "storage",
      description: "Secure storage solutions for short and long-term needs"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      title: "Furniture Protection",
      category: "packing",
      description: "Proper wrapping and protection of delicate furniture pieces"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
      title: "Brisbane Apartment Move",
      category: "house-moving",
      description: "Successful apartment relocation in South Brisbane"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop",
      title: "Heavy Lifting Equipment",
      category: "equipment",
      description: "Specialized equipment for heavy furniture and appliances"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=800&auto=format&fit=crop",
      title: "Corporate Office Move",
      category: "office-moving",
      description: "Large-scale office relocation completed over the weekend"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1600607688618-c2bc64432cfa?q=80&w=800&auto=format&fit=crop",
      title: "Customer Satisfaction",
      category: "team",
      description: "Happy customers after a successful Brisbane move"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800&auto=format&fit=crop",
      title: "Piano Moving Service",
      category: "house-moving",
      description: "Specialized piano moving with proper equipment and expertise"
    }
  ];

  const categories = [
    { id: "all", label: "All Photos", icon: null },
    { id: "equipment", label: "Equipment & Trucks", icon: Truck },
    { id: "house-moving", label: "House Moving", icon: Home },
    { id: "office-moving", label: "Office Moving", icon: Building },
    { id: "packing", label: "Packing Services", icon: Package },
    { id: "team", label: "Our Team", icon: null },
    { id: "storage", label: "Storage", icon: null }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Take a look at our professional removalist team in action. 
                See why Brisbane residents trust us with their most valuable possessions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id 
                        ? 'bg-primary' 
                        : 'hover:bg-primary hover:text-white'
                    } transition-colors flex items-center`}
                  >
                    {Icon && <Icon className="mr-2" size={16} />}
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Moving Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every photo tells a story of successful moves across Brisbane. 
                From small apartments to large office relocations, we handle it all with care and professionalism.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <AnimatedSection key={item.id} animation="fade-in-up" className={`delay-${(index % 8) * 100}`}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <ZoomIn className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                These numbers represent years of dedicated service to the Brisbane community.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">5000+</div>
                <div className="text-blue-100">Successful Moves</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-100">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-200">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Customer Satisfaction</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-300">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Brisbane Suburbs Served</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What Makes Us Different?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Professional Equipment</h3>
                      <p className="text-gray-600">Modern trucks, lifting equipment, and packing materials to ensure safe transport.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                      <p className="text-gray-600">Trained professionals who know how to handle everything from pianos to office equipment.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Local Knowledge</h3>
                      <p className="text-gray-600">Deep understanding of Brisbane areas, parking restrictions, and building access.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
                      <p className="text-gray-600">Personalized service that treats your belongings as if they were our own.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop"
                  alt="Professional moving team"
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop"
                  alt="Packing service"
                  className="rounded-lg shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=400&auto=format&fit=crop"
                  alt="Moving truck"
                  className="rounded-lg shadow-lg -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop"
                  alt="Office moving"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Gallery?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you create your own success story. 
              Contact Brisbane's most trusted removalist company for your free quote today.
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

export default Gallery;
