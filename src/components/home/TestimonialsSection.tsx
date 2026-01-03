"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    rating: 5,
    text: "WiseGave AI transformed our customer service completely. We reduced response time by 90% and customer satisfaction increased dramatically.",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, BuildRight Co",
    rating: 5,
    text: "The setup was incredibly smooth. Within 24 hours, we had a fully functioning AI employee handling our calls and scheduling.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, HomeServices Plus",
    rating: 5,
    text: "Cost savings have been phenomenal. We're doing triple the volume with half the staff costs. Absolutely game-changing.",
  },
  {
    name: "David Thompson",
    role: "Marketing Director, CleanPro Services",
    rating: 5,
    text: "Lead qualification has never been better. The AI understands our business and filters leads perfectly before they reach our team.",
  },
  {
    name: "Lisa Wang",
    role: "Owner, Premier HVAC",
    rating: 5,
    text: "The 24/7 availability means we never miss a potential customer. Our bookings increased by 60% in the first month alone.",
  },
  {
    name: "James Patterson",
    role: "CFO, MultiService Group",
    rating: 5,
    text: "ROI was immediate. The money-back guarantee gave us confidence, but we never considered using it. Worth every penny.",
  },
  {
    name: "Amanda Foster",
    role: "Director, GreenLawn Solutions",
    rating: 5,
    text: "Customer engagement across all channels is seamless. Social media, phone, email - the AI handles it all flawlessly.",
  },
  {
    name: "Robert Kim",
    role: "President, SecureHome Systems",
    rating: 5,
    text: "The dedicated success manager made onboarding so easy. They understood our needs and configured everything perfectly.",
  },
  {
    name: "Jennifer Martinez",
    role: "VP Operations, FixIt Fast",
    rating: 5,
    text: "Appointment scheduling automation alone paid for the entire system. Our office staff can now focus on higher-value tasks.",
  },
  {
    name: "Thomas Anderson",
    role: "Managing Partner, ProRepair Services",
    rating: 5,
    text: "The AI learns and adapts. It gets better every day at handling our specific business needs. Truly intelligent automation.",
  },
  {
    name: "Rachel Green",
    role: "Owner, Elite Cleaning Co",
    rating: 5,
    text: "No long-term contract was a big plus for us. But after the first week, we knew we'd never cancel. Essential business tool.",
  },
  {
    name: "Kevin O'Brien",
    role: "Director, Complete Home Services",
    rating: 5,
    text: "Integration was seamless with our existing systems. The technical setup was handled entirely by the WiseGave team.",
  },
];

export function TestimonialsSection() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const testimonialsPerGroup = 4;
  const totalGroups = Math.ceil(testimonials.length / testimonialsPerGroup);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  const currentTestimonials = testimonials.slice(
    currentGroup * testimonialsPerGroup,
    (currentGroup + 1) * testimonialsPerGroup
  );

  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of businesses already transforming their operations
            with WiseGave AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${currentGroup}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {[...Array(totalGroups)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGroup(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentGroup
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg backdrop-blur-sm">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
              <div className="relative w-6 h-6">
                <Star className="w-6 h-6 fill-gray-500/30 text-gray-500 absolute inset-0" />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: "80%", clipPath: "inset(0 0 0 0)" }}
                >
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            </div>
            <div className="text-left">
              <p className="text-2xl">4.9 out of 5</p>
              <p className="text-sm text-gray-400">Based on 700+ reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
