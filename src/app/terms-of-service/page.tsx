"use client";

import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Terms of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: December 12, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using WiseGave AI services ("the Service"), you
                accept and agree to be bound by the terms and provisions of this
                agreement. These terms apply to all visitors, users, and others
                who access or use the Service.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">2. Service Description</h2>
              <p className="text-gray-300 mb-3">
                WiseGave AI provides a software-as-a-service (SaaS) platform for
                AI automation. Key features include:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Voice AI software for automated call handling.</li>
                <li>• Conversation AI tools for multi-channel engagement.</li>
                <li>
                  • Initial account configuration and onboarding support
                  (Software Configuration).
                </li>
                <li>
                  • Access to ongoing platform updates and optimization tools.
                </li>
              </ul>
              <p className="text-gray-300 mt-3 text-sm italic">
                Note: Any reference to "setup" or "onboarding" refers strictly
                to the technical configuration of our software, not consulting
                or agency services.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">
                3. Subscription, Payment & Merchant of Record
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>3.1 Merchant of Record:</strong> Our order process is
                  conducted by our online reseller and Merchant of Record (MoR).
                  The MoR is the Merchant of Record for all our orders. Use of
                  the service constitutes agreement to the MoR's Terms of
                  Service and Privacy Policy regarding payment processing.
                </p>
                <p>
                  <strong>3.2 Pricing:</strong> The subscription fee is
                  $999/month, billed in advance.
                </p>
                <p>
                  <strong>3.3 Taxes:</strong> All fees are exclusive of taxes,
                  which we will charge as applicable. The MoR is responsible for
                  collecting and remitting global sales tax/VAT where required.
                </p>
                <p>
                  <strong>3.4 Cancellation:</strong> You may cancel your
                  subscription at any time via your account dashboard or by
                  contacting support. Access remains active until the end of the
                  current billing cycle.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">4. Money-Back Guarantee</h2>
              <p className="text-gray-300">
                We offer a 100% money-back guarantee within 30 days of your
                initial purchase if you are not satisfied with our software.
                Refund requests are processed by our Merchant of Record and
                typically take 5-10 business days to appear in your account.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">5. Service Level Agreement</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>5.1 Uptime:</strong> We strive for 99.9% uptime for
                  our platform services.
                </p>
                <p>
                  <strong>5.2 Support:</strong> Technical support is available
                  to assist with software configuration and troubleshooting.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">6. User Responsibilities</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Provide accurate registration information.</li>
                <li>• Maintain the security of your account credentials.</li>
                <li>
                  • Use the software in compliance with all applicable laws
                  (including telecommunications and recording laws).
                </li>
                <li>
                  • Do not use the platform for unauthorized marketing or spam.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">7. Intellectual Property</h2>
              <p className="text-gray-300">
                All intellectual property rights in WiseGave AI services,
                including software code, algorithms, and documentation, remain
                the property of WiseGave AI. You are granted a limited,
                non-exclusive, non-transferable license to access and use the
                software for your internal business purposes.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300">
                WiseGave AI shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages. To the maximum
                extent permitted by law, our total liability shall not exceed
                the amount you paid for the service in the 12 months preceding
                the claim.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">9. Data and Privacy</h2>
              <p className="text-gray-300">
                Your use of our services is governed by our Privacy Notice. You
                acknowledge that financial data is processed securely by our
                Merchant of Record and not stored directly on our servers.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">10. Termination</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>10.1 By You:</strong> You may terminate your
                  subscription at any time.
                </p>
                <p>
                  <strong>10.2 By Us:</strong> We may terminate or suspend your
                  account immediately, without prior notice or liability, for
                  any reason whatsoever, including without limitation if you
                  breach the Terms.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will
                notify you of significant changes via email. Continued use of
                the service after changes constitutes acceptance of the new
                terms.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">12. Governing Law</h2>
              <p className="text-gray-300">
                These terms shall be governed by and construed in accordance
                with the laws of Bangladesh. Any disputes arising from these
                terms shall be subject to the exclusive jurisdiction of the
                courts located in Dhaka, Bangladesh.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">13. Contact Information</h2>
              <div className="space-y-2 text-gray-300">
                <p>For questions about these Terms of Service:</p>
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
                  Phone:{" "}
                  <a
                    href="tel:+18334121010"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    +1 833-412-1010
                  </a>
                </p>
                <p>
                  Address: B-2/B, Floor 3, House 5, Road 19, Sector 11, Uttara,
                  Dhaka-1230, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
