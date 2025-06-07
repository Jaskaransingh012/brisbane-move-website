
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">Brisbane Removalists</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-primary transition-colors duration-300 font-medium ${
                  location.pathname === item.path ? "text-primary border-b-2 border-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+61123456789" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Phone size={16} />
              <span className="font-semibold">(07) 1234 5678</span>
            </a>
            <Button asChild className="btn-primary">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-4 text-gray-700 hover:text-primary transition-colors duration-300 ${
                  location.pathname === item.path ? "text-primary bg-accent" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-2">
              <a href="tel:+61123456789" className="flex items-center space-x-2 text-primary mb-2">
                <Phone size={16} />
                <span className="font-semibold">(07) 1234 5678</span>
              </a>
              <Button asChild className="btn-primary w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Free Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
