"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Zap,
  Clock,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

export function USPsSection() {
  const usps = [
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description:
        "By automating various processes, businesses can save on employee costs and improve productivity significantly.",
      color: "green",
    },
    {
      icon: Zap,
      title: "Ease of Use",
      description:
        "Our Done-for-You AI Setup makes it easy for businesses to get started without technical expertise. We set up everything for you.",
      color: "yellow",
    },
    {
      icon: Clock,
      title: "Launch in 48 Hours",
      description:
        "With the system set up within 48 hours, businesses can start experiencing the benefits of AI in a very short time.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "No Long-Term Contracts",
      description:
        "Our flexible subscription model allows businesses to cancel anytime, offering them control over their usage.",
      color: "purple",
    },
    {
      icon: Users,
      title: "Dedicated Success Manager",
      description:
        "Each customer will have a dedicated Success Manager who will assist in onboarding and provide support, ensuring smooth integration.",
      color: "cyan",
    },
    {
      icon: TrendingUp,
      title: "85% Money Back Guarantee",
      description:
        "Risk-free trial with a full refund if customers are not satisfied. 7-day money-back guarantee.",
      color: "red",
    },
  ];

  const colorClasses = {
    green: {
      bg: "from-green-500/10 to-green-400/5",
      border: "border-green-500/30",
      icon: "from-green-400 to-emerald-400",
      hover: "hover:border-green-500/50",
    },
    yellow: {
      bg: "from-yellow-500/10 to-yellow-400/5",
      border: "border-yellow-500/30",
      icon: "from-yellow-400 to-amber-400",
      hover: "hover:border-yellow-500/50",
    },
    blue: {
      bg: "from-blue-500/10 to-blue-400/5",
      border: "border-blue-500/30",
      icon: "from-blue-400 to-cyan-400",
      hover: "hover:border-blue-500/50",
    },
    purple: {
      bg: "from-purple-500/10 to-purple-400/5",
      border: "border-purple-500/30",
      icon: "from-purple-400 to-pink-400",
      hover: "hover:border-purple-500/50",
    },
    cyan: {
      bg: "from-cyan-500/10 to-cyan-400/5",
      border: "border-cyan-500/30",
      icon: "from-cyan-400 to-blue-400",
      hover: "hover:border-cyan-500/50",
    },
    red: {
      bg: "from-red-500/10 to-red-400/5",
      border: "border-red-500/30",
      icon: "from-red-400 to-orange-400",
      hover: "hover:border-red-500/50",
    },
  };

  return (
    <section
      id="guarantees"
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
            Our{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Guarantees
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're committed to your success with industry-leading guarantees and
            support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            const colors = colorClasses[usp.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${colors.bg} p-6 rounded-xl border ${colors.border} ${colors.hover} transition-all duration-300 group backdrop-blur-sm`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${colors.icon} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-3">{usp.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <p className="text-gray-400">Happy Businesses</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2">
              48hr
            </div>
            <p className="text-gray-400">Setup Time</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              85%
            </div>
            <p className="text-gray-400">Money-Back Guarantee</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
