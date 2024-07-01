import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Explore Germany</h1>
      <p className="text-lg mb-6">
        Discover the beauty, culture, and history of Germany.
      </p>
      <Button variant="primary" size="lg">
        Learn More
      </Button>
    </div>
  );
}

export default Index;