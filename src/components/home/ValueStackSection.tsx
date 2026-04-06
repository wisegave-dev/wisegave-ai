"use client";

import { motion } from "framer-motion";
import { Phone, Star, Globe, CheckCircle2 } from "lucide-react";

export function ValueStackSection() {
  const components = [
    {
      icon: Phone,
      title: "Smart Receptionist",
      subtitle: "Never miss a call. Never lose a lead.",
      description:
        "Your Smart Receptionist answers every inbound call 24 hours a day, 7 days a week — in your business name, professionally, instantly. While you are under a unit in 100-degree heat, your front desk is open.",
      features: [
        "Answers every call 24/7 in your business name",
        "Books appointments directly into your calendar on the call",
        "Handles your website live chat — qualifies leads and books jobs instantly",
        "Sends an automatic follow-up text within 2 minutes of every missed call",
        "Qualifies leads by text so only serious prospects reach you",
      ],
      replacement:
        "What this replaces: a part-time receptionist at $1,400 a month — who only works business hours, takes sick days, and cannot handle your website at the same time.",
      color: "blue",
    },
    {
      icon: Star,
      title: "Reputation Engine",
      subtitle: "Turn every completed job into a 5-star review — automatically.",
      description:
        "Most contractors have done hundreds of jobs and have almost nothing to show for it on Google. We fix that in week one — and keep it compounding forever.",
      features: [
        "We activate your existing customer list in week 1 — review requests go out immediately, results within 48 hours",
        "Automated review request sent via SMS and email within 60 minutes of every job close",
        "Negative review filter — unhappy customers go to a private inbox, satisfied ones go straight to Google",
        "Every new review lifts your Google Maps ranking and brings more inbound leads",
        "Monthly report showing reviews gained, star rating growth, and leads captured",
      ],
      replacement:
        "What this replaces: a reputation management agency charging $400 to $800 a month — with no guarantee of results.",
      color: "purple",
    },
    {
      icon: Globe,
      title: "Smart Website",
      subtitle: "A website that actually generates leads — not one that just sits there.",
      description:
        "Your Smart Website is built specifically for home services businesses — conversion-optimized, mobile-first, and connected to everything else in the system.",
      features: [
        "SEO-targeted to your service area so homeowners find you when they search Google",
        "Conversion-optimized layout — built to turn visitors into booked jobs, not just page views",
        "Embedded booking calendar — customers book directly without calling",
        "Lead capture form connected live to your pipeline — no lead falls through the cracks",
        "Live chat widget powered by your Smart Receptionist — no visitor ever goes unanswered",
        "Built and live within 5 business days",
      ],
      replacement:
        "What this replaces: a web agency retainer at $500 to $1,000 a month — that builds you a brochure and calls it done.",
      color: "cyan",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-500/10 to-blue-900/10",
      border: "border-blue-500/20",
      icon: "from-blue-500 to-purple-500",
      iconText: "text-blue-400",
      checkmark: "text-blue-400",
    },
    purple: {
      bg: "from-purple-500/10 to-purple-900/10",
      border: "border-purple-500/20",
      icon: "from-purple-500 to-pink-500",
      iconText: "text-purple-400",
      checkmark: "text-purple-400",
    },
    cyan: {
      bg: "from-cyan-500/10 to-cyan-900/10",
      border: "border-cyan-500/20",
      icon: "from-cyan-500 to-blue-500",
      iconText: "text-cyan-400",
      checkmark: "text-cyan-400",
    },
  };

  return (
    <section
      id="value-stack"
      className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Everything you get —{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              fully built, fully managed, fully done for you.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {components.map((component, index) => {
            const Icon = component.icon;
            const colors =
              colorClasses[component.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${colors.bg} p-8 md:p-10 rounded-2xl border ${colors.border} backdrop-blur-sm`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className={`bg-gradient-to-br ${colors.icon} p-4 rounded-xl flex-shrink-0`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl mb-2">{component.title}</h3>
                    <p className={`text-xl ${colors.iconText}`}>
                      {component.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {component.description}
                </p>

                <div className="space-y-3 mb-6">
                  {component.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 ${colors.checkmark} flex-shrink-0 mt-0.5`}
                      />
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-gray-400 italic">
                    {component.replacement}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
