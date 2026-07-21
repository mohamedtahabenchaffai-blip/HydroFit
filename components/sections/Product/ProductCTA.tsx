import Button from "@/components/ui/Button";

export default function ProductCTA() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button size="lg">
        Order Now
      </Button>

      <Button
        variant="outline"
        size="lg"
      >
        Learn More
      </Button>
    </div>
  );
}