import Link from "next/link";
import { Icon, Divider } from "@/components/md3";

export function Footer() {
  return (
    <footer className="bg-md-surface-container mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="flight" size={24} className="text-md-primary" />
              <span className="text-lg font-semibold text-md-on-surface tracking-tight">
                G.E.V. Dynamics
              </span>
            </div>
            <p className="text-sm text-md-on-surface-variant leading-relaxed">
              Revolutionizing coastal transportation with adaptive altitude
              ground effect vehicles. Hydrogen-powered, 400 mph over water.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-md-on-surface mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/technology" className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-md-on-surface mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@gevdynamics.com"
                  className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors inline-flex items-center gap-1"
                >
                  <Icon name="mail" size={14} />
                  info@gevdynamics.com
                </a>
              </li>
              <li>
                <span className="text-sm text-md-on-surface-variant inline-flex items-center gap-1">
                  <Icon name="location_on" size={14} />
                  Houston, Texas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-md-on-surface-variant">
            &copy; {new Date().getFullYear()} G.E.V. Dynamics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
