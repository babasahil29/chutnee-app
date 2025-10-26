import { Button } from '@/components/ui/button';
import '../styles/testimonial.css';

export default function Testimonial() {
  return (
    <section id="about" className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-image animate-slide-left">
          <div className="image-placeholder-large">
            <span className="image-emoji-large">👨‍🍳</span>
          </div>
        </div>

        <div className="testimonial-content">
          <h2 className="testimonial-title animate-slide-up">
            Crafted with <span className="highlight">Love & Tradition</span>
          </h2>
          <p className="testimonial-text animate-slide-up">
            Every ChutNee recipe is carefully crafted using traditional methods combined with modern culinary techniques. Our passion is to bring authentic flavors to your table while celebrating the rich heritage of chutney-making across cultures.
          </p>

          <div className="testimonial-stats animate-slide-up">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Recipes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Cooks</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>

          <div className="testimonial-cta animate-slide-up">
            <Button className="btn-primary btn-hover">
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

