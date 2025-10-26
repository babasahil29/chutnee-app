import RecipeCard from './RecipeCard';
import '../styles/recipes.css';

const recipes = [
  {
    image: '🌶️',
    title: 'Spicy Red Chutney',
    description: 'A fiery blend of red chilies, garlic, and spices for the bold palate.',
    rating: 4.8,
  },
  {
    image: '🥒',
    title: 'Mint & Cilantro Chutney',
    description: 'Fresh and cooling, perfect with Indian breads and appetizers.',
    rating: 4.9,
  },
  {
    image: '🍅',
    title: 'Tomato & Onion Chutney',
    description: 'A tangy and savory classic that pairs well with any meal.',
    rating: 4.7,
  },
  {
    image: '🥕',
    title: 'Carrot & Ginger Chutney',
    description: 'Sweet and warming, with a delightful ginger kick.',
    rating: 4.6,
  },
  {
    image: '🧄',
    title: 'Garlic & Fenugreek Chutney',
    description: 'Aromatic and earthy, perfect for dipping and spreading.',
    rating: 4.8,
  },
  {
    image: '🥥',
    title: 'Coconut & Curry Leaf Chutney',
    description: 'Creamy and fragrant, a South Indian favorite.',
    rating: 4.9,
  },
  {
    image: '🍋',
    title: 'Lemon & Turmeric Chutney',
    description: 'Bright and healing, with golden turmeric goodness.',
    rating: 4.7,
  },
  {
    image: '🌱',
    title: 'Green Herb Chutney',
    description: 'Vibrant and fresh, loaded with green herbs and spices.',
    rating: 4.8,
  },
];

export default function Recipes() {
  return (
    <section id="recipes" className="recipes">
      <div className="recipes-container">
        <div className="section-header">
          <h2 className="section-title animate-slide-up">Featured Recipes</h2>
          <p className="section-subtitle animate-slide-up">
            Handpicked chutney recipes to elevate your culinary experience
          </p>
        </div>

        <div className="recipes-grid">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              image={recipe.image}
              title={recipe.title}
              description={recipe.description}
              rating={recipe.rating}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

