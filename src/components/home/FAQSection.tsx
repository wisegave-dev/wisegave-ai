'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is WiseGave AI?',
    answer: 'WiseGave AI is an advanced AI-powered automation platform that transforms how businesses interact with their customers. Our suite includes Voice AI, Conversation AI, and the WiseGave AI Employee to handle customer service, lead qualification, appointment scheduling, and more.'
  },
  {
    question: 'How quickly can I get started?',
    answer: 'We offer a done-for-you AI setup that is completed within 24 hours. Our team handles all the technical configuration and integration, so you can start benefiting from AI automation immediately.'
  },
  {
    question: 'What is included in the pricing?',
    answer: 'Our pricing includes Voice AI with unlimited call handling, Conversation AI across all channels, WiseGave AI Employee automation, complete setup within 24 hours, dedicated Success Manager, lead management, automated scheduling, multi-channel customer engagement, and 24/7 priority support.'
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer an 85% money-back guarantee within 7 days if you\'re not satisfied. This gives you a risk-free opportunity to experience the transformative power of WiseGave AI.'
  },
  {
    question: 'Are there any long-term contracts?',
    answer: 'No. We believe in earning your business every month. You can cancel anytime without penalties or long-term commitments. We offer flexible monthly and annual subscription options.'
  },
  {
    question: 'What channels does Conversation AI support?',
    answer: 'Our Conversation AI works seamlessly across multiple channels including phone calls, SMS, email, social media (Facebook, Instagram, Twitter), live chat, and more. All conversations are managed from a single intelligent system.'
  },
  {
    question: 'How does the Voice AI handle complex conversations?',
    answer: 'Our Voice AI uses advanced natural language processing to understand context and intent. It can handle complex, multi-turn conversations, qualify leads, schedule appointments, answer FAQs, and route calls to human agents when necessary.'
  },
  {
    question: 'Can WiseGave AI integrate with my existing systems?',
    answer: 'Yes! WiseGave AI can integrate with most popular CRM systems, calendar applications, booking platforms, and business tools. Our team handles all integration work during the setup process.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
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
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
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
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${
                  openIndex === index 
                    ? 'from-blue-500 to-purple-500' 
                    : 'from-white/10 to-white/5'
                } flex items-center justify-center transition-all duration-300`}>
                  <ChevronDown 
                    className={`w-5 h-5 ${
                      openIndex === index ? 'text-white' : 'text-gray-400'
                    } transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 border-t border-white/10"
                >
                  <p className="text-gray-400 leading-relaxed pt-4">{faq.answer}</p>
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
