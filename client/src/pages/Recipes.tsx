import { Badge } from "@/components/ui/badge";
import recipeImage from "@assets/generated_images/Cassava_flour_recipe_baking_8832e469.png";

export default function Recipes() {
  //todo: remove mock functionality
  const recipes = [
    {
      title: "Gluten-Free Artisan Bread",
      difficulty: "Medium",
      time: "2 hours",
      description: "Crusty on the outside, soft on the inside - perfect for sandwiches",
    },
    {
      title: "Cassava Flour Pancakes",
      difficulty: "Easy",
      time: "20 mins",
      description: "Fluffy, delicious breakfast pancakes the whole family will love",
    },
    {
      title: "Brazilian Cheese Bread",
      difficulty: "Easy",
      time: "30 mins",
      description: "Traditional pão de queijo with authentic cassava flour",
    },
    {
      title: "Pizza Dough",
      difficulty: "Medium",
      time: "1.5 hours",
      description: "Crispy, chewy pizza crust that's completely gluten-free",
    },
    {
      title: "Chocolate Chip Cookies",
      difficulty: "Easy",
      time: "25 mins",
      description: "Classic cookies with a perfect cassava flour texture",
    },
    {
      title: "Tortillas",
      difficulty: "Easy",
      time: "30 mins",
      description: "Soft, pliable tortillas for tacos, wraps, and more",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-recipes-title">
            Cooking Academy
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-recipes-subtitle">
            Discover delicious recipes crafted with our premium cassava flour
          </p>
        </div>

        <div className="glass-card rounded-lg overflow-hidden mb-12">
          <img src={recipeImage} alt="Baking with cassava flour" className="w-full h-80 object-cover" data-testid="img-recipes-hero" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="glass-card rounded-lg p-6 hover-elevate cursor-pointer" data-testid={`card-recipe-${index}`}>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={recipe.difficulty === "Easy" ? "secondary" : "default"} data-testid={`badge-difficulty-${index}`}>
                  {recipe.difficulty}
                </Badge>
                <span className="text-sm text-muted-foreground" data-testid={`text-time-${index}`}>{recipe.time}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2" data-testid={`text-recipe-title-${index}`}>
                {recipe.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-recipe-desc-${index}`}>
                {recipe.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-tips-title">
            Baking Tips with Cassava Flour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-tip-1-title">Measure Carefully</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-tip-1-desc">Cassava flour absorbs more liquid than wheat flour - adjust accordingly</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-tip-2-title">Let it Rest</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-tip-2-desc">Allow batters to rest for 5-10 minutes for better texture</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-testid="text-tip-3-title">Storage Matters</h4>
              <p className="text-muted-foreground text-sm" data-testid="text-tip-3-desc">Keep in airtight containers in a cool, dry place</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
