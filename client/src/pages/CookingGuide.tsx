import { Badge } from "@/components/ui/badge";

export default function Cooking_Guide() {
  // Updated recipes focused on Akpu and traditional dishes
  const Cooking_Guide = [
    {
      title: "Perfect Akpu (Fufu)",
      difficulty: "Medium",
      time: "45 mins",
      description: "Master the traditional method for smooth, stretchy Akpu that pairs perfectly with any soup",
    },
    {
      title: "Akpu with Egusi Soup",
      difficulty: "Medium",
      time: "1.5 hours",
      description: "Classic Nigerian combination - learn to make the perfect Egusi to accompany your Akpu",
    },
    {
      title: "Quick Akpu for Busy Days",
      difficulty: "Easy",
      time: "25 mins",
      description: "Streamlined method for making delicious Akpu when you're short on time",
    },
    {
      title: "Ogbono Soup with Akpu",
      difficulty: "Medium",
      time: "1 hour",
      description: "Learn to make the rich, drawy Ogbono soup that's a perfect match for Akpu",
    },
    {
      title: "Vegetarian Akpu Meals",
      difficulty: "Easy",
      time: "40 mins",
      description: "Plant-based soup options that work beautifully with traditional Akpu",
    },
    {
      title: "Akpu for Special Occasions",
      difficulty: "Hard",
      time: "2 hours",
      description: "Traditional preparation methods for festivals and family gatherings",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-recipes-title">
            Akpu Masterclass
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-recipes-subtitle">
            Learn traditional techniques for perfect Akpu with our premium cassava flour
          </p>
        </div>

        {/* Updated Hero Section with Akpu-focused image */}
        <div className="glass-card rounded-lg overflow-hidden mb-12 relative">
          <div className="w-full h-80 bg-gradient-to-r from-green-900 to-green-700 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Traditional Akpu Preparation</h3>
              <p className="text-green-100">Image: Freshly prepared Akpu with traditional soups</p>
              {/* <p className="text-green-200 text-sm mt-2">Replace with your actual Akpu image</p> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Cooking_Guide.map((guide, index) => (
            <div key={index} className="glass-card rounded-lg p-6 hover-elevate cursor-pointer" data-testid={`card-recipe-${index}`}>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={
                  guide.difficulty === "Easy" ? "secondary" : 
                  guide.difficulty === "Medium" ? "default" : "destructive"
                } data-testid={`badge-difficulty-${index}`}>
                  {guide.difficulty}
                </Badge>
                <span className="text-sm text-muted-foreground" data-testid={`text-time-${index}`}>{guide.time}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2" data-testid={`text-recipe-title-${index}`}>
                {guide.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-recipe-desc-${index}`}>
                {guide.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-tips-title">
            Tips for Perfect Akpu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-tip-1-title">Water Temperature</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-tip-1-desc">Use boiling water and work quickly for the right stretchy texture</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-tip-2-title">Kneading Technique</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-tip-2-desc">Knead vigorously until smooth and elastic - this prevents lumps</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-tip-3-title">Proper Storage</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-tip-3-desc">Keep flour in airtight containers to maintain freshness and prevent moisture</p>
            </div>
          </div>
        </div>

        {/* New Section: Traditional Soup Pairings */}
        <div className="mt-12 glass-card rounded-lg p-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center" data-testid="text-soups-title">
            Traditional Soup Pairings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-soup-1-title">Egusi Soup</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-soup-1-desc">Melon seed soup with vegetables and protein</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-soup-2-title">Ogbono Soup</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-soup-2-desc">Drawy soup made from wild mango seeds</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-soup-3-title">Bitterleaf Soup</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-soup-3-desc">Ofe Onugbu with assorted meats and fish</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">4</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-soup-4-title">Oha Soup</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-soup-4-desc">Traditional soup with Oha leaves and cocoyam</p>
            </div>
          </div>
        </div>

        {/* New Section: Cultural Heritage */}
        <div className="mt-12 glass-card rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-heritage-title">
            More Than Food - It's Heritage
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto" data-testid="text-heritage-desc">
            Akpu represents generations of culinary tradition. Our cassava flour preserves the authentic taste and texture 
            that connects families to their cultural roots. Each batch carries the legacy of traditional processing methods 
            perfected over centuries.
          </p>
        </div>
      </div>
    </div>
  );
}