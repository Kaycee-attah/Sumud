import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
};

export function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <div className="glass-card rounded-lg p-6 border-2" data-testid="card-testimonial">
      <div className="flex items-center gap-4 mb-4">
        {image && (
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" data-testid="img-testimonial" />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-foreground" data-testid="text-testimonial-name">{name}</h4>
          <p className="text-sm text-muted-foreground" data-testid="text-testimonial-role">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted"}`}
            data-testid={`star-${i}`}
          />
        ))}
      </div>

      <p className="text-foreground" data-testid="text-testimonial-content">{content}</p>
    </div>
  );
}
