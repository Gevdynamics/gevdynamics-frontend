import { Icon, Button, Card, CardContent, Divider } from "@/components/md3";

const flightModes = [
  {
    icon: "waves",
    title: "Ground Effect",
    altitude: "0 \u2013 50 ft",
    description:
      "Maximum aerodynamic efficiency. The craft rides a cushion of compressed air between wing and water, reducing induced drag by up to 70%.",
  },
  {
    icon: "flight_takeoff",
    title: "Transition",
    altitude: "50 \u2013 500 ft",
    description:
      "Obstacle clearance and port navigation. Blended wing body maintains stable lift through the full transition envelope.",
  },
  {
    icon: "cloud",
    title: "Storm Clearance",
    altitude: "500 \u2013 2,000 ft",
    description:
      "Weather avoidance capability. Climbs above sea state and storm surge when conditions require, then descends back to efficient ground effect cruise.",
  },
];

const stats = [
  { value: "400", unit: "mph", label: "Cruise Speed" },
  { value: "20\u201325", unit: "", label: "Passengers" },
  { value: "H\u2082", unit: "", label: "Hydrogen Powered" },
  { value: "3", unit: "", label: "Flight Modes" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-md-primary/5 via-md-surface to-md-tertiary/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-md3-full bg-md-tertiary-container px-4 py-1.5 text-xs font-medium text-md-on-tertiary-container">
                <Icon name="eco" size={14} />
                Zero-Emission Hydrogen Propulsion
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface tracking-tight leading-[1.1]">
              The Future of
              <br />
              <span className="text-md-primary">Coastal Transportation</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-md-on-surface-variant max-w-2xl leading-relaxed">
              Adaptive altitude ground effect vehicles. 400 mph over water,
              hydrogen-powered, carrying 20&ndash;25 passengers between coastal
              cities in a fraction of the time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/technology"
                icon={<Icon name="precision_manufacturing" size={20} />}
              >
                Our Technology
              </Button>
              <Button
                variant="outlined"
                href="/about"
                icon={<Icon name="groups" size={20} />}
              >
                About Us
              </Button>
              <Button
                variant="text"
                href="/contact"
                icon={<Icon name="mail" size={20} />}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-md-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-md-on-primary">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-xl ml-1 font-medium opacity-80">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="text-sm text-md-on-primary/70 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptive Altitude section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface tracking-tight">
            Adaptive Altitude Flight
          </h2>
          <p className="mt-4 text-lg text-md-on-surface-variant">
            Three distinct flight regimes, one seamless vehicle. Our GEV
            dynamically transitions between altitudes based on conditions,
            optimizing for efficiency, safety, and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flightModes.map((mode) => (
            <Card key={mode.title} variant="outlined" className="h-full">
              <CardContent className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md3-md bg-md-primary-container">
                    <Icon
                      name={mode.icon}
                      size={24}
                      className="text-md-on-primary-container"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-md-on-surface">
                      {mode.title}
                    </h3>
                    <p className="text-sm font-medium text-md-primary">
                      {mode.altitude}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-md-on-surface-variant leading-relaxed">
                  {mode.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="mx-auto max-w-7xl" />

      {/* Why GEV section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface tracking-tight">
              Why Ground Effect?
            </h2>
            <p className="mt-4 text-lg text-md-on-surface-variant leading-relaxed">
              Ground effect vehicles exploit aerodynamic interaction between
              wings and surface to achieve dramatically lower drag than
              conventional aircraft at the same speed. The result: aircraft-class
              speed with a fraction of the energy cost.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: "speed",
                  text: "400 mph cruise \u2014 10x faster than ferries, competitive with regional jets",
                },
                {
                  icon: "bolt",
                  text: "Up to 70% reduction in induced drag compared to free flight",
                },
                {
                  icon: "eco",
                  text: "Hydrogen turbogenerator \u2014 zero carbon emissions at point of use",
                },
                {
                  icon: "security",
                  text: "Over water operations \u2014 no runway infrastructure required",
                },
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-3">
                  <Icon
                    name={item.icon}
                    size={20}
                    className="text-md-tertiary mt-0.5 shrink-0"
                  />
                  <span className="text-md-on-surface-variant">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Card variant="filled" className="p-8">
            <div className="text-center space-y-6">
              <Icon
                name="flight"
                size={80}
                className="text-md-primary mx-auto"
              />
              <h3 className="text-xl font-semibold text-md-on-surface">
                Blended Wing Body
              </h3>
              <p className="text-sm text-md-on-surface-variant leading-relaxed">
                Our GEV uses a blended wing body configuration where the
                fuselage seamlessly integrates with the wing, maximizing lift
                area and internal volume while minimizing parasitic drag. The
                wide planform is ideally suited for ground effect operations.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-md-surface-container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-md-on-surface tracking-tight">
            Reimagining How Coastal Cities Connect
          </h2>
          <p className="mt-4 text-lg text-md-on-surface-variant max-w-2xl mx-auto">
            Houston to New Orleans in under an hour. Miami to the Bahamas in
            minutes. G.E.V. Dynamics is building the transportation link between
            every coastal city.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              href="/technology"
              icon={<Icon name="science" size={20} />}
            >
              Explore the Technology
            </Button>
            <Button
              variant="outlined"
              href="/contact"
              icon={<Icon name="mail" size={20} />}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
