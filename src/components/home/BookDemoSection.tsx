'use client';

import { motion } from 'framer-motion';
import { Calendar, AlertCircle, TrendingDown, Phone, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';


export function BookDemoSection() {
  return (
    <section id="book-demo" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Don't Let Revenue Slip Away
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl mb-6 leading-tight">
            Every Missed Call is a{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Lost Customer
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-8">
            See how WiseGave AI ensures you never lose another lead to competitors who answer faster
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-900/10 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm">
            <TrendingDown className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-3xl md:text-4xl text-blue-400 mb-2">78%</h3>
            <p className="text-gray-300">of customers choose the first business that responds</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/10 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
            <Phone className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-3xl md:text-4xl text-purple-400 mb-2">62%</h3>
            <p className="text-gray-300">of calls go unanswered during peak hours</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-900/10 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
            <Clock className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-3xl md:text-4xl text-cyan-400 mb-2">$$$</h3>
            <p className="text-gray-300">Average revenue lost per missed call: $200-$500</p>
          </div>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 md:p-12 rounded-2xl border-2 border-white/20 backdrop-blur-lg relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl mb-4">
                  Stop Losing Leads. Start Capturing Every Opportunity.
                </h3>
                <p className="text-xl text-gray-300 mb-2">
                  Book a 15-minute demo to see how WiseGave AI answers every call, 24/7
                </p>
                <p className="text-gray-400">
                  No commitment. No credit card required.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-8">
                <Link
                  href="/book-demo"
                  className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white text-xl px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25"
                >
                  Book Your Demo Now →
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-300">100% Refund</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-300">Setup in 24 Hours</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">No Long-Term Contracts</span>
                </div>
              </div>

              {/* Consent Text */}
              <div className="text-center text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
                <p>
                  By booking a demo, you consent to receive automated SMS messages and/or calls from WiseGave AI at the number provided. 
                  Message and data rates may apply. Reply STOP to opt out, HELP for assistance. 
                  View our <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">Privacy Notice</Link> and{' '}
                  <Link href="/terms-conditions" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</Link>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Trusted by service businesses across 30+ industries</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ HVAC Companies</span>
            <span>✓ Plumbing Services</span>
            <span>✓ Cleaning Businesses</span>
            <span>✓ Property Management</span>
            <span>✓ Medical Practices</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}