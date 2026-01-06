"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const priceBeforeDiscount = 599;
  const monthlyPrice = 999;
  const annualPrice = 5990;
  const savings = monthlyPrice * 12 - annualPrice;

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-black via-[#1a1a1a] to-black"
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
            Simple,{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the plan that works best for your business. No hidden fees,
            cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-black border border-white/20 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg transition-all ${
                !isAnnual
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            {/* <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual
              {isAnnual && (
                <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                  Save ${savings.toLocaleString()}
                </span>
              )}
            </button> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 rounded-2xl border-2 border-white/20 relative overflow-hidden backdrop-blur-sm">
            {/* Popular Badge */}
            {isAnnual && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-white to-gray-200 text-black px-4 py-1 text-sm rounded-bl-lg">
                Most Popular
              </div>
            )}

            {/* Pricing */}
            <div className="text-center mb-8">
              <h3 className="text-3xl mb-4">WiseGave AI Complete</h3>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-gray-400 text-2xl line-through">
                  $
                  {isAnnual
                    ? (monthlyPrice * 12).toLocaleString()
                    : monthlyPrice.toLocaleString()}
                </span>
                <span className="text-6xl">
                  $
                  {isAnnual
                    ? annualPrice.toLocaleString()
                    : priceBeforeDiscount.toLocaleString()}
                </span>
                <span className="text-2xl text-gray-400 mb-2">
                  /{isAnnual ? "year" : "month"}
                </span>
              </div>
              {isAnnual && (
                <p className="text-white">
                  Save ${savings.toLocaleString()} with annual billing
                </p>
              )}
              {!isAnnual && (
                <p className="text-gray-400 text-sm">
                  (Applicable for the first month only)
                </p>
              )}
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Voice AI with unlimited call handling
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Conversation AI across all channels
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Done-for-you AI setup within 48 hours
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">Dedicated Success Manager</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Lead management and qualification
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Automated appointment scheduling
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Multi-channel customer engagement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  100% money-back guarantee (30 days)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  No long-term contracts - cancel anytime
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">24/7 priority support</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.open("https://paddle.com", "_blank")}
              className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg hover:shadow-2xl hover:shadow-white/20"
            >
              Get Started Now
            </button>

            {/* See Full Pricing Details Link */}
            <Link
              href="/pricing"
              className="w-full mt-4 inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              See full pricing details
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-center text-gray-400 text-sm mt-4">
              🔒 Secure payment via Paddle • 100% money-back guarantee
            </p>
          </div>
        </motion.div>

        {/* Money-back guarantee callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Risk-Free Trial</p>
              <p className="text-sm text-gray-400">
                100% money-back guarantee if not satisfied within 7 days
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
