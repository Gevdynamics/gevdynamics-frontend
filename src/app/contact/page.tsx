"use client";

import { useState, type FormEvent } from "react";
import { Icon, Button, Card, CardContent, TextField } from "@/components/md3";

const contactInfo = [
  {
    icon: "mail",
    label: "General Inquiries",
    value: "info@gevdynamics.com",
    href: "mailto:info@gevdynamics.com",
  },
  {
    icon: "support_agent",
    label: "Support",
    value: "support@gevdynamics.com",
    href: "mailto:support@gevdynamics.com",
  },
  {
    icon: "location_on",
    label: "Location",
    value: "Houston, Texas",
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      // Send to contact API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setFormState("success");
      e.currentTarget.reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-md-primary/5 via-md-surface to-md-tertiary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="mail" size={20} className="text-md-primary" />
              <span className="text-sm font-medium text-md-primary uppercase tracking-wider">
                Contact
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-md-on-surface tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-md-on-surface-variant leading-relaxed max-w-2xl">
              Interested in ground effect vehicle technology? Have questions
              about what we are building? We would like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Contact form */}
          <Card variant="outlined">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-md-on-surface mb-6">
                Send a Message
              </h2>

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-md3-full bg-md-tertiary-container mb-4">
                    <Icon
                      name="check"
                      size={32}
                      className="text-md-on-tertiary-container"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-md-on-surface mb-2">
                    Message Sent
                  </h3>
                  <p className="text-md-on-surface-variant max-w-sm">
                    Thank you for reaching out. We will get back to you as
                    soon as possible.
                  </p>
                  <Button
                    variant="text"
                    className="mt-6"
                    onClick={() => setFormState("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TextField
                      label="Name"
                      name="name"
                      required
                      autoComplete="name"
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <TextField
                    label="Subject"
                    name="subject"
                    required
                  />
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    required
                  />

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-md-error text-sm">
                      <Icon name="error" size={18} />
                      <span>
                        Failed to send message. Please email us directly at{" "}
                        <a
                          href="mailto:info@gevdynamics.com"
                          className="underline"
                        >
                          info@gevdynamics.com
                        </a>
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    icon={
                      <Icon
                        name={
                          formState === "submitting" ? "hourglass_empty" : "send"
                        }
                        size={20}
                      />
                    }
                  >
                    {formState === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <Card variant="filled" className="p-6">
              <h3 className="text-lg font-semibold text-md-on-surface mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md3-sm bg-md-primary-container shrink-0">
                      <Icon
                        name={item.icon}
                        size={20}
                        className="text-md-on-primary-container"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-md-on-surface-variant uppercase tracking-wider font-medium">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-md-primary font-medium hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-md-on-surface font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="outlined" className="p-6">
              <h3 className="text-lg font-semibold text-md-on-surface mb-3">
                We Want to Hear From
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: "engineering", text: "Aerospace & mechanical engineers" },
                  { icon: "account_balance", text: "Investors & strategic partners" },
                  { icon: "school", text: "Research collaborators" },
                  { icon: "sailing", text: "Maritime & port operators" },
                  { icon: "newspaper", text: "Press & media" },
                ].map((item) => (
                  <li key={item.icon} className="flex items-center gap-3">
                    <Icon
                      name={item.icon}
                      size={18}
                      className="text-md-tertiary"
                    />
                    <span className="text-sm text-md-on-surface-variant">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
