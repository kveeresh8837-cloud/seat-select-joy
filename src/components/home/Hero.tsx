
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl floating-element" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-accent/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-section relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-4 fade-in-section">
            <h1 className="hero-title text-balance">
              Discover Amazing Events Near You
            </h1>
            <p className="section-subtitle text-white/90 text-xl">
              From concerts to sports, theater to festivals - find and book tickets for unforgettable experiences
            </p>
          </div>

          {/* Search Section */}
          <div className="w-full max-w-2xl space-y-4 fade-in-section" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search events, artists, venues..."
                    className="search-input w-full pl-12 h-14"
                  />
                </div>
                <Button className="btn-hero h-14 px-8 whitespace-nowrap">
                  Find Events
                </Button>
              </div>
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {['Concerts', 'Sports', 'Theater', 'Comedy', 'Festivals'].map((category) => (
                <button
                  key={category}
                  className="category-chip hover:scale-105 transition-transform duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-lg fade-in-section" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-2">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/80">Events</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-2">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Cities</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-2">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">1M+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
