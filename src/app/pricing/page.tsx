"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Headphones,
} from "lucide-react";

export default function PricingPage() {
  const monthlyPrice = 999;
  const priceBeforeDiscount = 599;

  const coreFeatures = [
    "Voice AI with unlimited call handling",
    "Conversation AI across all channels",
    "WiseGave AI Employee automation",
    "Lead management and qualification",
    "Automated appointment scheduling",
    "Multi-channel customer engagement",
  ];

  const premiumSupport = [
    "Done-for-you AI setup within 48 hours",
    "Dedicated Success Manager",
    "24/7 priority support",
    "85% money-back guarantee (30 days)",
    "No long-term contracts - cancel anytime",
    "Free platform updates & improvements",
  ];

  const valueProps = [
    {
      icon: Clock,
      title: "48-Hour Setup",
      description:
        "Go live within 48 hours with our done-for-you AI implementation",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "85% Money-Back",
      description:
        "Not satisfied? Get 85% of your money back within 30 days, no questions asked",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "No Contracts",
      description:
        "Cancel anytime. No long-term commitments or hidden cancellation fees",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Dedicated success manager and priority support whenever you need it",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const faqs = [
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees! The $999/month includes everything - implementation, setup, training, and ongoing support.",
    },
    {
      question: "Are there usage limits?",
      answer:
        "No usage limits! Handle unlimited calls, conversations, and customer interactions without any additional charges.",
    },
    {
      question: "How does the money-back guarantee work?",
      answer:
        "If you're not satisfied within 30 days, contact us and we'll refund 85% of your payment, no questions asked.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes! There are no long-term contracts. Cancel anytime with no penalties or cancellation fees.",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Simple,{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to transform your business with AI. No hidden
              fees, no surprises, cancel anytime.
            </p>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-12 md:p-16 rounded-3xl border-2 border-white/20 relative overflow-hidden backdrop-blur-sm">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-white to-gray-200 text-black px-6 py-2 text-sm rounded-bl-2xl font-semibold">
                Most Popular
              </div>

              {/* Pricing Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl mb-6 text-white">
                  WiseGave AI Complete
                </h2>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-gray-400 text-2xl line-through">
                    ${monthlyPrice.toLocaleString()}
                  </span>
                  <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    ${priceBeforeDiscount.toLocaleString()}
                  </span>
                  <span className="text-2xl text-gray-400 mb-2">/month</span>
                </div>
                <p className="text-xl text-gray-300 mb-2">
                  Full AI suite with unlimited usage
                </p>
                <p className="text-sm text-gray-400">
                  (Applicable for the first month only)
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Core Features
                  </h3>
                  {coreFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Premium Support
                  </h3>
                  {premiumSupport.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => window.open("https://paddle.com", "_blank")}
                className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black py-5 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl font-semibold hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-2"
              >
                Get Started Now
                <ArrowRight className="w-6 h-6" />
              </button>

              <p className="text-center text-gray-400 text-sm mt-6">
                🔒 Secure payment via Paddle • 85% money-back guarantee • Setup
                in 48 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WiseGave AI?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're committed to your success with industry-leading guarantees
              and support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${prop.gradient} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-3 text-white">{prop.title}</h3>
                  <p className="text-gray-400">{prop.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Pricing{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FAQs
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-xl mb-2 text-white">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using WiseGave AI to automate
              customer interactions and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("https://paddle.com", "_blank")}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
