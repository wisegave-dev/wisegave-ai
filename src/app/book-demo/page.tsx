"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video } from "lucide-react";
import { useState } from "react";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [booked, setBooked] = useState(false);

  const availableDates = [
    "2025-12-15",
    "2025-12-16",
    "2025-12-17",
    "2025-12-18",
    "2025-12-19",
    "2025-12-22",
    "2025-12-23",
  ];

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setBooked(true);
      // In real app, would send booking to backend/GHL
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  if (booked) {
    return (
      <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-4xl mb-4">Demo Booked Successfully!</h2>
          <p className="text-xl text-gray-400 mb-2">
            Your demo is scheduled for:
          </p>
          <p className="text-2xl text-blue-400 mb-6">
            {formatDate(selectedDate)} at {selectedTime}
          </p>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
            <h3 className="text-xl mb-4">What to Expect</h3>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Video className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  We'll send you a calendar invite with a video meeting link
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>The demo typically lasts 60 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>You'll receive a reminder 24 hours before</span>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Return to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Book Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Demo
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Schedule a personalized demo to see how WiseGave AI can transform
            your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Date Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-400" />
              Select a Date
            </h3>
            <div className="space-y-2">
              {availableDates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    selectedDate === date
                      ? "bg-blue-600 border-2 border-blue-400"
                      : "bg-gray-700/50 border-2 border-gray-600 hover:border-gray-500"
                  }`}
                >
                  {formatDate(date)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Time Selection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-400" />
              Select a Time
            </h3>
            {selectedDate ? (
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg transition-all ${
                      selectedTime === time
                        ? "bg-purple-600 border-2 border-purple-400"
                        : "bg-gray-700/50 border-2 border-gray-600 hover:border-gray-500"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-400">
                Please select a date first
              </div>
            )}
          </motion.div>
        </div>

        {/* Booking Summary and CTA */}
        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl border-2 border-blue-500/30"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl mb-2">Confirm Your Demo</h3>
              <p className="text-xl text-gray-300">
                {formatDate(selectedDate)} at {selectedTime}
              </p>
              <p className="text-gray-400 mt-2">Duration: 1 hour</p>
            </div>
            <button
              onClick={handleBooking}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Confirm Booking
            </button>
          </motion.div>
        )}

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-gray-800/30 p-6 rounded-xl border border-gray-700"
        >
          <h4 className="text-lg mb-4">What You'll Learn in This Demo:</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>
                How Voice AI and Conversation AI work for your specific industry
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>
                Live demonstration of WiseGave AI Employee capabilities
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Integration options with your existing systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Pricing and implementation timeline discussion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Q&A session tailored to your business needs</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
