import type { Metadata } from "next";
import { Icon, Card, CardContent, Divider, Button } from "@/components/md3";

export const metadata: Metadata = {
  title: "About | G.E.V. Dynamics",
  description:
    "G.E.V. Dynamics is a Houston-based company building adaptive altitude ground effect vehicles to revolutionize coastal transportation.",
};

const milestones = [
  {
    phase: "Phase 1",
    title: "Design & Validation",
    description:
      "Parametric CAD, FEA structural analysis, CFD aerodynamic validation, and turbogenerator prototype development.",
    status: "In Progress",
    icon: "engineering",
  },
  {
    phase: "Phase 2",
    title: "Subscale Demonstrator",
    description:
      "Scaled flight test vehicle proving adaptive altitude transitions, ground effect stability, and hydrogen propulsion integration.",
    status: "Planned",
    icon: "model_training",
  },
  {
    phase: "Phase 3",
    title: "Full-Scale Prototype",
    description:
      "20-25 passenger vehicle build, FAA engagement for type certification framework, and operational testing on Gulf Coast routes.",
    status: "Planned",
    icon: "flight",
  },
  {
    phase: "Phase 4",
    title: "Commercial Operations",
    description:
      "Initial revenue service on high-demand coastal routes. Houston\u2013New Orleans, Miami\u2013Bahamas, and Gulf Coast island connections.",
    status: "Planned",
    icon: "public",
  },
];

const values = [
  {
    icon: "science",
    title: "Physics First",
    description:
      "Every design decision starts with the physics. We validate with analysis before we commit to hardware. FEA, CFD, and analytical methods are our primary design tools.",
  },
  {
    icon: "security",
    title: "Safety by Design",
    description:
      "Redundancy is not an afterthought. Critical systems are independently redundant from the initial architecture. No single point of failure can compromise passenger safety.",
  },
  {
    icon: "eco",
    title: "Zero Emissions",
    description:
      "Hydrogen propulsion from day one. We are not electrifying a legacy design \u2014 the vehicle is purpose-built around hydrogen turbogenerator technology.",
  },
  {
    icon: "precision_manufacturing",
    title: "Vertical Integration",
    description:
      "We design the turbogenerator, the airframe, and the control systems in-house. Integration risk is the primary risk in novel vehicle programs. We control it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-md-primary/5 via-md-surface to-md-tertiary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="groups" size={20} className="text-md-primary" />
              <span className="text-sm font-medium text-md-primary uppercase tracking-wider">
                About
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-md-on-surface tracking-tight">
              Building the Future of
              <br />
              Coastal Transportation
            </h1>
            <p className="mt-4 text-lg text-md-on-surface-variant leading-relaxed max-w-2xl">
              G.E.V. Dynamics is a Houston-based company developing adaptive
              altitude ground effect vehicles \u2014 hydrogen-powered craft
              that travel 400 mph over water, carrying 20&ndash;25 passengers
              between coastal cities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-md-on-surface-variant leading-relaxed mb-6">
              Coastal cities are the economic engines of the world, but they
              remain poorly connected by surface transportation. Ferries are
              slow. Flights require airports. Bridges span limited distances.
            </p>
            <p className="text-lg text-md-on-surface-variant leading-relaxed mb-6">
              Ground effect vehicles solve this problem. By flying just above
              the water surface, they achieve aircraft-class speeds with a
              fraction of the energy cost \u2014 and without runway
              infrastructure. Add adaptive altitude capability and
              hydrogen-powered propulsion, and you have a transportation mode
              that did not previously exist.
            </p>
            <p className="text-lg text-md-on-surface-variant leading-relaxed">
              Our mission is to make this real. Not as a concept study, but as
              certified, revenue-service vehicles connecting coastal cities
              across the Gulf Coast and beyond.
            </p>
          </div>

          <Card variant="filled" className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-md3-lg bg-md-primary-container">
                  <Icon
                    name="location_on"
                    size={32}
                    className="text-md-on-primary-container"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-md-on-surface">
                    Houston, Texas
                  </h3>
                  <p className="text-sm text-md-on-surface-variant">
                    Headquarters
                  </p>
                </div>
              </div>
              <Divider />
              <p className="text-sm text-md-on-surface-variant leading-relaxed">
                Houston is the natural home for this company. It sits on the
                Gulf Coast with direct access to the waterways we intend to
                serve. It has a deep aerospace engineering talent pool from
                NASA and the commercial space industry. And it is a hub for
                the hydrogen economy, with extensive petrochemical
                infrastructure transitioning toward clean hydrogen production.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Divider className="mx-auto max-w-7xl" />

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-12">
          Founder
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
          <Card variant="outlined" className="text-center p-8">
            <div className="flex items-center justify-center w-24 h-24 rounded-md3-full bg-md-primary-container mx-auto mb-4">
              <Icon
                name="person"
                size={48}
                className="text-md-on-primary-container"
              />
            </div>
            <h3 className="text-xl font-semibold text-md-on-surface">
              Alex Lewis
            </h3>
            <p className="text-sm text-md-primary font-medium mt-1">
              Founder
            </p>
            <p className="text-sm text-md-on-surface-variant mt-1">
              Houston, Texas
            </p>
          </Card>

          <div className="space-y-4">
            <p className="text-lg text-md-on-surface-variant leading-relaxed">
              Alex Lewis founded G.E.V. Dynamics to solve a problem he sees
              every day living on the Gulf Coast: coastal cities that should be
              hours apart by water are days apart by surface transportation,
              or require expensive air travel with all its infrastructure
              overhead.
            </p>
            <p className="text-lg text-md-on-surface-variant leading-relaxed">
              His approach is engineering-first: build the analytical tools,
              validate the physics, prove the propulsion, then scale.
              G.E.V. Dynamics develops its turbogenerator, airframe, and
              control systems in-house using parametric CAD with automated
              FEA and CFD validation pipelines.
            </p>
            <p className="text-lg text-md-on-surface-variant leading-relaxed">
              Alex also founded{" "}
              <span className="text-md-on-surface font-medium">
                LaminarForge
              </span>
              , a nonprofit developing open-source diagnostics and biotech
              tools, and{" "}
              <span className="text-md-on-surface font-medium">
                BallotRadar
              </span>
              , an election transparency platform for Montgomery County,
              Texas.
            </p>
          </div>
        </div>
      </section>

      <Divider className="mx-auto max-w-7xl" />

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-4">
          Engineering Philosophy
        </h2>
        <p className="text-lg text-md-on-surface-variant max-w-3xl mb-12">
          Four principles guide every decision at G.E.V. Dynamics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <Card key={value.title} variant="outlined" className="h-full">
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md3-sm bg-md-tertiary-container">
                    <Icon
                      name={value.icon}
                      size={20}
                      className="text-md-on-tertiary-container"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-md-on-surface">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm text-md-on-surface-variant leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="mx-auto max-w-7xl" />

      {/* Roadmap */}
      <section className="bg-md-surface-container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-md-on-surface tracking-tight mb-4">
            Development Roadmap
          </h2>
          <p className="text-lg text-md-on-surface-variant max-w-3xl mb-12">
            From computational design to commercial operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone) => (
              <Card
                key={milestone.phase}
                variant="elevated"
                className="h-full"
              >
                <CardContent className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-md-primary">
                      {milestone.phase}
                    </span>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-md3-full ${
                        milestone.status === "In Progress"
                          ? "bg-md-tertiary-container text-md-on-tertiary-container"
                          : "bg-md-surface-container-high text-md-on-surface-variant"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-md3-md bg-md-primary-container mb-4">
                    <Icon
                      name={milestone.icon}
                      size={24}
                      className="text-md-on-primary-container"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-md-on-surface mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-md-on-surface-variant leading-relaxed flex-1">
                    {milestone.description}
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
          Join the Mission
        </h2>
        <p className="mt-4 text-lg text-md-on-surface-variant max-w-xl mx-auto">
          Interested in adaptive altitude ground effect vehicles? We want to
          hear from engineers, investors, and future passengers.
        </p>
        <div className="mt-8">
          <Button href="/contact" icon={<Icon name="mail" size={20} />}>
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
