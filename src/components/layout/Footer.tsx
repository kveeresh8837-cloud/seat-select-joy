
import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Events",
      links: [
        { name: "Concerts", href: "/concerts" },
        { name: "Sports", href: "/sports" },
        { name: "Theater", href: "/theater" },
        { name: "Comedy", href: "/comedy" },
        { name: "Festivals", href: "/festivals" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Ticket Transfer", href: "/transfer" },
        { name: "Refunds", href: "/refunds" },
        { name: "Accessibility", href: "/accessibility" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partners", href: "/partners" },
        { name: "Sell Tickets", href: "/sell" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">EasyTickets</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Your trusted partner for discovering and booking tickets to amazing events. 
              From intimate concerts to major sporting events, we make it easy to find 
              and secure your perfect experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@easytickets.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-TICKETS</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Available in 50+ cities nationwide</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-white border border-border rounded-lg hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-brand-primary transition-colors duration-200" />
                  </a>
                );
              })}
            </div>

            {/* Copyright and Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <span>© 2024 EasyTickets. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="/privacy" className="hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-foreground transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
