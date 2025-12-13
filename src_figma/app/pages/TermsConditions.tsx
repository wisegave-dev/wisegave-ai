import { motion } from 'motion/react';

export function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Terms & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: December 12, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using WiseGave AI services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">2. Service Description</h2>
              <p className="text-gray-300 mb-3">
                WiseGave AI provides AI-powered automation solutions including:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Voice AI for automated call handling</li>
                <li>• Conversation AI for multi-channel customer engagement</li>
                <li>• WiseGave AI Employee for comprehensive business automation</li>
                <li>• Done-for-you setup and integration services</li>
                <li>• Ongoing support and optimization</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">3. Subscription and Payment</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>3.1 Pricing:</strong> Monthly subscription: $999/month. Annual subscription: $9,990/year.</p>
                <p><strong>3.2 Payment:</strong> All payments are processed securely through Paddle.</p>
                <p><strong>3.3 Billing:</strong> Subscriptions are billed in advance on a monthly or annual basis.</p>
                <p><strong>3.4 Cancellation:</strong> You may cancel your subscription at any time. No refunds for partial months.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">4. Money-Back Guarantee</h2>
              <p className="text-gray-300">
                We offer an 85% money-back guarantee within 7 days of your initial purchase if you are not satisfied with our services. To request a refund, contact our support team at refunds@wisegave.ai.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">5. Service Level Agreement</h2>
              <div className="space-y-3 text-gray-300">
                <p><strong>5.1 Uptime:</strong> We guarantee 99.9% uptime for our services.</p>
                <p><strong>5.2 Setup Time:</strong> Initial setup will be completed within 24 hours of subscription.</p>
                <p><strong>5.3 Support:</strong> 24/7 priority support via email, phone, and chat.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">6. User Responsibilities</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Provide accurate business information during setup</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Use the service in compliance with applicable laws</li>
                <li>• Do not misuse or abuse the service</li>
                <li>• Provide necessary access for integration and support</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">7. Intellectual Property</h2>
              <p className="text-gray-300">
                All intellectual property rights in WiseGave AI services, including software, algorithms, and documentation, remain the property of WiseGave AI. You are granted a limited, non-exclusive license to use the services for your business purposes.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300">
                WiseGave AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. Our total liability is limited to the amount you paid for the service in the 12 months preceding the claim.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">9. Data and Privacy</h2>
              <p className="text-gray-300">
                Your use of our services is also governed by our Privacy Policy. We are committed to protecting your data and maintaining strict confidentiality.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">10. Termination</h2>
              <div className="space-y-3 text-gray-300">
                <p><strong>10.1 By You:</strong> You may terminate your subscription at any time through your account settings.</p>
                <p><strong>10.2 By Us:</strong> We may terminate or suspend your account for violation of these terms or fraudulent activity.</p>
                <p><strong>10.3 Effect:</strong> Upon termination, you will lose access to the services and any data stored in the system.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will notify you of significant changes via email. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">12. Governing Law</h2>
              <p className="text-gray-300">
                These terms shall be governed by the laws of Australia. Any disputes shall be resolved in the courts of New South Wales, Australia.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">13. Contact Information</h2>
              <div className="space-y-2 text-gray-300">
                <p>For questions about these Terms & Conditions:</p>
                <p>Email: <a href="mailto:legal@wisegave.ai" className="text-blue-400 hover:text-blue-300">legal@wisegave.ai</a></p>
                <p>Phone: <a href="tel:+61234567890" className="text-blue-400 hover:text-blue-300">+61 2 3456 7890</a></p>
                <p>Address: Sydney, NSW, Australia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
