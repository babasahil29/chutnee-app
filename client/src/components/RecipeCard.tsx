import { Heart } from 'lucide-react';
import { useState } from 'react';
import '../styles/recipe-card.css';

interface RecipeCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  delay?: number;
}

export default function RecipeCard({
  image,
  title,
  description,
  rating,
  delay = 0,
}: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="recipe-card card-hover"
      style={{
        animation: `slideInUp 0.6s ease-out ${delay * 0.1}s both`,
      }}
    >
      <div className="recipe-image-container image-hover">
        <div className="recipe-image">{image}</div>
        <button
          className="favorite-btn"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Add to favorites"
        >
          <Heart
            size={20}
            fill={isFavorite ? 'currentColor' : 'none'}
            className={isFavorite ? 'text-red-500' : ''}
          />
        </button>
      </div>

      <div className="recipe-content">
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-description">{description}</p>

        <div className="recipe-footer">
          <div className="recipe-rating">
            {'⭐'.repeat(Math.floor(rating))}
            <span className="rating-value">({rating})</span>
          </div>
          <button className="recipe-btn">View Recipe</button>
        </div>
      </div>
    </div>
  );
}

