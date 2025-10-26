import { Button } from '@/components/ui/button';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title animate-slide-up">
            Discover Delicious <span className="highlight">ChutNee</span> Recipes
          </h2>
          <p className="hero-subtitle animate-slide-up">
            Explore authentic and innovative chutney recipes from around the world. Perfect for every meal and occasion.
          </p>
          <div className="hero-cta animate-slide-up">
            <Button className="btn-primary btn-hover">
              Explore Recipes
            </Button>
            <Button variant="outline" className="btn-secondary btn-hover">
              Learn More
            </Button>
          </div>
        </div>
        <div className="hero-image animate-slide-right">
          <div className="image-placeholder">
            <span className="image-emoji">🍲</span>
          </div>
        </div>
      </div>
    </section>
  );
}

