"use client";

import { motion } from "framer-motion";
import { PhoneOff, Star, Globe } from "lucide-react";

export function PainAgitationSection() {
  const painPoints = [
    {
      icon: PhoneOff,
      title: "Hole 1 — The missed call",
      description:
        "You are on a job. Your phone rings. It goes to voicemail. That homeowner does not leave a message — they call the next contractor on Google. You never know it happened. Industry data shows 62% of contractor calls go unanswered, and 85% of those callers never call back. For a small HVAC business, that is $45,000 to $120,000 walking out the door every year — silently.",
      color: "blue",
    },
    {
      icon: Star,
      title: "Hole 2 — The invisible review gap",
      description:
        "You have done hundreds of jobs. You have 30 reviews on Google. Those 270 happy customers never got asked. Meanwhile your competitor — who does worse work — has 180 reviews and ranks above you on Google Maps. 87% of homeowners check reviews before hiring. 57% will not even consider a business under 4 stars. Your reputation is not reflecting your work. And it is costing you leads every single day.",
      color: "purple",
    },
    {
      icon: Globe,
      title: "Hole 3 — The website that does nothing",
      description:
        "You have a website. It exists. But when was the last time it generated a booked job? Most contractor websites are digital brochures — they have no live chat, no booking calendar, no way to capture a lead at 10pm when a homeowner's AC breaks. Traffic comes in. Traffic leaves. Nobody books.",
      color: "cyan",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-500/10 to-blue-900/10",
      border: "border-blue-500/20",
      icon: "text-cyan-300",
      iconBg: "bg-blue-500/10",
    },
    purple: {
      bg: "from-purple-500/10 to-purple-900/10",
      border: "border-purple-500/20",
      icon: "text-pink-300",
      iconBg: "bg-purple-500/10",
    },
    cyan: {
      bg: "from-cyan-500/10 to-cyan-900/10",
      border: "border-cyan-500/20",
      icon: "text-blue-300",
      iconBg: "bg-cyan-500/10",
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Your business has three holes in the bucket.{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Most owners never see them.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            const colors = colorClasses[pain.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${colors.bg} p-8 rounded-xl border ${colors.border} backdrop-blur-sm`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`${colors.iconBg} p-4 rounded-lg flex-shrink-0`}
                  >
                    <Icon className={`w-8 h-8 ${colors.icon}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-4">{pain.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-400 italic">
            Three holes. All bleeding at the same time. None of them obvious
            until you do the math.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
