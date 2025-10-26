import '../styles/category-card.css';

interface CategoryCardProps {
  icon: string;
  label: string;
  delay?: number;
}

export default function CategoryCard({ icon, label, delay = 0 }: CategoryCardProps) {
  return (
    <div
      className="category-card"
      style={{
        animation: `slideInUp 0.6s ease-out ${delay * 0.1}s both`,
      }}
    >
      <div className="category-icon">
        {icon}
      </div>
      <p className="category-label">{label}</p>
    </div>
  );
}

