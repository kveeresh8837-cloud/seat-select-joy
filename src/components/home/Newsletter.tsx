
import { Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <section className="container-section bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl floating-element" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto fade-in-section">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Never Miss an Event
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Subscribe to our newsletter and be the first to know about exclusive pre-sales, 
            new events, and special discounts in your area.
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="space-y-4 fade-in-section" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 h-12 px-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                />
                <Button 
                  type="submit"
                  className="bg-white text-brand-primary hover:bg-white/90 font-semibold px-8 h-12 rounded-full transform hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-white/70">
              Join 100,000+ event enthusiasts. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="glass-card p-6 max-w-md mx-auto animate-fade-in">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">Successfully subscribed!</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
