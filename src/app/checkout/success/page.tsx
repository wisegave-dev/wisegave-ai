"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const checkoutId = searchParams.get("checkout");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl mb-4">
            Payment{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Successful!
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for choosing WiseGave AI. Your subscription is now active.
          </p>

          {/* Order Details */}
          {checkoutId && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/20 mb-8">
              <p className="text-sm text-gray-400 mb-2">Order ID</p>
              <p className="text-white font-mono text-sm">{checkoutId}</p>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20 mb-8 text-left">
            <h2 className="text-2xl mb-4">What's Next?</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Check Your Email</p>
                  <p className="text-sm">
                    You will receive your account access details via email
                    shortly. Please note it may take up to 2 minutes for the
                    email to arrive, check your spam folder if you don't see it.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Your Setup Call is Coming
                  </p>
                  <p className="text-sm">
                    One of our specialists will be calling you soon to set up
                    your AI Employee from start to finish. We highly recommend
                    waiting for our team rather than setting things up yourself,
                    we'll have everything configured perfectly for your
                    business.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Go Live in 48 Hours
                  </p>
                  <p className="text-sm">
                    Once our specialist completes your setup, your AI Employee
                    will be fully deployed and ready within 48 hours. Sit back
                    and let the magic begin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg font-semibold hover:shadow-2xl hover:shadow-white/20"
            >
              Go to Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Setup Call
            </Link>
          </div> */}

          {/* Support */}
          <p className="mt-8 text-gray-400 text-sm">
            Need help? Contact us at{" "}
            <a
              href="mailto:contact@wisegave.com"
              className="text-blue-400 hover:text-blue-300"
            >
              contact@wisegave.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+18334121010"
              className="text-blue-400 hover:text-blue-300"
            >
              +1 833-412-1010
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <CheckoutSuccessContent />
    </Suspense>
  );
}
