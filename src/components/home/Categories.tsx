
import { Music, Trophy, Drama, Mic2, Calendar, Heart } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Concerts & Music",
      description: "Live music performances, festivals, and concerts",
      icon: Music,
      count: "2,500+ events",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 2,
      name: "Sports",
      description: "Basketball, football, baseball, and more",
      icon: Trophy,
      count: "1,800+ events",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      name: "Theater & Arts",
      description: "Broadway shows, plays, and artistic performances",
      icon: Drama,
      count: "950+ events",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50"
    },
    {
      id: 4,
      name: "Comedy",
      description: "Stand-up comedy shows and entertainment",
      icon: Mic2,
      count: "750+ events",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      id: 5,
      name: "Festivals",
      description: "Music festivals, food festivals, and cultural events",
      icon: Calendar,
      count: "425+ events",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50"
    },
    {
      id: 6,
      name: "Family & Kids",
      description: "Family-friendly events and children's shows",
      icon: Heart,
      count: "650+ events",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="container-section bg-muted/30">
      <div className="text-center mb-12 fade-in-section">
        <h2 className="section-title">Browse by Category</h2>
        <p className="section-subtitle mx-auto">
          Find the perfect event for your interests and mood
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section" style={{ animationDelay: '0.2s' }}>
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-white border border-border shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1 fade-in-section"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-7 w-7 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-brand-accent font-medium">
                      {category.count}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <div className="flex items-center text-sm font-medium gradient-text">
                    Explore →
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
