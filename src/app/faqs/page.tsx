"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is WiseGave AI?",
    answer:
      "WiseGave AI is an advanced AI-powered automation platform that transforms how businesses interact with their customers. Our suite includes Voice AI, Conversation AI, and the WiseGave AI Employee to handle customer service, lead qualification, appointment scheduling, and more.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "We offer a done-for-you AI setup that is completed within 24 hours. Our team handles all the technical configuration and integration, so you can start benefiting from AI automation immediately.",
  },
  {
    question: "What is included in the pricing?",
    answer:
      "Our pricing includes Voice AI with unlimited call handling, Conversation AI across all channels, WiseGave AI Employee automation, complete setup within 24 hours, dedicated Success Manager, lead management, automated scheduling, multi-channel customer engagement, and 24/7 priority support.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes! We offer an 85% money-back guarantee within 7 days if you're not satisfied. This gives you a risk-free opportunity to experience the transformative power of WiseGave AI.",
  },
  {
    question: "Are there any long-term contracts?",
    answer:
      "No. We believe in earning your business every month. You can cancel anytime without penalties or long-term commitments. We offer flexible monthly and annual subscription options.",
  },
  {
    question: "What channels does Conversation AI support?",
    answer:
      "Our Conversation AI works seamlessly across multiple channels including phone calls, SMS, email, social media (Facebook, Instagram, Twitter), live chat, and more. All conversations are managed from a single intelligent system.",
  },
  {
    question: "How does the Voice AI handle complex conversations?",
    answer:
      "Our Voice AI uses advanced natural language processing to understand context and intent. It can handle complex, multi-turn conversations, qualify leads, schedule appointments, answer FAQs, and route calls to human agents when necessary.",
  },
  {
    question: "Can WiseGave AI integrate with my existing systems?",
    answer:
      "Yes! WiseGave AI can integrate with most popular CRM systems, calendar applications, booking platforms, and business tools. Our team handles all integration work during the setup process.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Every customer gets a dedicated Success Manager who assists with onboarding and ongoing optimization. We also provide 24/7 priority support via email, phone, and chat to ensure your AI systems run smoothly.",
  },
  {
    question: "How does WiseGave AI learn about my business?",
    answer:
      "During onboarding, we work with you to understand your business, services, common customer questions, and workflows. The AI is then trained specifically for your business context and continues to improve through machine learning as it handles more interactions.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve 30+ industries including plumbing, HVAC, cleaning services, landscaping, construction, healthcare, professional services, and more. If your industry isn't listed, we can create a custom solution for you.",
  },
  {
    question: "How much can I save with WiseGave AI?",
    answer:
      "Our customers typically see 50-80% reduction in customer service costs while handling 3-5x more customer interactions. ROI is often achieved within the first month of operation.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade security, end-to-end encryption, and comply with all major data protection regulations including GDPR. Your business and customer data is never shared or used for any purpose beyond serving your business needs.",
  },
  {
    question: "Can I customize the AI's responses?",
    answer:
      "Yes! Your Success Manager will work with you to customize responses, conversation flows, and behaviors to match your brand voice and business requirements. You have full control over how the AI represents your business.",
  },
  {
    question: "What happens if the AI can't handle a conversation?",
    answer:
      "The AI is designed to recognize when a conversation requires human intervention. It can seamlessly transfer calls or conversations to your team with full context and conversation history.",
  },
  {
    question: "Do you offer a demo?",
    answer:
      "Yes! You can book a personalized demo where we'll show you exactly how WiseGave AI can work for your specific business. The demo includes a live walkthrough of the features most relevant to your industry.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to know about WiseGave AI
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/80 transition-colors"
              >
                <span className="text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Book a Demo
            </Link>
            <a
              href="mailto:info@wisegave.ai"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg border border-gray-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
