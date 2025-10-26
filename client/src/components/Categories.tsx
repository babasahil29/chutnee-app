import CategoryCard from './CategoryCard';
import '../styles/categories.css';

const categories = [
  { icon: '🌶️', label: 'Spicy' },
  { icon: '🥒', label: 'Pickled' },
  { icon: '🍋', label: 'Tangy' },
  { icon: '🥕', label: 'Vegetable' },
  { icon: '🌱', label: 'Herbal' },
  { icon: '🍅', label: 'Tomato' },
  { icon: '🧄', label: 'Garlic' },
  { icon: '🥥', label: 'Coconut' },
];

export default function Categories() {
  return (
    <section id="categories" className="categories">
      <div className="categories-container">
        <div className="section-header">
          <h2 className="section-title animate-slide-up">Explore Categories</h2>
          <p className="section-subtitle animate-slide-up">
            Discover chutneys by flavor profile and ingredient
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              label={category.label}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

