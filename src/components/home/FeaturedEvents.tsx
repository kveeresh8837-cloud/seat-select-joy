
import { Calendar, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedEvents = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "The Weeknd - After Hours World Tour",
      category: "Concert",
      date: "2024-09-15",
      time: "8:00 PM",
      venue: "Madison Square Garden",
      location: "New York, NY",
      price: "From $89",
      rating: 4.8,
      image: "/api/placeholder/400/300",
      popular: true
    },
    {
      id: 2,
      title: "Hamilton",
      category: "Theater",
      date: "2024-09-20",
      time: "7:30 PM",
      venue: "Richard Rodgers Theatre",
      location: "New York, NY",
      price: "From $159",
      rating: 4.9,
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Lakers vs Warriors",
      category: "Sports",
      date: "2024-09-25",
      time: "7:00 PM",
      venue: "Crypto.com Arena",
      location: "Los Angeles, CA",
      price: "From $125",
      rating: 4.7,
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Electric Daisy Carnival",
      category: "Festival",
      date: "2024-10-01",
      time: "6:00 PM",
      venue: "Las Vegas Motor Speedway",
      location: "Las Vegas, NV",
      price: "From $299",
      rating: 4.6,
      image: "/api/placeholder/400/300",
      popular: true
    }
  ];

  return (
    <section className="container-section bg-background">
      <div className="text-center mb-12 fade-in-section">
        <h2 className="section-title">Featured Events</h2>
        <p className="section-subtitle mx-auto">
          Don't miss out on these amazing upcoming events happening near you
        </p>
      </div>

      <div className="grid-events fade-in-section" style={{ animationDelay: '0.2s' }}>
        {featuredEvents.map((event, index) => (
          <div
            key={event.id}
            className="event-card fade-in-section"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {/* Event Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="category-chip bg-white/90 text-gray-900 backdrop-blur-sm">
                  {event.category}
                </span>
              </div>

              {/* Popular Badge */}
              {event.popular && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-accent text-white">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="absolute bottom-4 right-4">
                <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {event.price}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-300">
                  {event.title}
                </h3>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                  <span className="font-medium">{event.rating}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.venue}, {event.location}
                </div>
              </div>

              <Button className="w-full btn-hero">
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 fade-in-section" style={{ animationDelay: '0.4s' }}>
        <Button variant="outline" size="lg" className="btn-secondary">
          View All Events
        </Button>
      </div>
    </section>
  );
};

export default FeaturedEvents;
