"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is WiseGave AI Employee?",
    answer:
      "WiseGave AI Employee is a virtual AI team member that answers calls, chats with leads, qualifies inquiries, and books appointments automatically, 24/7.",
  },
  {
    question: "Who is this built for?",
    answer:
      "It is designed for US-based small and medium businesses that depend on inbound calls and messages, such as home services, clinics, agencies, and local service providers.",
  },
  {
    question: "What problems does it solve?",
    answer:
      "It reduces missed calls, improves response time, lowers staffing costs, and ensures consistent lead follow-up without hiring extra staff.",
  },
  {
    question: "What can the AI Employee do on day one?",
    answer:
      "It answers inbound calls, replies to chat and SMS, qualifies leads based on your rules, and books appointments directly into your calendar.",
  },
  {
    question: "How much does WiseGave AI Employee cost?",
    answer: "WiseGave AI Employee costs $999 per month",
  },
  {
    question: "What is included in the $999 per month?",
    answer:
      "Full AI Employee access, unlimited AI usage, Voice AI setup, Conversation AI setup, onboarding, and ongoing support.",
  },
  {
    question: "Are there any additional costs?",
    answer:
      "Yes. Phone numbers, calls, and SMS are charged based on actual carrier usage. AI usage is unlimited and not billed separately.",
  },
  {
    question: "Do you lock customers into long-term contracts?",
    answer:
      "No. The subscription is month-to-month and can be canceled anytime.",
  },
  {
    question: "Is the AI compliant with US regulations?",
    answer:
      "Yes. The system follows US telecom and messaging compliance standards, including consent-based communication.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Setup is completed in less than 48 hours after the demo and approval.",
  },
  {
    question: "Do I need technical knowledge to use this?",
    answer:
      "No. WiseGave™ handles the full setup, configuration, and AI training.",
  },
  {
    question: "Do you offer a demo before purchase?",
    answer:
      "Yes. A live demo and use-case discussion are mandatory before onboarding.",
  },
  {
    question: "Where is WiseGave™ based?",
    answer:
      "WiseGave™ operates globally with an offshore operations team while serving US-based customers.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Onboarding support, AI optimization, troubleshooting, and continuous performance tuning.",
  },
  {
    question: "What happens if the AI cannot handle a call or chat?",
    answer:
      "You can set escalation rules so conversations are transferred to a human when needed.",
  },
  {
    question: "Can this scale for multiple locations?",
    answer:
      "Yes. The system supports multiple locations, numbers, and calendars under one setup.",
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
