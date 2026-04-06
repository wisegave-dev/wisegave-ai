"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-8">
            We seal all three holes with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              one fully managed system.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-12 rounded-2xl border-2 border-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl">
                The WiseGave™ Complete Growth System
              </h3>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The WiseGave™ Complete Growth System is a done-for-you platform
              that answers every call, builds your Google reputation
              automatically, and turns your website into a lead machine — all
              connected into one loop that feeds itself.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              You do not manage it. You do not set it up. You do not learn new
              software. We build it, we run it, and you get the results.
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-lg text-gray-200 leading-relaxed text-center">
                <span className="text-white">Website attracts the lead</span>{" "}
                → <span className="text-blue-400">Smart Receptionist books the job</span>{" "}
                →{" "}
                <span className="text-purple-400">
                  Reputation Engine turns it into a review
                </span>{" "}
                →{" "}
                <span className="text-cyan-400">review improves your ranking</span>{" "}
                →{" "}
                <span className="text-white">
                  ranking brings the next lead.
                </span>
              </p>
              <p className="text-center text-gray-400 mt-4 italic">
                It runs while you work.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
