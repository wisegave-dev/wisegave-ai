"use client";

import { motion } from "framer-motion";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Refund{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: March 18, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">1. Overview</h2>
              <p className="text-gray-300">
                WiseGave™ is committed to maintaining transparency and fairness
                in all billing and subscription matters. As we utilize Stripe
                for payment processing, this policy explains how refunds are
                handled in coordination with Stripe.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">2. Eligibility for Refund</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Refunds are available only for new customers.</li>
                <li>
                  • A refund request must be submitted within 30 calendar days
                  from the date of the first successful payment.
                </li>
                <li>
                  • Refund requests made after the 30-day window are not
                  eligible under any circumstances.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">3. Refund Amount</h2>
              <p className="text-gray-300">
                Eligible customers will receive a <strong>100% refund</strong>{" "}
                of the amount paid.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">4. How to Request a Refund</h2>
              <p className="text-gray-300 mb-3">
                To request a refund, customers must:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Send an email to contact@wisegave.com.</li>
                <li>
                  • Use the same email address associated with the WiseGave™
                  account.
                </li>
                <li>
                  • Clearly state the request for cancellation and refund.
                </li>
              </ul>
              <p className="text-gray-300 mt-3 italic">
                Note: Once we approve your request, we will initiate the refund
                directly through Stripe.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">5. Refund Processing Timeline</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  Once your refund request is approved by our support team, the
                  refund is submitted to Stripe immediately. Stripe then submits
                  the refund to your bank or card issuer right away. However,
                  depending on your bank&apos;s processing time, it can take
                  5–10 business days for the refund to appear on your
                  statement.
                </p>
                <p>
                  In some cases, if the refund is processed shortly after the
                  original charge, it may appear as a reversal — meaning the
                  original charge will simply disappear from your statement
                  rather than showing as a separate credit. This is normal.
                </p>
                <p>
                  If you do not see the refund after 10 business days and the
                  original charge is still showing on your statement, please
                  contact your bank directly for more information. WiseGave AI is
                  not responsible for delays caused by your bank or card
                  issuer.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">6. Subscription Cancellation</h2>
              <p className="text-gray-300 mb-3">Upon approval of a refund:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• The subscription will be immediately cancelled.</li>
                <li>• The account will not renew in the future.</li>
                <li>
                  • Access to WiseGave™ services may be restricted or
                  terminated.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">7. Non-Refundable Scenarios</h2>
              <p className="text-gray-300 mb-3">
                Refunds will not be issued if:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • The request is made after 30 days from the first payment.
                </li>
                <li>• The customer is not a new customer.</li>
                <li>
                  • The subscription was cancelled without a refund request.
                </li>
                <li>• Usage violates WiseGave™ Terms of Service.</li>
                <li>
                  • Stripe&apos;s original processing fees on the transaction are
                  non-refundable and will not be returned as part of the refund
                  amount.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">8. Policy Updates</h2>
              <p className="text-gray-300">
                WiseGave™ reserves the right to update or modify this Refund
                Policy at any time. Any changes will be published on this page
                and will apply prospectively.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">9. Contact Information</h2>
              <div className="space-y-2 text-gray-300">
                <p>For questions related to this policy, please contact:</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@wisegave.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    contact@wisegave.com
                  </a>
                </p>
                <p>
                  Address: 131 Continental Dr, Suite 305, Newark, DE 19713, United States
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
