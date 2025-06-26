import { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { 
  Home, Route, Building, Box, Music, Gamepad2, Sofa, Wrench,
  User, Phone, Mail, MapPin, Calendar, Clock, MessageCircle, 
  ArrowLeft, ArrowRight, Check, Loader, X, Plus, Trash2
} from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: "Local Move",
    pickupAddress: "",
    pickupProperty: "Single level house",
    moveSize: "1 bedroom",
    serviceType: "One man with truck",
    dropoffAddress: "",
    dropoffProperty: "Single level house",
    additionalLocations: "No",
    additionalLocationsDetails: [] as Array<{ type: string; address: string }>,
    moveDate: new Date(),
    dateFlexibility: "1",
    preferredTime: "Morning (8-9 AM)",
    fullName: "",
    phone: "",
    email: "",
    instructions: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const pickupInputRef = useRef<HTMLInputElement>(null);
  const dropoffInputRef = useRef<HTMLInputElement>(null);

  const nextStep = () => {
    // Validate current step
    let isValid = true;
    const newErrors: Record<string, string> = {};

    if (step === 2 && !formData.pickupAddress.trim()) {
      newErrors.pickupAddress = "Pickup address is required";
      isValid = false;
    }

    if (step === 3 && !formData.dropoffAddress.trim()) {
      newErrors.dropoffAddress = "Dropoff address is required";
      isValid = false;
    }

    if (step === 5 && !formData.moveDate) {
      newErrors.moveDate = "Move date is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({ ...prev, moveDate: date }));
      if (errors.moveDate) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.moveDate;
          return newErrors;
        });
      }
    }
  };

  const addLocation = () => {
    setFormData(prev => ({
      ...prev,
      additionalLocationsDetails: [
        ...prev.additionalLocationsDetails,
        { type: "pickup", address: "" }
      ]
    }));
  };

  const removeLocation = (index: number) => {
    setFormData(prev => {
      const newLocations = [...prev.additionalLocationsDetails];
      newLocations.splice(index, 1);
      return { ...prev, additionalLocationsDetails: newLocations };
    });
  };

  const handleLocationChange = (index: number, field: string, value: string) => {
    setFormData(prev => {
      const newLocations = [...prev.additionalLocationsDetails];
      newLocations[index] = { ...newLocations[index], [field]: value };
      return { ...prev, additionalLocationsDetails: newLocations };
    });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>, field: "pickup" | "dropoff") => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [`${field}Address`]: value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validate step 6
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email address";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your free quote.",
      });
      
      setStep(7);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      service: "Local Move",
      pickupAddress: "",
      pickupProperty: "Single level house",
      moveSize: "1 bedroom",
      serviceType: "One man with truck",
      dropoffAddress: "",
      dropoffProperty: "Single level house",
      additionalLocations: "No",
      additionalLocationsDetails: [],
      moveDate: new Date(),
      dateFlexibility: "1",
      preferredTime: "Morning (8-9 AM)",
      fullName: "",
      phone: "",
      email: "",
      instructions: "",
    });
    setStep(1);
    setErrors({});
  };

  const services = [
    { value: "Local Move", label: "Local Move", icon: Home },
    { value: "Interstate Move", label: "Interstate Move", icon: Route },
    { value: "Office/Commercial Move", label: "Office Move", icon: Building },
    { value: "Packing and Unpacking", label: "Packing/Unpacking", icon: Box },
    { value: "Piano Move", label: "Piano Move", icon: Music },
    { value: "Pool Table Move", label: "Pool Table Move", icon: Gamepad2 },
    { value: "Single Item Pickup/Delivery", label: "Single Item", icon: Sofa },
    { value: "Furniture Disassembly and Reassembly", label: "Furniture Assembly", icon: Wrench },
  ];

  const propertyTypes = [
    { value: "Single level house", label: "Single Level House", icon: Home },
    { value: "Townhouse", label: "Townhouse", icon: Building },
    { value: "Apartment", label: "Apartment", icon: Building },
  ];

  const moveSizes = [
    { value: "1 bedroom", label: "1 Bedroom" },
    { value: "2 bedroom", label: "2 Bedroom" },
    { value: "3 bedroom", label: "3 Bedroom" },
    { value: "4 bedroom", label: "4 Bedroom" },
    { value: "5+ bedroom", label: "5+ Bedroom" },
  ];

  const serviceTypes = [
    { value: "One man with truck", label: "1 Man + Truck" },
    { value: "Two men with truck", label: "2 Men + Truck" },
    { value: "Three men with truck", label: "3 Men + Truck" },
    { value: "Four men with truck", label: "4 Men + Truck" },
  ];

  const timeOptions = [
    { value: "Morning (8-9 AM)", label: "Morning (8-9 AM)" },
    { value: "Midday (11 AM-12 PM)", label: "Midday (11-12 PM)" },
    { value: "Afternoon (2-3 PM)", label: "Afternoon (2-3 PM)" },
  ];

  const renderProgressBar = () => (
    <div className="flex items-center justify-between mb-8 relative max-w-3xl mx-auto">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
      {[1, 2, 3, 4, 5, 6].map(num => (
        <div key={num} className="flex flex-col items-center">
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
              step >= num 
                ? "bg-primary border-primary text-white" 
                : "bg-white border-gray-300 text-gray-400"
            }`}
          >
            {step > num ? (
              <Check className="w-5 h-5" />
            ) : (
              <span className="font-medium">{num}</span>
            )}
          </div>
          <span className="text-xs mt-2 font-medium text-gray-600">Step {num}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Your Moving Quote</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Complete our quick 6-step form for a free, no-obligation estimate
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <MapPin className="text-primary" size={28} />
                Moving Quote Request
              </h2>
              <p className="text-gray-600 mt-2">
                Fill out the form below to get your personalized moving estimate
              </p>
            </div>

            {renderProgressBar()}

            <form onSubmit={submitForm}>
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <AnimatedSection animation="fade-in-up">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                      What service do you need?
                    </h3>
                    <p className="text-gray-600 mb-6">Select the type of moving service</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {services.map(service => (
                        <label 
                          key={service.value}
                          className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.service === service.value
                              ? "border-primary bg-primary/10"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={service.value}
                            checked={formData.service === service.value}
                            onChange={() => handleRadioChange("service", service.value)}
                            className="hidden"
                          />
                          <div className="text-primary mb-2">
                            <service.icon className="w-6 h-6" />
                          </div>
                          <span className="text-sm font-medium text-center">{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Step 2: Pickup Details */}
              {step === 2 && (
                <AnimatedSection animation="fade-in-up">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                      Pickup Details
                    </h3>
                    
                    <div className="mb-6">
                      <Label htmlFor="pickupAddress" className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4" /> Pickup Address
                      </Label>
                      <div className="relative">
                        <Input
                          ref={pickupInputRef}
                          id="pickupAddress"
                          value={formData.pickupAddress}
                          onChange={(e) => handleAddressChange(e, "pickup")}
                          placeholder="Enter full address in Australia"
                          className="pr-10"
                        />
                        {errors.pickupAddress && (
                          <p className="text-red-500 text-sm mt-1">{errors.pickupAddress}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="flex items-center gap-2 mb-2">
                          <Home className="w-4 h-4" /> Property Type
                        </Label>
                        <div className="grid grid-cols-1 gap-3">
                          {propertyTypes.map(property => (
                            <label 
                              key={property.value}
                              className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                                formData.pickupProperty === property.value
                                  ? "border-primary bg-primary/10"
                                  : "border-gray-200 hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="pickupProperty"
                                value={property.value}
                                checked={formData.pickupProperty === property.value}
                                onChange={() => handleRadioChange("pickupProperty", property.value)}
                                className="mr-3"
                              />
                              <span className="font-medium">{property.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label className="flex items-center gap-2 mb-2">
                          <Home className="w-4 h-4" /> Move Size
                        </Label>
                        <div className="grid grid-cols-1 gap-3">
                          {moveSizes.map(size => (
                            <label 
                              key={size.value}
                              className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                                formData.moveSize === size.value
                                  ? "border-primary bg-primary/10"
                                  : "border-gray-200 hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="moveSize"
                                value={size.value}
                                checked={formData.moveSize === size.value}
                                onChange={() => handleRadioChange("moveSize", size.value)}
                                className="mr-3"
                              />
                              <span className="font-medium">{size.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Label className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" /> Service Type
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {serviceTypes.map(service => (
                          <label 
                            key={service.value}
                            className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer ${
                              formData.serviceType === service.value
                                ? "border-primary bg-primary/10"
                                : "border-gray-200 hover:border-primary/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="serviceType"
                              value={service.value}
                              checked={formData.serviceType === service.value}
                              onChange={() => handleRadioChange("serviceType", service.value)}
                              className="hidden"
                            />
                            <span className="font-medium text-sm">{service.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Step 3: Dropoff Details */}
              {step === 3 && (
                <AnimatedSection animation="fade-in-up">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                      Dropoff Details
                    </h3>
                    
                    <div className="mb-6">
                      <Label htmlFor="dropoffAddress" className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4" /> Dropoff Address
                      </Label>
                      <div className="relative">
                        <Input
                          ref={dropoffInputRef}
                          id="dropoffAddress"
                          value={formData.dropoffAddress}
                          onChange={(e) => handleAddressChange(e, "dropoff")}
                          placeholder="Enter full address in Australia"
                          className="pr-10"
                        />
                        {errors.dropoffAddress && (
                          <p className="text-red-500 text-sm mt-1">{errors.dropoffAddress}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="flex items-center gap-2 mb-2">
                        <Home className="w-4 h-4" /> Property Type
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {propertyTypes.map(property => (
                          <label 
                            key={property.value}
                            className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                              formData.dropoffProperty === property.value
                                ? "border-primary bg-primary/10"
                                : "border-gray-200 hover:border-primary/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="dropoffProperty"
                              value={property.value}
                              checked={formData.dropoffProperty === property.value}
                              onChange={() => handleRadioChange("dropoffProperty", property.value)}
                              className="mr-3"
                            />
                            <span className="font-medium">{property.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Step 4: Additional Locations */}
              {step === 4 && (
                <AnimatedSection animation="fade-in-up">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">4</span>
                      Additional Locations
                    </h3>
                    
                    <div className="mb-6">
                      <Label className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4" /> Do you need to stop at additional locations?
                      </Label>
                      <div className="grid grid-cols-2 gap-4">
                        <label 
                          className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${
                            formData.additionalLocations === "No"
                              ? "border-primary bg-primary/10"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="additionalLocations"
                            value="No"
                            checked={formData.additionalLocations === "No"}
                            onChange={() => handleRadioChange("additionalLocations", "No")}
                            className="mr-2"
                          />
                          <span className="font-medium">No, just pickup and dropoff</span>
                        </label>
                        
                        <label 
                          className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${
                            formData.additionalLocations === "Yes"
                              ? "border-primary bg-primary/10"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="additionalLocations"
                            value="Yes"
                            checked={formData.additionalLocations === "Yes"}
                            onChange={() => handleRadioChange("additionalLocations", "Yes")}
                            className="mr-2"
                          />
                          <span className="font-medium">Yes, add locations</span>
                        </label>
                      </div>
                    </div>
                    
                    {formData.additionalLocations === "Yes" && (
                      <div className="mt-6">
                        <div className="space-y-4">
                          {formData.additionalLocationsDetails.map((location, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex justify-between items-center mb-3">
                                <h4 className="font-medium">Location {index + 1}</h4>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeLocation(index)}
                                  className="text-red-500 hover:bg-red-50"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label>Location Type</Label>
                                  <select
                                    value={location.type}
                                    onChange={(e) => handleLocationChange(index, "type", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                  >
                                    <option value="pickup">Pickup Location</option>
                                    <option value="dropoff">Dropoff Location</option>
                                  </select>
                                </div>
                                
                                <div>
                                  <Label>Address</Label>
                                  <Input
                                    value={location.address}
                                    onChange={(e) => handleLocationChange(index, "address", e.target.value)}
                                    placeholder="Enter full address"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4"
                          onClick={addLocation}
                        >
                          <Plus className="w-4 h-4 mr-2" /> Add Another Location
                        </Button>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              )}

              {/* Step 5: Move Date & Time */}
              {step === 5 && (
                <AnimatedSection animation="fade-in-up">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">5</span>
                      Move Date & Time
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4" /> Move Date
                        </Label>
                        <Input
                          type="date"
                          id="moveDate"
                          name="moveDate"
                          value={formData.moveDate ? format(formData.moveDate, 'yyyy-MM-dd') : ''}
                          onChange={e => handleDateChange(e.target.value ? new Date(e.target.value) : undefined)}
                          className="w-full"
                        />
                        {errors.moveDate && (
                          <p className="text-red-500 text-sm mt-1">{errors.moveDate}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4" /> Date Flexibility
                        </Label>
                        <select
                          name="dateFlexibility"
                          value={formData.dateFlexibility}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="0">No flexibility - must be on this date</option>
                          <option value="1">±1 day flexibility</option>
                          <option value="2">±2 days flexibility</option>
                          <option value="3">±3 days flexibility</option>
                          <option value="7">±1 week flexibility</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Label className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4" /> Preferred Time
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {timeOptions.map(time => (
                          <label 
                            key={time.value}
                            className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer ${
                              formData.preferredTime === time.value
                                ? "border-primary bg-primary/10"
                                : "border-gray-200 hover:border-primary/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="preferredTime"
                              value={time.value}
                              checked={formData.preferredTime === time.value}
                              onChange={() => handleRadioChange("preferredTime", time.value)}
                              className="mr-2"
                            />
                            <span className="font-medium">{time.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Step 6: Contact Details */}
              {step === 6 && (
                <AnimatedSection animation="fade-in-up">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">6</span>
                      Contact Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                          <User className="w-4 h-4" /> Full Name
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                          <Phone className="w-4 h-4" /> Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                          <Mail className="w-4 h-4" /> Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="instructions" className="flex items-center gap-2 mb-2">
                          <MessageCircle className="w-4 h-4" /> Additional Instructions
                        </Label>
                        <Textarea
                          id="instructions"
                          name="instructions"
                          value={formData.instructions}
                          onChange={handleChange}
                          placeholder="Elevator access, parking restrictions, fragile items, etc."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Success Step */}
              {step === 7 && (
                <AnimatedSection animation="fade-in-up">
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                      Your moving quote request has been submitted successfully. Our team will contact you shortly with your estimate.
                    </p>
                    <Button onClick={resetForm}>
                      <Plus className="w-4 h-4 mr-2" /> New Quote Request
                    </Button>
                  </div>
                </AnimatedSection>
              )}

              {/* Navigation Buttons */}
              {step < 6 && (
                <div className="flex justify-between mt-8 border-t pt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                    </Button>
                  )}
                  
                  {step < 5 ? (
                    <Button type="button" onClick={nextStep}>
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <div className="ml-auto">
                      <Button type="button" onClick={nextStep}>
                        Next <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Submit Button */}
              {step === 6 && (
                <div className="flex justify-between mt-8 border-t pt-6">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                  </Button>
                  
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader className="w-4 h-4 mr-2 animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        Submit Request <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Phone</h3>
              </div>
              <p className="text-gray-700">(07) 1234 5678</p>
              <p className="text-sm text-gray-500 mt-1">Available 24/7 for quotes</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              <p className="text-gray-700">info@brisbaneremovalists.com.au</p>
              <p className="text-sm text-gray-500 mt-1">We respond within 1 hour</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Hours</h3>
              </div>
              <p className="text-gray-700">Mon-Sun: 6:00 AM - 8:00 PM</p>
              <p className="text-sm text-gray-500 mt-1">Emergency moves available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;