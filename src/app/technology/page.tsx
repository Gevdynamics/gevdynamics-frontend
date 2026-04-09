import type { Metadata } from "next";
import { Icon, Card, CardContent, Divider, Button } from "@/components/md3";

export const metadata: Metadata = {
  title: "Technology | G.E.V. Dynamics",
  description:
    "Adaptive altitude ground effect vehicle technology: ground effect aerodynamics, blended wing body, hydrogen turbogenerator propulsion, and redundant safety systems.",
};

const groundEffectPrinciples = [
  {
    title: "Wing-In-Ground Effect",
    description:
      "When a lifting surface operates within approximately one wingspan of a flat surface, the downwash angle decreases and the effective aspect ratio increases. This reduces induced drag by up to 70% compared to free-flight at the same lift coefficient.",
    icon: "air",
  },
  {
    title: "Ram Air Cushion",
    description:
      "At very low altitudes, air compressed between the wing and surface creates a high-pressure cushion that provides additional lift. This effect strengthens as altitude decreases, creating inherent altitude stability.",
    icon: "compress",
  },
  {
    title: "Span-Dominated Aerodynamics",
    description:
      "Ground effect vehicles benefit from high wingspan-to-chord ratios. Our blended wing body maximizes span while integrating the passenger cabin into the wing structure, eliminating the drag penalty of a conventional fuselage.",
    icon: "straighten",
  },
];

const turbogenSpecs = [
  { label: "Turbine Speed", value: "95,000 RPM" },
  { label: "Fuel", value: "Gaseous Hydrogen (GH\u2082)" },
  { label: "Turbine Inlet Temp", value: "~850\u00B0C" },
  { label: "Mass Flow", value: "0.22 kg/s" },
  { label: "Turbine Material", value: "Inconel 713C (investment cast)" },
  { label: "Compressor Material", value: "7075-T6 Aluminum (5-axis CNC)" },
  { label: "Shaft", value: "4140 Steel Q&T, ceramic hybrid bearings" },
  { label: "Architecture", value: "Single-spool, centrifugal compressor + radial turbine" },
];

const safetyFeatures = [
  {
    icon: "backup",
    title: "Redundant Propulsion",
    description:
      "Multiple independent turbogenerator units. Loss of any single unit does not compromise safe flight. Electric distribution enables rapid power rebalancing.",
  },
  {
    icon: "sensors",
    title: "Altitude Management System",
    description:
      "Radar altimeters, LIDAR, and inertial measurement provide continuous terrain-relative positioning. The flight control system maintains safe clearance autonomously.",
  },
  {
    icon: "health_and_safety",
    title: "Structural Margins",
    description:
      "All primary structure designed to 1.5x ultimate load factor. Critical load paths use damage-tolerant design with inspectable fail-safe joints.",
  },
  {
    icon: "water",
    title: "Maritime Design",
    description:
      "Hull designed for controlled water contact. Watertight compartmentalization, marine-grade corrosion protection, and full marine safety equipment onboard.",
  },
  {
    icon: "emergency",
    title: "Energy Absorption",
    description:
      "Crush structures in the lower hull absorb energy in emergency water contact scenarios. Passenger cabin designed as a survivable volume with egress on all sides.",
  },
  {
    icon: "monitoring",
    title: "Health Monitoring",
    description:
      "Continuous structural health monitoring via embedded strain gauges and vibration sensors. Turbogenerator condition monitoring with automatic degraded-mode management.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-md-primary/5 via-md-surface to-md-tertiary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="science" size={20} className="text-md-primary" />
              <span className="text-sm font-medium text-md-primary uppercase tracking-wider">
                Engineering
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-md-on-surface tracking-tight">
              Technology
            </h1>
            <p className="mt-4 text-lg text-md-on-surface-variant leading-relaxed max-w-2xl">
              The physics of ground effect, the engineering of adaptive
              altitude, and the propulsion system that makes hydrogen-powered
              400 mph coastal transportation possible.
            </p>
          </div>
        </div>
      </section>

      {/* Ground Effect */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-4">
          Ground Effect Aerodynamics
        </h2>
        <p className="text-lg text-md-on-surface-variant max-w-3xl mb-12">
          Ground effect is the increase in aerodynamic efficiency that occurs
          when a wing operates close to a surface. It is the fundamental
          physical principle that makes our vehicle possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groundEffectPrinciples.map((principle) => (
            <Card key={principle.title} variant="outlined" className="h-full">
              <CardContent>
                <div className="flex items-center justify-center w-12 h-12 rounded-md3-md bg-md-primary-container mb-4">
                  <Icon
                    name={principle.icon}
                    size={24}
                    className="text-md-on-primary-container"
                  />
                </div>
                <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-md-on-surface-variant leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="mx-auto max-w-7xl" />

      {/* Adaptive Altitude */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-4">
          Adaptive Altitude Concept
        </h2>
        <p className="text-lg text-md-on-surface-variant max-w-3xl mb-12">
          Unlike traditional ekranoplans locked to surface flight, our vehicle
          transitions seamlessly between three altitude regimes.
        </p>

        <div className="space-y-8">
          {[
            {
              altitude: "0 \u2013 50 ft",
              name: "Ground Effect Cruise",
              color: "bg-md-tertiary-container",
              textColor: "text-md-on-tertiary-container",
              icon: "waves",
              details: [
                "Maximum aerodynamic efficiency \u2014 L/D ratios exceeding 25:1",
                "Drag reduction of up to 70% vs. free flight",
                "Inherent altitude stability from increasing ground effect at lower heights",
                "Primary operating regime for open-water cruise segments",
              ],
            },
            {
              altitude: "50 \u2013 500 ft",
              name: "Transition Flight",
              color: "bg-md-primary-container",
              textColor: "text-md-on-primary-container",
              icon: "flight_takeoff",
              details: [
                "Obstacle and vessel clearance for congested waterways",
                "Port approach and departure maneuvering",
                "Blended wing body maintains efficient lift through transition",
                "Smooth ride quality with active stability augmentation",
              ],
            },
            {
              altitude: "500 \u2013 2,000 ft",
              name: "Storm Clearance",
              color: "bg-md-secondary-container",
              textColor: "text-md-on-secondary-container",
              icon: "cloud",
              details: [
                "Weather avoidance above sea state and storm surge",
                "Ceiling sufficient to clear tropical storm wave heights",
                "Higher drag accepted as trade-off for safety and ride quality",
                "Automatic descent to ground effect when conditions permit",
              ],
            },
          ].map((mode) => (
            <div
              key={mode.name}
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start"
            >
              <div
                className={`${mode.color} rounded-md3-md p-6 text-center`}
              >
                <Icon
                  name={mode.icon}
                  size={32}
                  className={mode.textColor}
                />
                <div
                  className={`text-2xl font-bold ${mode.textColor} mt-2`}
                >
                  {mode.altitude}
                </div>
                <div
                  className={`text-sm font-medium ${mode.textColor} opacity-80`}
                >
                  {mode.name}
                </div>
              </div>
              <ul className="space-y-3 py-2">
                {mode.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <Icon
                      name="check_circle"
                      size={18}
                      className="text-md-tertiary mt-0.5 shrink-0"
                    />
                    <span className="text-md-on-surface-variant">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider className="mx-auto max-w-7xl" />

      {/* Blended Wing Body */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-4">
              Blended Wing Body
            </h2>
            <p className="text-lg text-md-on-surface-variant leading-relaxed mb-6">
              The airframe uses a blended wing body (BWB) configuration where
              the fuselage and wing merge into a single lifting surface. This
              is not a conventional aircraft with wings bolted to a tube.
            </p>
            <ul className="space-y-4">
              {[
                "Entire body generates lift \u2014 no parasitic fuselage drag",
                "Wide planform ideal for ground effect operations",
                "Integrated passenger cabin within the wing structure",
                "Large internal volume for hydrogen fuel storage",
                "Low aspect ratio with high span loading for structural efficiency",
                "Naturally stable in ground effect due to favorable pitching moment characteristics",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Icon
                    name="arrow_forward"
                    size={18}
                    className="text-md-primary mt-0.5 shrink-0"
                  />
                  <span className="text-md-on-surface-variant">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card variant="filled" className="p-8 text-center">
            <Icon name="flight" size={96} className="text-md-primary mx-auto mb-4" />
            <p className="text-sm text-md-on-surface-variant">
              Configuration rendering coming soon. The BWB planform integrates
              hydrogen storage, passenger seating, and distributed propulsion
              into a single aerodynamic body.
            </p>
          </Card>
        </div>
      </section>

      <Divider className="mx-auto max-w-7xl" />

      {/* Turbogenerator */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-4">
          Hydrogen Turbogenerator Propulsion
        </h2>
        <p className="text-lg text-md-on-surface-variant max-w-3xl mb-12">
          Power comes from hydrogen-fueled micro gas turbines spinning at 95,000
          RPM, each driving an electrical generator. Electric motors distributed
          along the trailing edge provide thrust and control authority.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Spec table */}
          <Card variant="outlined">
            <CardContent>
              <h3 className="text-lg font-semibold text-md-on-surface mb-4">
                Turbogenerator Specifications
              </h3>
              <div className="space-y-0">
                {turbogenSpecs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between py-3 ${
                      i < turbogenSpecs.length - 1
                        ? "border-b border-md-outline-variant"
                        : ""
                    }`}
                  >
                    <span className="text-sm text-md-on-surface-variant">
                      {spec.label}
                    </span>
                    <span className="text-sm font-medium text-md-on-surface text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Why hydrogen */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-md-on-surface">
              Why Hydrogen?
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: "local_fire_department",
                  title: "Highest energy density by mass",
                  desc: "Hydrogen stores ~3x the energy per kilogram compared to jet fuel, critical for range at 400 mph.",
                },
                {
                  icon: "eco",
                  title: "Zero carbon at point of use",
                  desc: "Combustion product is water vapor. No CO\u2082, no particulates, no sulfur compounds.",
                },
                {
                  icon: "engineering",
                  title: "Turbine-compatible",
                  desc: "Hydrogen burns cleanly in gas turbines with wide flammability limits and fast flame speeds, enabling compact combustor design.",
                },
                {
                  icon: "trending_up",
                  title: "Scaling economics",
                  desc: "Green hydrogen production costs are dropping rapidly. Our vehicle is designed for the hydrogen economy of the 2030s.",
                },
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md3-sm bg-md-tertiary-container shrink-0">
                    <Icon
                      name={item.icon}
                      size={20}
                      className="text-md-on-tertiary-container"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-md-on-surface">
                      {item.title}
                    </h4>
                    <p className="text-sm text-md-on-surface-variant mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Divider className="mx-auto max-w-7xl" />

      {/* Safety */}
      <section className="bg-md-surface-container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-4">
            Safety &amp; Redundancy
          </h2>
          <p className="text-lg text-md-on-surface-variant max-w-3xl mb-12">
            Safety is engineered in from the start, not added after. Every
            critical system has independent redundancy, and the vehicle is
            designed for graceful degradation \u2014 no single point of failure
            can compromise passenger safety.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature) => (
              <Card key={feature.title} variant="elevated" className="h-full">
                <CardContent>
                  <div className="flex items-center justify-center w-12 h-12 rounded-md3-md bg-md-primary-container mb-4">
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-md-on-primary-container"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-md-on-surface mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-md-on-surface-variant leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-md-on-surface tracking-tight">
          Want to Learn More?
        </h2>
        <p className="mt-4 text-lg text-md-on-surface-variant max-w-xl mx-auto">
          We are actively developing this technology in Houston, Texas. Reach
          out to discuss the future of coastal transportation.
        </p>
        <div className="mt-8">
          <Button href="/contact" icon={<Icon name="mail" size={20} />}>
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
