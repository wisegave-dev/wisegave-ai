"use client";

import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Check, Lock, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const planType = searchParams.get("plan") || "monthly"; // monthly or annual

  const priceBeforeDiscount = 499;
  const monthlyPrice = 999;
  const annualPrice = 4990;

  useEffect(() => {
    const initializeCheckout = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Create checkout session via API route
        const response = await fetch("/api/polar/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // Product ID will be loaded from environment variable
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Failed to create checkout session"
          );
        }

        const data = await response.json();
        setCheckoutUrl(data.checkoutUrl);
        setIsLoading(false);
      } catch (err: any) {
        console.error("Error initializing checkout:", err);
        setError(
          err.message || "Failed to initialize checkout. Please try again."
        );
        setIsLoading(false);
      }
    };

    initializeCheckout();
  }, [planType]);

  const handleCheckout = () => {
    if (checkoutUrl && checkoutUrl !== "#") {
      window.location.href = checkoutUrl;
    } else {
      setError("Checkout URL not available. Please try refreshing the page.");
    }
  };

  const features = [
    "Voice AI with unlimited call handling",
    "Conversation AI across all channels",
    "Done-for-you AI setup within 48 hours",
    "Dedicated Success Manager",
    "Lead management and qualification",
    "Automated appointment scheduling",
    "Multi-channel customer engagement",
    "100% money-back guarantee (30 days)",
    "No long-term contracts - cancel anytime",
    "24/7 priority support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">
              Complete Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Purchase
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Secure checkout powered by Polar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">
                      WiseGave AI Complete
                    </p>
                    <p className="text-sm text-gray-400">
                      {planType === "annual" ? "Annual Plan" : "Monthly Plan"}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-end gap-2">
                      <span className="text-gray-400 text-lg line-through">
                        $
                        {planType === "annual"
                          ? (monthlyPrice * 12).toLocaleString()
                          : monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-3xl font-bold">
                        $
                        {planType === "annual"
                          ? annualPrice.toLocaleString()
                          : priceBeforeDiscount.toLocaleString()}
                      </span>
                      <span className="text-gray-400 mb-1">
                        /{planType === "annual" ? "year" : "month"}
                      </span>
                    </div>
                    {planType === "monthly" && (
                      <p className="text-xs text-gray-500 mt-1">
                        (First month only)
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-xl font-semibold">
                    $
                    {planType === "annual"
                      ? annualPrice.toLocaleString()
                      : priceBeforeDiscount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Taxes calculated at checkout</span>
                </div>
              </div>
            </div>

            {/* Features & Checkout */}
            <div className="space-y-6">
              {/* Features List */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h2 className="text-2xl mb-6">What's Included</h2>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkout Button */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                {error ? (
                  <div className="text-center">
                    <p className="text-red-400 mb-4">{error}</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : isLoading ? (
                  <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-400" />
                    <p className="text-gray-400">Loading checkout...</p>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 mb-4"
                    >
                      Complete Purchase
                    </button>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span>
                        Secure payment via Polar • 100% money-back guarantee
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  100% Money-Back Guarantee
                </p>
                <p className="text-xs text-gray-400">
                  Not satisfied? Get a full refund within 30 days, no questions
                  asked.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
