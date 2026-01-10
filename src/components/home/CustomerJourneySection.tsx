"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Wrench,
  CreditCard,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function CustomerJourneySection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredStep(index);
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  const steps = [
    {
      number: 1,
      icon: Calendar,
      title: "Book a Demo",
      description:
        "See WiseGave AI Employee's features in context of your specific business needs",
      details:
        "Schedule a personalized demo where we showcase how our AI can transform your specific business operations.",
      color: "blue",
    },
    {
      number: 2,
      icon: Wrench,
      title: "Integrate in 48 Hours",
      description:
        "Our team sets up everything for you - no technical expertise required",
      details:
        "Done-for-you setup includes AI configuration, workflow integration, and comprehensive testing.",
      color: "purple",
    },
    {
      number: 3,
      icon: CreditCard,
      title: "Make Payment",
      description: "Secure payment via Paddle with 100% money-back guarantee",
      details:
        "Flexible monthly or annual plans. Cancel anytime. No hidden fees or long-term contracts.",
      color: "green",
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Scale & Grow",
      description: "Watch your revenue grow 16x while reducing employee costs",
      details:
        "Maximize output while minimizing costs. Scale operations without adding headcount.",
      color: "cyan",
    },
  ];

  const colorClasses = {
    blue: {
      gradient: "from-blue-500 to-purple-500",
      glow: "shadow-blue-500/50",
      border: "border-blue-500/50",
      bg: "bg-blue-500/10",
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/50",
      border: "border-purple-500/50",
      bg: "bg-purple-500/10",
    },
    green: {
      gradient: "from-green-500 to-emerald-500",
      glow: "shadow-green-500/50",
      border: "border-green-500/50",
      bg: "bg-green-500/10",
    },
    cyan: {
      gradient: "from-cyan-500 to-blue-500",
      glow: "shadow-cyan-500/50",
      border: "border-cyan-500/50",
      bg: "bg-cyan-500/10",
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Your Journey to{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI Success
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From setup to success in just 4 simple steps
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors =
                colorClasses[step.color as keyof typeof colorClasses];
              const isHovered = hoveredStep === index;

              return (
                <motion.div
                  key={`step-${step.number}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={`${
                      isHovered ? "" : "h-[220px]"
                    } bg-white/5 backdrop-blur-sm p-6 rounded-xl border-2 ${
                      isHovered ? colors.border : "border-white/20"
                    } transition-all duration-300 ${
                      isHovered ? "transform scale-105" : ""
                    } flex flex-col`}
                  >
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${
                          colors.gradient
                        } rounded-full flex items-center justify-center ${
                          isHovered ? `shadow-lg ${colors.glow}` : ""
                        } transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div
                        className={`text-4xl text-white/20 ${
                          isHovered ? "text-white/40" : ""
                        } transition-colors`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className={`text-xl mb-2 transition-colors ${
                        isHovered ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {step.description}
                    </p>

                    {/* Details on Hover - Only show for this specific card */}
                    {hoveredStep !== null && hoveredStep === index ? (
                      <motion.div
                        key={`details-${index}-${hoveredStep}`}
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 ${colors.bg} rounded-lg border ${colors.border} backdrop-blur-sm overflow-hidden`}
                      >
                        <p className="text-sm text-gray-300">{step.details}</p>
                      </motion.div>
                    ) : null}
                  </div>

                  {/* Arrow between steps (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-8 text-gray-600 z-10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg group hover:shadow-2xl hover:shadow-white/20"
          >
            Start Your Journey Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-gray-400">
            Join 785+ businesses already transforming with WiseGave AI
          </p>
        </motion.div>
      </div>
    </section>
  );
}
