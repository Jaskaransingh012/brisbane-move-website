
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Brisbane Removalists</h3>
            <p className="text-gray-300 mb-4">
              Professional moving services in Brisbane City, South Brisbane & CBD. 
              Your trusted partner for reliable house and office removals.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock size={16} />
              <span>Mon-Sun: 6:00 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Moving Tips</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>House Moving</li>
              <li>Office Relocations</li>
              <li>Packing Services</li>
              <li>Storage Solutions</li>
              <li>Same Day Moving</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>(07) 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>info@brisbaneremovalists.com.au</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin size={16} className="mt-1" />
                <span>123 Brisbane Street<br />Brisbane City, QLD 4000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">&copy; 2024 Brisbane Removalists. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <span className="text-gray-300 text-sm">
                Serving Brisbane City, South Brisbane, CBD & Inner Suburbs
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
