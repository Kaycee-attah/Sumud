import { TestimonialCard } from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md">
      <TestimonialCard
        name="Sarah Johnson"
        role="Home Baker"
        content="This cassava flour has transformed my gluten-free baking. The quality is exceptional and the taste is authentic!"
        rating={5}
      />
    </div>
  );
}
