"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Play, Volume2 } from "lucide-react";

export function ProductsSection() {
  return (
    <section
      id="products"
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
              AI-Powered
            </span>{" "}
            Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge Voice AI and Engage AI tools that work seamlessly
            across various communication channels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Voice AI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl backdrop-blur-sm">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl">Voice AI</h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Automates voice-based customer interactions, providing seamless
              communication over the phone. Handle calls 24/7, qualify leads,
              schedule appointments, and provide instant responses.
            </p>

            <div className="bg-black/50 rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-blue-400" />
                  Demo Voice Message
                </h4>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-black to-[#0a0a0a] rounded-lg overflow-hidden border border-blue-500/20">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/jvwO9TwPJXs?si=O-GKwcaIkTK30x7Q"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  Natural language processing for human-like conversations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  Automated appointment scheduling and follow-ups
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  Lead qualification and routing to sales team
                </p>
              </div>
            </div>
          </motion.div>

          {/* Conversation AI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-500/10 to-cyan-500/5 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl backdrop-blur-sm">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl">Conversation AI</h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Engages customers across multiple channels including social media,
              delivering real-time, personalized responses. Answer questions,
              guide users, and qualify leads automatically.
            </p>

            <div className="bg-black/50 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg flex items-center gap-2">
                  <Play className="w-5 h-5 text-purple-400" />
                  How It Works Video
                </h4>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-black to-[#0a0a0a] rounded-lg overflow-hidden border border-purple-500/20">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Z0Ipg7cmrCU?si=Kpm_Y6ef8gkdP_Qv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  Multi-channel support (SMS, Email, Social Media, Chat)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  Real-time personalized responses
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  Intelligent lead nurturing and qualification
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WiseGave AI Employee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-white/5 via-gray-400/5 to-white/5 p-8 md:p-12 rounded-2xl border border-white/20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl mb-4">
              Introducing{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                WiseGave AI Employee
              </span>
            </h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Your all-in-one automation tool, designed to handle key customer
              service and engagement tasks, making your business more efficient.
              Whether it's managing leads, answering inquiries, or scheduling
              appointments, WiseGave AI Employee integrates seamlessly into your
              workflow.
            </p>
            <p className="text-lg text-gray-400">
              Scale operations and reduce reliance on human employees.
              Businesses can maximize output while minimizing costs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
