"use client";

import { motion } from "framer-motion";
import StoreButtons from "./StoreButtons";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Core RSVP reading",
      "Focus mode (basic)",
      "Basic analytics",
      "Limited imports",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$6.99",
    period: "/year",
    badge: "Best Value",
    subtitle: "That's ~$0.58/month",
    features: [
      "Everything in Free",
      "Unlimited PDF imports",
      "All ambient tracks",
      "Full WPM dashboard & streaks",
      "All themes (10+)",
      "Text-to-speech",
    ],
    highlighted: true,
  },
];

const otherPricing = [
  { label: "3 months", price: "$2.99" },
  { label: "6 months", price: "$4.99" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="text-muted max-w-md mx-auto">
            No paywall to start reading faster. Premium unlocks the full
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`relative rounded-2xl p-7 lg:p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-accent/5 border-accent/30 shadow-lg shadow-accent/5"
                  : "bg-surface-alt border-border hover:border-accent/20"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-accent text-bg text-[10px] font-bold uppercase tracking-wider">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-display font-bold mb-1">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-display font-bold text-accent">
                  {plan.price}
                </span>
                <span className="text-sm text-muted">{plan.period}</span>
              </div>
              {plan.subtitle && (
                <p className="text-xs text-muted mb-5">{plan.subtitle}</p>
              )}
              {!plan.subtitle && <div className="mb-5" />}

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-muted"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? "text-foreground" : "text-muted"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted">
            <span>Also available:</span>
            {otherPricing.map((p) => (
              <span key={p.label} className="text-foreground">
                {p.label}{" "}
                <span className="font-mono text-amber">{p.price}</span>
              </span>
            ))}
          </div>

          <StoreButtons
            utmContent="pricing_cta"
            className="justify-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
