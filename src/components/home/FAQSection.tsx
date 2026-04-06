"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Everything is live within 5 business days. We handle the entire setup — you just answer a few questions about your business at the start and we do the rest.",
  },
  {
    question: "Do I need to do anything once it is live?",
    answer:
      "No. Calls get answered, review requests go out, leads get followed up — all automatically. You receive a monthly report showing exactly what the system did. Your only job is the work you were already doing.",
  },
  {
    question: "I already have a website. Do I need a new one?",
    answer:
      "If your current website is already generating booked jobs every week — you may not need ours. Most contractors we speak with have a website that exists but does not produce leads. If that is you, we replace it with one that does. We can look at your current site together on the demo call.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. You pay monthly and can cancel anytime. We keep clients because the system delivers results — not because of contracts.",
  },
  {
    question: "What exactly is the guarantee?",
    answer:
      "If you do not get at least 5 new Google reviews and 3 new inbound leads within your first 30 days — you get 100% of your money back. No questions asked. One email.",
  },
  {
    question: "How does the Smart Receptionist work?",
    answer:
      "It answers your inbound calls in your business name, handles common questions, books appointments into your calendar, and sends a follow-up text if a call is missed. It also handles your website live chat around the clock. From the customer's perspective — it sounds and behaves exactly like a professional front desk.",
  },
  {
    question: "What is the customer list reactivation?",
    answer:
      "In week one we take your existing customer list and send automated review requests to everyone who has worked with you before. Most clients see their first new Google reviews within 48 hours. You see real results before the rest of the system is even fully live.",
  },
  {
    question: "What businesses is this built for?",
    answer:
      "We work with home services businesses — HVAC, plumbing, electrical, roofing, and similar trades. If you have an existing customer base, get inbound calls, and want more Google reviews and booked jobs without hiring more staff — this system was built for you.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Got Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about WiseGave AI
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
              >
                <span className="text-lg pr-8 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${
                    openIndex === index
                      ? "from-blue-500 to-purple-500"
                      : "from-white/10 to-white/5"
                  } flex items-center justify-center transition-all duration-300`}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === index ? "text-white" : "text-gray-400"
                    } transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 border-t border-white/10"
                >
                  <p className="text-gray-400 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA - View All FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">Have more questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faqs"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-blue-500/50 rounded-lg transition-all duration-300 group backdrop-blur-sm"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all">
                View All FAQs
              </span>
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
