"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl mb-6 leading-tight">
            Get the lead. Book the job.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Earn the review. Repeat.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Book a free 15-minute demo call and see exactly how the Complete
            Growth System works for your business. No pitch. No pressure. If it
            is not the right fit — we&apos;ll tell you.
          </p>

          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl shadow-2xl hover:shadow-white/20 group"
          >
            Book your free demo call
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="mt-6 text-gray-400">
            No contracts. 100% money-back guarantee. Live in 5 days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
