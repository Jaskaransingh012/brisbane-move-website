
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Phone, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "How far in advance should I book my move in Brisbane?",
          answer: "We recommend booking your move at least 2-3 weeks in advance, especially during peak moving seasons (summer months and end/beginning of months). However, we also offer same day removalist services for urgent moves in Brisbane and surrounding areas."
        },
        {
          question: "What areas do Brisbane Removalists service?",
          answer: "We service all areas of Brisbane including Brisbane City, South Brisbane, CBD, and all Inner Suburbs. Our service area extends to Fortitude Valley, New Farm, Teneriffe, West End, Kangaroo Point, Spring Hill, and many other Brisbane suburbs. We also provide interstate moving services."
        },
        {
          question: "Do you provide packing materials and boxes?",
          answer: "Yes! We provide high-quality packing materials including boxes, bubble wrap, packing paper, tape, and protective covers. All packing materials are included in our packing service, or can be purchased separately if you prefer to pack yourself."
        },
        {
          question: "Are you licensed and insured removalists?",
          answer: "Absolutely. Brisbane Removalists is fully licensed and insured. We carry comprehensive insurance coverage to protect your belongings during the move. Our license details are available upon request, and we're happy to provide proof of insurance."
        }
      ]
    },
    {
      title: "Pricing & Quotes",
      faqs: [
        {
          question: "How do you calculate moving costs?",
          answer: "Our moving costs are based on several factors including the size of your move, distance between locations, time required, and any additional services like packing or storage. We provide transparent, detailed quotes with no hidden fees."
        },
        {
          question: "Do you offer free quotes?",
          answer: "Yes, we provide free, no-obligation quotes for all our moving services. You can request a quote online, over the phone, or we can arrange an in-home assessment for larger moves to provide the most accurate estimate."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, bank transfer, and major credit cards. Payment is typically due upon completion of the move, though we may require a deposit for large or long-distance moves."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in transparent pricing. All costs are outlined in your quote, including any potential additional charges for stairs, long carries, or waiting time. We'll discuss any possible extra charges upfront."
        }
      ]
    },
    {
      title: "Moving Services",
      faqs: [
        {
          question: "Do you offer same day moving services?",
          answer: "Yes, we offer same day removalist services in Brisbane for urgent moves. While we recommend advance booking, our flexible team can often accommodate last-minute requests. Same day service is subject to availability and may incur additional charges."
        },
        {
          question: "Can you move heavy items like pianos and pool tables?",
          answer: "Absolutely! Our experienced team is equipped to handle heavy and specialty items including pianos, pool tables, safes, and large appliances. We use specialized equipment and techniques to ensure safe transport of these valuable items."
        },
        {
          question: "Do you provide office moving services?",
          answer: "Yes, we specialize in office relocations for businesses of all sizes. We can schedule moves during evenings or weekends to minimize business disruption, and we're experienced in handling IT equipment, filing systems, and office furniture."
        },
        {
          question: "What if something gets damaged during the move?",
          answer: "While damage is rare due to our careful handling procedures, we carry comprehensive insurance to cover any potential damage. We'll assess and resolve any damage claims quickly and fairly according to our insurance policy terms."
        }
      ]
    },
    {
      title: "Preparation & Moving Day",
      faqs: [
        {
          question: "How should I prepare for moving day?",
          answer: "We'll provide you with a comprehensive moving checklist when you book. Generally, this includes confirming parking arrangements, packing personal items, disconnecting appliances, and being present for the move. We handle most of the heavy lifting!"
        },
        {
          question: "What should I do with valuable or personal items?",
          answer: "We recommend keeping valuable items like jewelry, important documents, and sentimental items with you during the move. For other valuables, we offer specialized packing and handling services with extra insurance coverage."
        },
        {
          question: "Do you move plants and pets?",
          answer: "We can transport plants for local Brisbane moves, though we recommend you transport them personally as they can be sensitive to temperature changes. We don't transport pets, but we can recommend reputable pet transport services."
        },
        {
          question: "What happens if there are delays on moving day?",
          answer: "While we strive to stay on schedule, sometimes delays occur due to traffic, weather, or unforeseen circumstances. We'll keep you informed of any delays and work to minimize impact on your schedule. We may adjust charges if delays are on our end."
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap((category, categoryIndex) => 
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      id: categoryIndex * 100 + faqIndex,
      category: category.title
    }))
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Get answers to common questions about our Brisbane removalist services. 
                Can't find what you're looking for? Contact us directly!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                  <a href="tel:+61712345678">
                    <Phone className="mr-2" size={20} />
                    Call (07) 1234 5678
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">
                    <MessageCircle className="mr-2" size={20} />
                    Ask a Question
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <AnimatedSection key={categoryIndex} animation="fade-in-up" className={`delay-${categoryIndex * 100}`}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.title}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const faqId = categoryIndex * 100 + faqIndex;
                      const isOpen = openFAQ === faqId;
                      
                      return (
                        <div
                          key={faqId}
                          className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                          <button
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            onClick={() => setOpenFAQ(isOpen ? null : faqId)}
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Moving Tips</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick tips from Brisbane's most experienced removalists to make your move smoother.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up">
              <div className="bg-primary/5 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Start Early</h3>
                <p className="text-gray-600">Begin planning your move at least 4-6 weeks in advance. Book your removalists early, especially during peak season.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-100">
              <div className="bg-primary/5 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Declutter First</h3>
                <p className="text-gray-600">Sort through your belongings and donate or sell items you no longer need. Less stuff means lower moving costs.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-200">
              <div className="bg-primary/5 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Label Everything</h3>
                <p className="text-gray-600">Clearly label boxes with contents and destination room. This makes unpacking much easier and faster.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-300">
              <div className="bg-primary/5 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pack Essentials</h3>
                <p className="text-gray-600">Pack a "first day" box with essentials like toiletries, medications, change of clothes, and basic tools.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-400">
              <div className="bg-primary/5 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Take Photos</h3>
                <p className="text-gray-600">Photograph valuable items and complex wiring setups (TV, computer) to help with insurance and reassembly.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" className="delay-500">
              <div className="bg-primary/5 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">6</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Confirm Details</h3>
                <p className="text-gray-600">Confirm all details with your removalists 24-48 hours before the move, including timing and parking arrangements.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our friendly team is here to help! Get in touch with Brisbane's most reliable removalist company 
                for personalized answers to your moving questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                  <a href="tel:+61712345678">
                    <Phone className="mr-2" size={20} />
                    Call (07) 1234 5678
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                  <Link to="/contact">
                    <MessageCircle className="mr-2" size={20} />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Move?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Now that you have all the information you need, it's time to get your free quote 
              and experience Brisbane's best removalist service.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
              <Link to="/contact">Get Your Free Quote Today</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
