import { Icon, Button } from "@/components/md3";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <Icon name="flight" size={64} className="text-md-primary mb-6" />
      <h1 className="text-4xl sm:text-5xl font-bold text-md-on-surface mb-4 tracking-tight">
        G.E.V. Dynamics
      </h1>
      <p className="text-lg text-md-on-surface-variant max-w-2xl mb-8">
        Adaptive altitude ground effect vehicles. 400 mph over water,
        hydrogen-powered, redefining coastal transportation.
      </p>
      <div className="flex gap-4">
        <Button href="/technology" icon={<Icon name="precision_manufacturing" size={20} />}>
          Our Technology
        </Button>
        <Button variant="outlined" href="/about" icon={<Icon name="info" size={20} />}>
          Learn More
        </Button>
      </div>
    </section>
  );
}
