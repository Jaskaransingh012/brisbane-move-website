
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Moving Tips for a Stress-Free Relocation in Brisbane",
      excerpt: "Moving doesn't have to be overwhelming. Follow these expert tips from Brisbane's leading removalists to ensure your move goes smoothly from start to finish.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop",
      author: "David Mitchell",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Moving Tips",
      featured: true
    },
    {
      id: 2,
      title: "How to Choose the Right Removalist Company in Brisbane",
      excerpt: "Not all removalist companies are created equal. Learn what to look for when selecting a professional moving service in Brisbane and surrounding areas.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      author: "Sarah Thompson",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Removalist Guide"
    },
    {
      id: 3,
      title: "Packing Hacks to Save Time and Space During Your Move",
      excerpt: "Professional packing techniques that will protect your belongings and maximize space. Learn from the experts who pack hundreds of homes every month.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      author: "Mark Johnson",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Packing Tips"
    },
    {
      id: 4,
      title: "Office Relocation Checklist: Moving Your Brisbane Business",
      excerpt: "Comprehensive guide to planning and executing a successful office move in Brisbane. Minimize downtime and keep your business running smoothly.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      author: "David Mitchell",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Business Moving"
    },
    {
      id: 5,
      title: "Storage Solutions: When and Why You Might Need Them",
      excerpt: "Sometimes you need temporary storage during your move. Learn about storage options, costs, and when it makes sense for your Brisbane relocation.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      author: "Sarah Thompson",
      date: "2023-12-20",
      readTime: "4 min read",
      category: "Storage"
    },
    {
      id: 6,
      title: "Moving with Pets: A Complete Guide for Brisbane Pet Owners",
      excerpt: "Moving can be stressful for pets too. Follow these expert tips to ensure your furry family members have a smooth transition to their new Brisbane home.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop",
      author: "Mark Johnson",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Family Moving"
    }
  ];

  const categories = ["All Posts", "Moving Tips", "Removalist Guide", "Packing Tips", "Business Moving", "Storage", "Family Moving"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Moving Tips & News</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Expert advice from Brisbane's most experienced removalists. 
                Learn how to make your move smoother, cheaper, and stress-free.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`${index === 0 ? 'bg-primary' : 'hover:bg-primary hover:text-white'} transition-colors`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post, index) => (
        <section key={post.id} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      Featured Post
                    </div>
                    <span className="text-primary font-semibold text-sm">{post.category}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button className="btn-primary">
                      Read Full Article
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                  <div>
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="rounded-lg shadow-2xl w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest moving tips, industry news, and expert advice 
                from Brisbane's leading removalist professionals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <AnimatedSection key={post.id} animation="fade-in-up" className={`delay-${index * 100}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-primary font-semibold text-sm mb-2">{post.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter for the latest moving tips, industry news, 
                and exclusive offers from Brisbane Removalists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Moving Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Reading about moving is great, but when you're ready to move, 
              trust Brisbane's most reliable removalist company to get the job done right.
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

export default Blog;
